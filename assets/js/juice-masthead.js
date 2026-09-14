// The landing-page masthead: twelve copies of the Juice mark cross the scene and
// one parks beside the wordmark.
//
// External rather than inline because the theme renders every page through
// _layouts/vendor/compress.html, whose collapse step splits the document on
// runs of whitespace and rejoins with single spaces. Only <pre> is exempt, so
// an inline script would arrive as one line.
//
// The scene is authored in fixed user units and never rebuilt for viewport
// size: the SVG's own viewBox scaling does that, so the timing, the wobble
// amplitudes and the parallax read the same at every width.
//
// Adapted from the standalone prototype. The prototype's pause and replay
// controls are gone; an IntersectionObserver stops the loop while the masthead
// is off screen, which is what those buttons were really for.
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const scene = document.getElementById('juice-scene');
  const swarm = document.getElementById('juice-swarm');
  const wordmark = document.getElementById('juice-wordmark');
  const parked = document.getElementById('juice-hero-static');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!scene || !swarm || !wordmark) return;

  const bees = [
    { z:0.10, y:42,  delay:950,  duration:7600, amp:9,  cycles:1.9, phase:1.1, startX:1360 },
    { z:0.16, y:70,  delay:300,  duration:7250, amp:10, cycles:1.7, phase:0.4, startX:1320 },
    { z:0.22, y:242, delay:50,   duration:6800, amp:13, cycles:2.1, phase:2.1, startX:1380 },
    { z:0.29, y:108, delay:900,  duration:6300, amp:11, cycles:2.4, phase:4.0, startX:1340 },
    { z:0.36, y:205, delay:600,  duration:5950, amp:16, cycles:1.8, phase:1.2, startX:1400 },
    { z:0.44, y:54,  delay:1250, duration:5500, amp:14, cycles:2.6, phase:5.3, startX:1330 },
    { z:0.52, y:268, delay:1050, duration:5100, amp:17, cycles:2.2, phase:3.4, startX:1370 },
    { z:0.61, y:150, delay:250,  duration:4700, amp:20, cycles:2.8, phase:0.9, startX:1410 },
    { z:0.70, y:222, delay:1450, duration:4350, amp:17, cycles:2.0, phase:4.7, startX:1350 },
    { z:0.79, y:82,  delay:700,  duration:4000, amp:22, cycles:2.5, phase:2.7, startX:1430 },
    { z:0.88, y:184, delay:1120, duration:3700, amp:23, cycles:2.3, phase:5.6, startX:1400 },
    { z:1.00, y:100, delay:800,  duration:4300, amp:19, cycles:1.6, phase:0.0, startX:1370, hero:true }
  ].sort((a,b) => a.z - b.z);

  for (const bee of bees) {
    const group = document.createElementNS(NS, 'g');
    const use = document.createElementNS(NS, 'use');
    use.setAttribute('href', '#juice-bee');
    group.appendChild(use);
    group.style.opacity = '0';
    swarm.appendChild(group);
    bee.el = group;
  }

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  // The prototype's own geometry, unchanged: the hero mark parks here and the
  // wordmark sits beside it at the x its element carries.
  const heroX = 430;
  const heroY = 150;

  function placeBee(bee, x, y, scale, rotation, opacity) {
    bee.el.setAttribute(
      'transform',
      `translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${rotation.toFixed(2)}) scale(${scale.toFixed(3)}) translate(-14.6185 -15.8985)`
    );
    bee.el.style.opacity = String(clamp(opacity, 0, 1));
  }

  function draw(elapsed) {
    for (const bee of bees) {
      const local = elapsed - bee.delay;
      const scale = bee.hero ? 4.65 : 0.95 + bee.z * 3.35;
      const opacity = 0.30 + bee.z * 0.70;

      if (bee.hero) {
        if (local < 0) {
          bee.el.style.opacity = '0';
          wordmark.setAttribute('opacity', '0');
          continue;
        }

        const p = clamp(local / bee.duration, 0, 1);
        const eased = easeOutCubic(p);
        const x = lerp(bee.startX, heroX, eased);
        const baseY = lerp(bee.y, heroY, eased);
        const incomingWobble = Math.sin(p * Math.PI * 2 * bee.cycles + bee.phase) * bee.amp * (1 - p);
        const hover = p >= 1 ? Math.sin((local - bee.duration) / 430) * 2.6 : 0;
        const y = baseY + incomingWobble + hover;
        const rotation = p < 1
          ? Math.sin(p * Math.PI * 2 * 1.7) * 5 * (1 - p)
          : Math.sin((local - bee.duration) / 620) * 0.9;

        placeBee(bee, x, y, scale, rotation, opacity);

        const wordmarkProgress = clamp((p - 0.76) / 0.24, 0, 1);
        wordmark.setAttribute('opacity', String(easeOutCubic(wordmarkProgress)));
        continue;
      }

      if (local < 0) {
        bee.el.style.opacity = '0';
        continue;
      }

      const p = clamp(local / bee.duration, 0, 1);
      const x = lerp(bee.startX, -190, p);
      const wave = Math.sin(p * Math.PI * 2 * bee.cycles + bee.phase) * bee.amp;
      const secondary = Math.sin(p * Math.PI * 2 * (bee.cycles * 0.43) + bee.phase * 1.7) * bee.amp * 0.28;
      const y = bee.y + wave + secondary;
      const rotation = Math.cos(p * Math.PI * 2 * bee.cycles + bee.phase) * (2.5 + bee.z * 3.5);

      placeBee(bee, x, y, scale, rotation, opacity);
    }
  }

  function showFinalState() {
    for (const bee of bees) {
      if (bee.hero) placeBee(bee, heroX, heroY, 4.65, 0, 1);
      else bee.el.style.opacity = '0';
    }
    wordmark.setAttribute('opacity', '1');
  }

  let startTime = performance.now();
  let raf = 0;
  let running = false;

  function frame(now) {
    if (!running) return;
    draw(now - startTime);
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running || reducedMotion) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  // The prototype shipped an empty swarm and a hidden wordmark, so a blocked
  // script left a blank band. The markup now ships the parked state instead;
  // clear it only once this script is definitely running.
  if (parked) parked.remove();

  if (reducedMotion) {
    showFinalState();
    return;
  }

  wordmark.setAttribute('opacity', '0');
  startTime = performance.now();
  start();

  // The hero mark hovers forever once it lands, so without this the loop would
  // keep running while the reader is far down the page. Restarting from the
  // parked state rather than from zero avoids replaying the intro on scroll.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) start();
        else stop();
      }
    }, { rootMargin: '100px' }).observe(scene);
  }
})();
