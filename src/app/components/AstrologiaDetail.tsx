import React, { useEffect, useRef } from 'react';

const CONFIG = {
  whatsappNumber: '573002353499',
  whatsappMessage: 'Hola Maestro Héctor, quiero reservar una sesión de Medicina Cuántica Espiritual / Astrología. ¿Podemos agendar? Mi nombre es: ',
  instagramUrl: 'https://www.instagram.com/maestronarvaez?igsh=ZG92aWlwdGpjbmkz',
  facebookUrl: 'https://www.facebook.com/groups/fundacionpazinterior/',
  email: 'narvaez.hector@gmail.com',
  youtubeUrl: 'https://www.instagram.com/reel/DBHmzboyp4L/?igsh=Z293azU5cW5mdWRw',
};

function buildWhatsAppUrl(message = CONFIG.whatsappMessage) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

export default function AstrologiaDetail() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const bindLinks = () => {
      root.querySelectorAll('[data-wa-cta]').forEach((el) => {
        el.setAttribute('href', buildWhatsAppUrl());
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
        (el as HTMLElement).role = 'link';
      });
      root.querySelectorAll('[data-ig]').forEach((el) => {
        el.setAttribute('href', CONFIG.instagramUrl);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      });
      root.querySelectorAll('[data-fb]').forEach((el) => {
        el.setAttribute('href', CONFIG.facebookUrl);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      });
      root.querySelectorAll('[data-email]').forEach((el) => {
        el.setAttribute('href', `mailto:${CONFIG.email}`);
      });
      root.querySelectorAll('[data-yt]').forEach((el) => {
        el.setAttribute('href', CONFIG.youtubeUrl);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      });
    };

    const scrollToTargets = () => {
      root.querySelectorAll('[data-scroll-to]').forEach((el) => {
        el.addEventListener('click', (e) => {
          const sel = el.getAttribute('data-scroll-to');
          const target = sel ? root.querySelector(sel) : null;
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    };

    const reveal = () => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      root.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
      return () => io.disconnect();
    };

    const parallax = () => {
      if (prefersReduced) return () => {};
      const target = root.querySelector('[data-parallax]') as HTMLElement | null;
      if (!target) return () => {};
      const strength = 12;
      const rect = () => target.getBoundingClientRect();
      const handler = (e: MouseEvent) => {
        const r = rect();
        const x = ((e.clientX - (r.left + r.width / 2)) / r.width) * strength;
        const y = ((e.clientY - (r.top + r.height / 2)) / r.height) * strength;
        target.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      };
      root.addEventListener('mousemove', handler);
      return () => root.removeEventListener('mousemove', handler);
    };

    const particles = () => {
      if (prefersReduced) return () => {};
      const canvas = root.querySelector('.ananda-astro__particles') as HTMLCanvasElement | null;
      if (!canvas) return () => {};
      const ctx = canvas.getContext('2d');
      if (!ctx) return () => {};

      let w = 0;
      let h = 0;
      let dpr = window.devicePixelRatio || 1;
      const particlesArr: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

      const desired = () => Math.max(30, Math.min(90, Math.floor((w * h) / 18000)));

      const resetSize = () => {
        w = root.clientWidth;
        h = root.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      const spawn = () => {
        particlesArr.length = 0;
        const count = desired();
        for (let i = 0; i < count; i++) {
          particlesArr.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.5 + 0.5,
          });
        }
      };

      const step = () => {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < particlesArr.length; i++) {
          const p = particlesArr[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        for (let i = 0; i < particlesArr.length; i++) {
          const p = particlesArr[i];
          for (let j = i + 1; j < particlesArr.length; j++) {
            const q = particlesArr[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const dist2 = dx * dx + dy * dy;
            if (dist2 < 80 * 80) {
              const alpha = 1 - dist2 / (80 * 80);
              ctx.strokeStyle = `rgba(178,140,255,${alpha * 0.4})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
        }
        for (const p of particlesArr) {
          ctx.fillStyle = '#62F3FF';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        requestAnimationFrame(step);
      };

      resetSize();
      spawn();
      step();
      const resizeHandler = () => {
        resetSize();
        spawn();
      };
      window.addEventListener('resize', resizeHandler, { passive: true });
      return () => window.removeEventListener('resize', resizeHandler);
    };

    const formHandler = () => {
      const form = root.querySelector('[data-wa-form]') as HTMLFormElement | null;
      if (!form) return () => {};
      const handler = (e: Event) => {
        e.preventDefault();
        const fd = new FormData(form);
        const name = (fd.get('name') || '').toString().trim();
        const reason = (fd.get('reason') || '').toString();
        const message = (fd.get('message') || '').toString().trim();
        const composed = `${CONFIG.whatsappMessage}${name ? name : ''}\nMotivo: ${reason}\n${message ? 'Mensaje: ' + message : ''}`;
        window.open(buildWhatsAppUrl(composed), '_blank', 'noopener,noreferrer');
      };
      form.addEventListener('submit', handler);
      return () => form.removeEventListener('submit', handler);
    };

    bindLinks();
    scrollToTargets();
    const cleanupReveal = reveal();
    const cleanupParallax = parallax();
    const cleanupParticles = particles();
    const cleanupForm = formHandler();

    return () => {
      cleanupReveal && cleanupReveal();
      cleanupParallax && cleanupParallax();
      cleanupParticles && cleanupParticles();
      cleanupForm && cleanupForm();
    };
  }, []);

  return (
    <section className="ananda-astro" ref={rootRef} data-astro-root>
      <style>{`
      .ananda-astro { position: relative; overflow: hidden; color: rgba(255,255,255,0.92); font-family: "Inter","Segoe UI",system-ui,-apple-system,sans-serif; background: radial-gradient(120% 120% at 10% 20%, #4b1a78 0%, transparent 45%), radial-gradient(100% 100% at 80% 10%, #2a0a43 0%, transparent 40%), linear-gradient(180deg, #160622 0%, #2a0a43 60%, #160622 100%); padding: 4rem clamp(1.25rem, 2vw, 2.5rem); }
      .ananda-astro * { box-sizing: border-box; }
      .ananda-astro a { text-decoration: none; }
      .ananda-astro__bg { position:absolute; inset:0; pointer-events:none; }
      .ananda-astro__texture::before { content:""; position:absolute; inset:0; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E"); mix-blend-mode: soft-light; }
      .ananda-astro__chart::before { content:""; position:absolute; inset:10% 5%; opacity:0.25; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cg fill='none' stroke='%23B28CFF' stroke-width='0.8' stroke-opacity='0.6'%3E%3Ccircle cx='300' cy='300' r='80'/%3E%3Ccircle cx='300' cy='300' r='160'/%3E%3Ccircle cx='300' cy='300' r='240'/%3E%3Cpath d='M60 300h480M300 60v480M126 126l348 348M474 126L126 474'/%3E%3C/g%3E%3C/svg%3E"); background-size: cover; filter: drop-shadow(0 0 16px #62f3ff44); }
      .ananda-astro__particles { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; mix-blend-mode: screen; opacity:0.6; }
      .ananda-astro__hero { position:relative; padding: clamp(2.5rem, 4vw, 4rem); border-radius: 28px; background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.1)); border: 1px solid rgba(255,255,255,0.12); overflow:hidden; }
      .ananda-astro__hero-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); align-items:center; gap:1.5rem; }
      .ananda-astro__halo { position:absolute; inset:-20% -10% auto; height:60%; background: radial-gradient(circle at 50% 50%, #b28cff44, transparent 60%); filter: blur(50px); }
      .ananda-astro__luna { position:absolute; right:6%; top:10%; width:140px; height:140px; display:grid; place-items:center; filter: drop-shadow(0 0 12px #62f3ff88); }
      .ananda-astro__luna-core { width:80px; height:80px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #fff, #b28cff); box-shadow: 0 0 25px #62f3ff99; opacity:0.95; }
      .ananda-astro__luna-ring { width:120px; height:120px; border-radius:50%; border: 1px solid #62f3ff66; box-shadow: 0 0 22px #ff6de188; }
      .ananda-astro__hero-content { position:relative; z-index:2; max-width: 720px; }
      .ananda-astro__hero-portrait { display:flex; justify-content:center; align-items:center; z-index:2; }
      .ananda-astro__hero-portrait img { max-width:260px; height:auto; display:block; }
      .ananda-astro__eyebrow { text-transform: uppercase; letter-spacing: 0.24em; color: #62f3ff; font-size: 0.8rem; margin-bottom: 0.5rem; }
      .ananda-astro__subtitle { color: rgba(255,255,255,0.85); margin: 0.6rem 0 1rem; max-width: 46ch; }
      .ananda-astro__bullets { list-style:none; padding:0; margin:1rem 0; display:grid; gap:0.4rem; }
      .ananda-astro__bullets li { padding:0.5rem 0.75rem; border-radius:12px; background: rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); }
      .ananda-astro__chips { display:flex; flex-wrap:wrap; gap:0.5rem; margin:1rem 0; }
      .ananda-astro__chips span { padding:0.35rem 0.75rem; border-radius:999px; background: linear-gradient(120deg, #b28cff33, #62f3ff33); border:1px solid rgba(255,255,255,0.18); font-size:0.85rem; color:#fff; }
      .ananda-astro__ctas { display:flex; gap:0.8rem; flex-wrap:wrap; align-items:center; margin-top:1rem; }
      .ananda-astro__btn { display:inline-flex; align-items:center; justify-content:center; padding:0.85rem 1.4rem; border-radius:999px; border:1px solid rgba(255,255,255,0.18); cursor:pointer; transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease, color 200ms ease; font-weight:600; color:#fff; }
      .ananda-astro__btn:focus-visible, .ananda-astro__icon-btn:focus-visible, .ananda-astro details summary:focus-visible { outline:2px solid #62f3ff; outline-offset:3px; }
      .ananda-astro__btn-primary { background: linear-gradient(120deg, #ff6de1, #62f3ff); box-shadow:0 0 24px #b28cff55; }
      .ananda-astro__btn-ghost { background: rgba(255,255,255,0.06); }
      .ananda-astro__btn:hover { transform:translateY(-2px); box-shadow:0 8px 20px #0004, 0 0 20px #62f3ff55; }
      .ananda-astro__trust { display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:0.6rem; margin-top:1.2rem; }
      .ananda-astro__trust div { padding:0.75rem 0.9rem; border-radius:14px; background: rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); text-align:center; font-weight:600; color:#b28cff; }
      .ananda-astro__media { margin-top:2.5rem; display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:1rem; }
      .ananda-astro__media-card { position:relative; border-radius:18px; background: rgba(255,255,255,0.06); border:1px dashed rgba(255,255,255,0.18); padding:1rem; min-height:220px; display:grid; place-items:center; transition:transform 200ms ease, box-shadow 200ms ease; }
      .ananda-astro__media-card:hover { transform:translateY(-3px); box-shadow:0 10px 30px #0005, 0 0 16px #62f3ff44; }
      .ananda-astro__placeholder { text-align:center; color:rgba(255,255,255,0.7); display:grid; gap:0.5rem; place-items:center; }
      .ananda-astro__placeholder svg { width:48px; height:48px; opacity:0.8; }
      .ananda-astro__media-img { width:100%; height:100%; object-fit:cover; border-radius:14px; }
      .ananda-astro__media-card--video { border:none; background:transparent; padding:0; min-height:auto; transition:none; box-shadow:none; }
      .ananda-astro__media-card--video:hover { transform:none; box-shadow:none; }
      .ananda-astro__embed { width:100%; max-width:380px; margin:0 auto; }
      .ananda-astro__embed iframe { border:none; border-radius:14px; }
      .ananda-astro__media-card--video .ananda-astro__embed { width:80%; max-width:240px; margin:0 auto; }
      .ananda-astro__benefits { margin-top:3rem; }
      .ananda-astro__section-head h2 { margin:0.2rem 0 1rem; font-size:2rem; }
      .ananda-astro__benefit-grid { display:grid; gap:1rem; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); }
      .ananda-astro__card { padding:1rem; border-radius:16px; background: rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); box-shadow:0 12px 32px #0004; }
      .ananda-astro__icon { color:#62f3ff; font-size:1.2rem; display:inline-block; margin-bottom:0.4rem; }
      .ananda-astro__services { margin-top:3rem; }
      .ananda-astro__accordion details { background: rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:14px; padding:0.6rem 0.9rem; margin-bottom:0.7rem; transition: border-color 200ms ease, background 200ms ease; }
      .ananda-astro__accordion summary { cursor:pointer; font-weight:700; color:#fff; list-style:none; display:flex; justify-content:space-between; align-items:center; }
      .ananda-astro__accordion summary::-webkit-details-marker { display:none; }
      .ananda-astro__accordion details[open] { border-color:#62f3ff66; box-shadow:0 6px 16px #0004; }
      .ananda-astro__accordion p { margin:0.4rem 0; color:rgba(255,255,255,0.82); }
      .ananda-astro__pill { display:inline-flex; padding:0.35rem 0.7rem; border-radius:999px; background: rgba(98,243,255,0.12); border:1px solid rgba(98,243,255,0.24); color:#62f3ff; font-weight:600; margin-bottom:0.4rem; }
      .ananda-astro__mini-cta { display:inline-flex; color:#ff6de1; font-weight:700; font-size:0.9rem; border-bottom:1px dashed rgba(255,109,225,0.6); padding-bottom:0.1rem; }
      .ananda-astro__about { margin-top:3rem; display:grid; gap:1rem; }
      .ananda-astro__text { max-width:60ch; }
      .ananda-astro__contact-tags { display:flex; flex-wrap:wrap; gap:0.5rem; }
      .ananda-astro__contact-tags span { padding:0.35rem 0.7rem; border-radius:12px; background: rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:#b28cff; font-weight:600; font-size:0.9rem; }
      .ananda-astro__about-actions { display:flex; gap:0.8rem; flex-wrap:wrap; }
      .ananda-astro__cta { margin-top:3rem; }
      .ananda-astro__cta-card { border-radius:20px; border:1px solid rgba(255,255,255,0.12); background: linear-gradient(140deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04)); display:grid; gap:1.5rem; padding:1.4rem; }
      .ananda-astro__cta-buttons { display:flex; gap:0.6rem; flex-wrap:wrap; }
      .ananda-astro__icon-btn { width:46px; height:46px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; background: rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16); color:#fff; transition:transform 200ms ease, box-shadow 200ms ease; }
      .ananda-astro__icon-btn:hover { transform:translateY(-2px); box-shadow:0 8px 20px #0004, 0 0 14px #62f3ff55; }
      .ananda-astro__form { background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:14px; padding:1rem; }
      .ananda-astro__form form { display:grid; gap:0.8rem; }
      .ananda-astro__form label { display:grid; gap:0.3rem; font-size:0.95rem; color:#fff; }
      .ananda-astro__form input, .ananda-astro__form select, .ananda-astro__form textarea { width:100%; padding:0.65rem 0.75rem; border-radius:10px; border:1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.05); color:#fff; }
      .ananda-astro__privacy { margin-top:0.5rem; font-size:0.85rem; color:rgba(255,255,255,0.72); }
      .ananda-astro [data-reveal] { opacity:0; transform: translateY(24px) scale(0.98); filter: blur(6px); transition: opacity 600ms ease, transform 600ms ease, filter 600ms ease; }
      .ananda-astro [data-reveal].is-in { opacity:1; transform: translateY(0) scale(1); filter: blur(0); }
      @media (max-width: 720px) { .ananda-astro__hero { padding:1.5rem; } .ananda-astro__luna { display:none; } .ananda-astro__hero h1 { font-size: clamp(1.9rem, 6vw, 2.6rem); } }
      `}</style>

      <canvas className="ananda-astro__particles" aria-hidden="true"></canvas>
      <div className="ananda-astro__bg">
        <div className="ananda-astro__texture"></div>
        <div className="ananda-astro__chart"></div>
      </div>

      <header className="ananda-astro__hero" data-reveal>
        <div className="ananda-astro__halo"></div>
        <div className="ananda-astro__luna" data-parallax aria-hidden="true">
          <div className="ananda-astro__luna-core"></div>
          <div className="ananda-astro__luna-ring"></div>
        </div>
        <div className="ananda-astro__hero-grid">
          <div className="ananda-astro__hero-content">
            <p className="ananda-astro__eyebrow">HV Héctor Narváez · Colombia</p>
            <h1>Medicina Cuántica y Astrología</h1>
            <p className="ananda-astro__subtitle">Integración de ciencia y espiritualidad para expandir conciencia, equilibrar tu campo energético y sanar el alma.</p>
            <ul className="ananda-astro__bullets">
              <li>Lecturas topocéntricas precisas</li>
              <li>Enfoque cuántico y energético</li>
              <li>Acompañamiento personalizado</li>
            </ul>
            <div className="ananda-astro__chips">
              <span>TREC</span><span>Cura Cuántica</span><span>Carta Astral</span><span>Reiki Cuántico</span><span>Canalización</span>
            </div>
            <div className="ananda-astro__ctas">
              <a className="ananda-astro__btn ananda-astro__btn-primary" data-wa-cta aria-label="Reservar por WhatsApp">Reservar por WhatsApp</a>
              <a className="ananda-astro__btn ananda-astro__btn-ghost" data-scroll-to=".ananda-astro__services" aria-label="Ver servicios">Ver servicios</a>
            </div>
            <div className="ananda-astro__trust">
              <div>Atención personalizada</div>
              <div>Enfoque integral</div>
              <div>Guía consciente</div>
            </div>
          </div>
          <div className="ananda-astro__hero-portrait">
            <img src="/assets/hectornarvaez.png" alt="Héctor Narváez" />
          </div>
        </div>
      </header>

      <section className="ananda-astro__media" data-reveal>
        <div className="ananda-astro__media-card">
          <div className="ananda-astro__placeholder" role="img" aria-label="Coloca tu imagen aquí">
            <img src="/assets/estres.png" alt="Relaja tu cuerpo de tensiones y estrés" className="ananda-astro__media-img" />
          </div>
        </div>
        <div className="ananda-astro__media-card">
          <div className="ananda-astro__placeholder" role="img" aria-label="Coloca tu imagen aquí">
            <img src="/assets/sueño.png" alt="Mejora la calidad de tu sueño" className="ananda-astro__media-img" />
          </div>
        </div>
        <div className="ananda-astro__media-card ananda-astro__media-card--video">
          <div className="ananda-astro__placeholder" role="img" aria-label="Coloca tu video o embed aquí">
            <div className="ananda-astro__embed aspect-[9/16]">
              <iframe
                src="https://www.instagram.com/reel/DBHmzboyp4L/embed"
                title="Reel de Instagram"
                allowTransparency={true}
                allow="encrypted-media; picture-in-picture"
                scrolling="no"
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
            <span></span>
          </div>
        </div>
      </section>

      <section className="ananda-astro__benefits" data-reveal>
        <div className="ananda-astro__section-head">
          <p className="ananda-astro__eyebrow">Beneficios</p>
          <h2>Lo que puedes experimentar</h2>
        </div>
        <div className="ananda-astro__benefit-grid">
          <article className="ananda-astro__card"><span className="ananda-astro__icon">✦</span><h3>Acelera procesos metabólicos</h3><p>Optimiza la energía vital para responder mejor a los cambios.</p></article>
          <article className="ananda-astro__card"><span className="ananda-astro__icon">◎</span><h3>Activa regeneración celular</h3><p>Estimula la reparación natural de tejidos y sistemas.</p></article>
          <article className="ananda-astro__card"><span className="ananda-astro__icon">✺</span><h3>Mejora circulación y órganos</h3><p>Flujo equilibrado para sistemas y órganos clave.</p></article>
          <article className="ananda-astro__card"><span className="ananda-astro__icon">☾</span><h3>Efecto sedante y analgésico</h3><p>Relaja el sistema nervioso y calma el dolor.</p></article>
          <article className="ananda-astro__card"><span className="ananda-astro__icon">✧</span><h3>Efecto inmunomodulador</h3><p>Apoya la estabilidad y respuesta inmune.</p></article>
          <article className="ananda-astro__card"><span className="ananda-astro__icon">∞</span><h3>Autocuración consciente</h3><p>Reconecta con tu capacidad innata de sanar.</p></article>
          <article className="ananda-astro__card"><span className="ananda-astro__icon">☉</span><h3>Apoyo complementario</h3><p>Integra con tratamientos y medicamentos actuales.</p></article>
        </div>
      </section>

      <section className="ananda-astro__services" data-reveal>
        <div className="ananda-astro__section-head">
          <p className="ananda-astro__eyebrow">Servicios</p>
          <h2>Explora y consulta</h2>
        </div>
        <div className="ananda-astro__accordion">
          <details open>
            <summary>Cura Cuántica Espiritual</summary>
            <p>Sesiones enfocadas en armonizar el campo energético y desbloquear memorias celulares.</p>
            <div className="ananda-astro__pill">Para quien busca: alivio integral y claridad emocional.</div>
            <a className="ananda-astro__mini-cta" data-wa-cta>Consultar por WhatsApp</a>
          </details>
          <details>
            <summary>Cirugía Cuántica Espiritual</summary>
            <p>Intervención energética sutil para liberar nudos profundos y restaurar flujo vital.</p>
            <div className="ananda-astro__pill">Para quien busca: sanación de bloqueos arraigados.</div>
            <a className="ananda-astro__mini-cta" data-wa-cta>Consultar por WhatsApp</a>
          </details>
          <details>
            <summary>TREC (8 terapias)</summary>
            <p>Protocolo en tres fases que integra 8 terapias para equilibrio progresivo.</p>
            <div className="ananda-astro__pill">Fase 1: 3 · Fase 2: 1 · Fase 3: 4</div>
            <a className="ananda-astro__mini-cta" data-wa-cta>Consultar por WhatsApp</a>
          </details>
          <details>
            <summary>Medicina Tradicional China</summary>
            <p>Acupuntura y Moxibustión para balancear meridianos y sistemas vitales.</p>
            <div className="ananda-astro__pill">Para quien busca: armonía cuerpo-energía.</div>
            <a className="ananda-astro__mini-cta" data-wa-cta>Consultar por WhatsApp</a>
          </details>
          <details>
            <summary>Astrología Topocéntrica</summary>
            <p>Carta Astral, Revolución Solar y Sinastría con enfoque topocéntrico de alta precisión.</p>
            <div className="ananda-astro__pill">Para quien busca: claridad de propósito y relaciones.</div>
            <a className="ananda-astro__mini-cta" data-wa-cta>Consultar por WhatsApp</a>
          </details>
        </div>
      </section>

      <section className="ananda-astro__about" data-reveal>
        <div>
          <p className="ananda-astro__eyebrow">Sobre el Maestro</p>
          <h2>HV Héctor Narváez</h2>
          <p className="ananda-astro__text">Terapeuta y maestro en Medicina Cuántica Espiritual y Astrología. Integra ciencia, energía y conciencia para guiar procesos profundos de transformación.</p>
        </div>
        <div className="ananda-astro__contact-tags">
          <span>Argentina</span><span>Brasil</span><span>Colombia</span><span>Ecuador</span><span>Chile</span><span>USA</span><span>España</span><span>México</span><span>Perú</span><span>Uruguay</span><span>Venezuela</span>
        </div>
        <div className="ananda-astro__about-actions">
          <a className="ananda-astro__btn ananda-astro__btn-primary" data-wa-cta>Contactar por WhatsApp</a>
          <a className="ananda-astro__btn ananda-astro__btn-ghost" data-email aria-label="Enviar email">Email</a>
        </div>
      </section>

      <section className="ananda-astro__cta" data-reveal>
        <div className="ananda-astro__cta-card">
          <div className="ananda-astro__cta-main">
            <h3>Reserva tu sesión</h3>
            <p>Escríbele a HV Héctor Narváez para agendar Medicina Cuántica Espiritual o Astrología.</p>
            <div className="ananda-astro__cta-buttons">
              <a className="ananda-astro__btn ananda-astro__btn-primary" data-wa-cta>WhatsApp</a>
              <a className="ananda-astro__icon-btn" data-ig aria-label="Abrir Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5Zm4.25-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/></svg>
              </a>
              <a className="ananda-astro__icon-btn" data-fb aria-label="Abrir Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13 10h2.5l.5-3H13V5.5c0-.9.3-1.5 1.6-1.5H16V1.1C15.4 1 14.2 1 13 1c-2.6 0-4.3 1.6-4.3 4.4V7H6v3h2.7v9h4.3v-9Z"/></svg>
              </a>
            </div>
          </div>
          <div className="ananda-astro__form">
            <form data-wa-form>
              <label>
                <span>Nombre</span>
                <input name="name" type="text" placeholder="Tu nombre" required />
              </label>
              <label>
                <span>Motivo</span>
                <select name="reason">
                  <option value="Medicina Cuántica Espiritual">Medicina Cuántica Espiritual</option>
                  <option value="Astrología Topocéntrica">Astrología Topocéntrica</option>
                  <option value="Carta Astral">Carta Astral</option>
                  <option value="Revolución Solar">Revolución Solar</option>
                  <option value="Sinastría">Sinastría</option>
                  <option value="Otra consulta">Otra consulta</option>
                </select>
              </label>
              <label>
                <span>Mensaje</span>
                <textarea name="message" rows={3} placeholder="Cuéntame brevemente tu caso"></textarea>
              </label>
              <button type="submit" className="ananda-astro__btn ananda-astro__btn-primary">Abrir WhatsApp</button>
            </form>
            <p className="ananda-astro__privacy">No almacenamos datos; el mensaje se envía directo a WhatsApp.</p>
          </div>
        </div>
      </section>
    </section>
  );
}
