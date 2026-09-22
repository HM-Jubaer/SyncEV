/* =========================================================================
   SyncEV — shared site script
   Header · footer · mobile menu · particles hero · scroll reveal ·
   booking calendar · electrician coverage map · pro-pricing gate · forms
   ========================================================================= */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ------------------------------------------------------------ config -- */
  const ASSET = 'https://syncev.com/wp-content/uploads/2026/03/';
  const LOGO = ASSET + 'e0ceea79-e66f-4011-af2b-919d4eec17ce.png';
  const FOOTER_LOGO = ASSET + 'ImmenseLogoBlancSlogan-scaled.png';

  const CONTACT = {
    phone: '+1 (581) 741-1700',
    tel: '+15817411700',
    email: 'info@syncev.com',
    city: 'Québec, Canada'
  };

  /* One place to change every link on the site. */
  const LINKS = {
    home: 'index.html',
    condos: 'condos.html',
    businesses: 'businesses.html',
    homeowners: 'homeowners.html',
    electricians: 'electricians.html',
    shop: 'homeowners.html#shop',
    contact: 'index.html#contact',
    assessment: 'condos.html#lead',
    account: 'https://syncev.com/en/my-account-en/',
    registration: 'https://syncev.com/registration/',
    privacy: 'https://syncev.com/privacy-policy-fr/',   // TODO: English URL
    blog: 'https://syncev.com/blogs-fr/',                // TODO: English URL
    facebook: 'https://www.facebook.com/profile.php?id=61588988175107',
    instagram: 'https://www.instagram.com/sync_ev_chargers/'
  };

  const NAV = [
    { key: 'condos', label: 'Condos', href: LINKS.condos },
    { key: 'businesses', label: 'Businesses', href: LINKS.businesses },
    { key: 'homeowners', label: 'Homeowners', href: LINKS.homeowners },
    { key: 'electricians', label: 'Electricians', href: LINKS.electricians },
    { key: 'contact', label: 'Contact', href: LINKS.contact }
  ];

  /* ------------------------------------------------------------- icons -- */
  const ICONS = {
    building: '<rect x="4" y="2" width="16" height="20" rx="1.5"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/><path d="M3 9h18"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    plug: '<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v5"/>',
    station: '<path d="M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M3 22h14"/><path d="M16 9h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3"/><path d="M10 6l-2 4h4l-2 4"/>',
    dollar: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    headset: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    video: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    trend: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    nav: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
    award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>'
  };
  const svg = (name) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  function renderIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach((el) => {
      if (!el.dataset.iconDone) { el.innerHTML = svg(el.dataset.icon); el.dataset.iconDone = '1'; }
    });
  }

  const ext = (href) => /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';

  /* ------------------------------------------------------------ header -- */
  function renderHeader() {
    const slot = document.getElementById('site-header');
    if (!slot) return;
    const active = document.body.dataset.page || '';
    const here = location.pathname.split('/').pop() || 'index.html';
    const links = NAV.map((n) =>
      `<a href="${n.href}"${active === n.key ? ' class="is-active" aria-current="page"' : ''}>${n.label}</a>`
    ).join('');

    slot.outerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" id="siteHeader">
      <div class="container">
        <a class="brand" href="${LINKS.home}" aria-label="SyncEV — home">
          <img src="${LOGO}" alt="SyncEV" width="148" height="40">
        </a>
        <nav class="nav" aria-label="Main">${links}</nav>
        <div class="head-tools">
          <div class="lang-drop">
            <button type="button" aria-haspopup="true" aria-label="Language">EN</button>
            <ul>
              <li><a href="${here}" class="is-on" aria-current="true">English</a></li>
              <li><a aria-disabled="true" title="French version in progress">Français</a></li>
            </ul>
          </div>
          <a class="btn btn-fill arrow" href="${LINKS.assessment}">Free Assessment</a>
        </div>
        <button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav"><span></span></button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile">
      ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join('')}
      <a class="btn btn-fill arrow btn-block" href="${LINKS.assessment}">Get My Free Assessment</a>
      <div class="lang"><a class="is-on" href="${here}">EN</a><a aria-disabled="true">FR</a></div>
    </nav>`;
  }

  function initMenu() {
    const burger = document.querySelector('.burger');
    const menu = document.getElementById('mobileNav');
    if (!burger || !menu) return;
    const set = (open) => {
      document.body.classList.toggle('is-menu-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => set(!document.body.classList.contains('is-menu-open')));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1024) set(false); });
  }

  function initHeaderScroll() {
    const h = document.getElementById('siteHeader');
    if (!h) return;
    const on = () => h.classList.toggle('is-scrolled', window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
  }

  /* ------------------------------------------------------------ footer -- */
  function renderFooter() {
    const slot = document.getElementById('site-footer');
    if (!slot) return;
    const year = new Date().getFullYear();
    slot.outerHTML = `
    <div class="footer-cta-wrap">
      <div class="container">
        <div class="footer-cta">
          <div>
            <h3>Stay Ahead In <span>EV Charging</span></h3>
            <p>Free, no-obligation assessment for condo buildings across Québec.</p>
          </div>
          <a class="btn arrow" href="${LINKS.assessment}">Get My Free Assessment</a>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="${LINKS.home}" aria-label="SyncEV — home">
              <img src="${FOOTER_LOGO}" alt="SyncEV" style="width:210px;height:auto;margin-bottom:22px">
            </a>
            <p class="f-about">Turnkey EV charging for condo buildings, businesses, homeowners and
            licensed electricians. Proudly based in Québec.</p>
            <div class="socials">
              <a href="${LINKS.facebook}" target="_blank" rel="noopener" aria-label="SyncEV on Facebook">${svg('facebook')}</a>
              <a href="${LINKS.instagram}" target="_blank" rel="noopener" aria-label="SyncEV on Instagram">${svg('instagram')}</a>
              <a href="mailto:${CONTACT.email}" aria-label="Email SyncEV">${svg('mail')}</a>
            </div>
          </div>

          <div>
            <h5>Solutions</h5>
            <ul>
              <li><a href="${LINKS.condos}">Condos &amp; Property Owners</a></li>
              <li><a href="${LINKS.businesses}">Businesses</a></li>
              <li><a href="${LINKS.homeowners}">Homeowners</a></li>
              <li><a href="${LINKS.electricians}">Electricians</a></li>
            </ul>
          </div>

          <div>
            <h5>Our Pages</h5>
            <ul>
              <li><a href="${LINKS.home}">Home</a></li>
              <li><a href="${LINKS.shop}">Products</a></li>
              <li><a href="${LINKS.blog}"${ext(LINKS.blog)}>Our Blog</a></li>
              <li><a href="${LINKS.contact}">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="${LINKS.account}"${ext(LINKS.account)}>My Account</a></li>
              <li><a href="${LINKS.registration}"${ext(LINKS.registration)}>Registration</a></li>
              <li><a href="${LINKS.privacy}"${ext(LINKS.privacy)}>Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5>Get In Touch</h5>
            <ul class="f-contact">
              <li>${svg('phone')}<a href="tel:${CONTACT.tel}">${CONTACT.phone}</a></li>
              <li>${svg('mail')}<a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
              <li>${svg('pin')}<span>${CONTACT.city}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom" style="display:block;background:#1F9AD7;border-top:0;padding:12px 0;color:#fff">
        <div class="container">
          <span>Copyright © ${year} SyncEV — All Rights Reserved.</span>
          <span><a href="${LINKS.privacy}"${ext(LINKS.privacy)} style="color:#fff">Privacy Policy</a></span>
        </div>
      </div>
    </footer>`;
  }

  /* --------------------------------------------------- particles hero -- */
  /* Replaces the live site's particles.js demo code (which throws
     "Stats is not defined" on every page load). Same look, no errors,
     pauses off-screen, respects reduced-motion. */
  function initParticles() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('[data-particles]').forEach((host) => {
      const canvas = document.createElement('canvas');
      host.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      const zone = host.closest('section') || host;
      const LINK = 150, REPULSE = 110, MAX = 140;
      let w = 0, h = 0, parts = [], raf = null, visible = true;
      const mouse = { x: -9999, y: -9999 };

      const make = (x, y) => ({
        x: x == null ? Math.random() * w : x,
        y: y == null ? Math.random() * h : y,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        r: Math.random() * 2.2 + 0.6
      });

      function size() {
        const r = host.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = r.width; h = r.height;
        canvas.width = w * dpr; canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const n = Math.round(Math.min(90, Math.max(26, (w * h) / 15000)));
        parts = Array.from({ length: n }, () => make());
      }

      function frame() {
        ctx.clearRect(0, 0, w, h);
        for (const p of parts) {
          if (!reduce) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
            if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
            const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
            if (d < REPULSE && d > 0) { const f = ((REPULSE - d) / REPULSE) * 2.4; p.x += (dx / d) * f; p.y += (dy / d) * f; }
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,.5)';
          ctx.fill();
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < parts.length; i++) {
          for (let j = i + 1; j < parts.length; j++) {
            const a = parts[i], b = parts[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < LINK) {
              ctx.strokeStyle = `rgba(255,255,255,${(1 - d / LINK) * 0.32})`;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
          }
        }
        raf = (!reduce && visible) ? requestAnimationFrame(frame) : null;
      }
      const start = () => { if (!raf) raf = requestAnimationFrame(frame); };

      zone.addEventListener('pointermove', (e) => {
        const r = host.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      });
      zone.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
      zone.addEventListener('click', (e) => {
        if (reduce || e.target.closest('a,button,input,select,textarea,label')) return;
        const r = host.getBoundingClientRect();
        for (let i = 0; i < 4 && parts.length < MAX; i++) parts.push(make(e.clientX - r.left, e.clientY - r.top));
      });

      let t;
      window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { size(); if (reduce) frame(); }, 150); });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) start(); }).observe(host);
      }
      size();
      reduce ? frame() : start();
    });
  }

  /* ------------------------------------------------ scroll reveal -- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((e) => io.observe(e));
  }

  /* -------------------------------------------------- booking widget -- */
  /* Real calendar: current month forward, weekdays only, past days off.
     On the live site this becomes the Google Calendar / Calendly embed. */
  function initBooking() {
    document.querySelectorAll('[data-booking]').forEach((box) => {
      const grid = box.querySelector('[data-cal-grid]');
      const title = box.querySelector('[data-cal-title]');
      const prev = box.querySelector('[data-cal-prev]');
      const next = box.querySelector('[data-cal-next]');
      const slotWrap = box.querySelector('[data-slot-wrap]');
      const slots = box.querySelector('[data-slots]');
      const summary = box.querySelector('[data-slot-summary]');
      const hidden = box.querySelector('[data-slot-value]');
      const confirm = box.querySelector('[data-book-confirm]');
      if (!grid) return;

      const today = new Date(); today.setHours(0, 0, 0, 0);
      const limit = new Date(today); limit.setDate(limit.getDate() + 60);
      let view = new Date(today.getFullYear(), today.getMonth(), 1);
      let picked = null;

      const fmtDay = (d) => d.toLocaleDateString('en-CA', { weekday: 'long', month: 'long', day: 'numeric' });

      function draw() {
        title.textContent = view.toLocaleDateString('en-CA', { month: 'long', year: 'numeric' });
        const first = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
        const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
        let html = ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => `<div class="dow">${d}</div>`).join('');
        for (let i = 0; i < first; i++) html += '<div class="d off"></div>';
        for (let d = 1; d <= days; d++) {
          const date = new Date(view.getFullYear(), view.getMonth(), d);
          const dow = date.getDay();
          const ok = dow !== 0 && dow !== 6 && date >= today && date <= limit;
          const sel = picked && date.getTime() === picked.getTime();
          html += ok
            ? `<button type="button" class="d free${sel ? ' sel' : ''}" data-day="${date.getTime()}" aria-label="${fmtDay(date)}">${d}</button>`
            : `<div class="d off" aria-hidden="true">${d}</div>`;
        }
        grid.innerHTML = html;
        prev.disabled = view <= new Date(today.getFullYear(), today.getMonth(), 1);
        next.disabled = new Date(view.getFullYear(), view.getMonth() + 1, 1) > limit;
      }

      function update() {
        const slot = slots && slots.querySelector('.slot.sel');
        box.dataset.day = picked ? '1' : '';
        box.dataset.slot = slot ? '1' : '';
        const text = picked && slot ? `${fmtDay(picked)} at ${slot.textContent} (Eastern Time)` : '';
        if (summary) summary.textContent = text || 'Pick a day and a time to continue.';
        if (hidden) hidden.value = text;
        if (confirm) confirm.classList.toggle('is-disabled', !(picked && slot));
      }

      grid.addEventListener('click', (e) => {
        const b = e.target.closest('.d.free'); if (!b) return;
        picked = new Date(Number(b.dataset.day));
        if (slots) slots.querySelectorAll('.slot').forEach((s) => s.classList.remove('sel'));
        if (slotWrap) slotWrap.classList.add('is-shown');
        draw(); update();
      });
      if (slots) slots.addEventListener('click', (e) => {
        const s = e.target.closest('.slot'); if (!s) return;
        slots.querySelectorAll('.slot').forEach((x) => x.classList.remove('sel'));
        s.classList.add('sel'); update();
      });
      prev.addEventListener('click', () => { view = new Date(view.getFullYear(), view.getMonth() - 1, 1); draw(); });
      next.addEventListener('click', () => { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); draw(); });

      draw(); update();
    });
  }

  /* ------------------------------------------ electrician coverage -- */
  /* Demo data. On WordPress each zone is an admin-editable record
     (status + assigned partner) so Alexandre can open a city himself. */
  const ZONES = {
    quebec:     { name: 'Québec (Capitale-Nationale)',   status: 'on',   cities: ['Québec', 'Sainte-Foy', 'Beauport', 'Charlesbourg'] },
    chaudiere:  { name: 'Chaudière-Appalaches',          status: 'on',   cities: ['Lévis', 'Saint-Georges', 'Thetford Mines', 'Montmagny'] },
    mauricie:   { name: 'Mauricie',                      status: 'on',   cities: ['Trois-Rivières', 'Shawinigan', 'Bécancour'] },
    estrie:     { name: 'Estrie',                        status: 'soon', cities: ['Sherbrooke', 'Magog', 'Granby'] },
    monteregie: { name: 'Montérégie',                    status: 'soon', cities: ['Longueuil', 'Saint-Hyacinthe', 'Brossard', 'Saint-Jean-sur-Richelieu'] },
    montreal:   { name: 'Montréal / Laval',              status: 'soon', cities: ['Montréal', 'Laval', 'Terrebonne', 'Repentigny'] },
    outaouais:  { name: 'Outaouais',                     status: 'off',  cities: ['Gatineau'] },
    saguenay:   { name: 'Saguenay–Lac-Saint-Jean',       status: 'off',  cities: ['Saguenay', 'Alma', 'Dolbeau-Mistassini'] },
    bas:        { name: 'Bas-Saint-Laurent / Gaspésie',  status: 'off',  cities: ['Rimouski', 'Rivière-du-Loup', 'Gaspé'] },
    nord:       { name: 'Abitibi / Nord-du-Québec',      status: 'off',  cities: ['Rouyn-Noranda', "Val-d'Or", 'Chibougamau'] }
  };

  function cityOptions(placeholder) {
    let html = `<option value="">${placeholder}</option>`;
    Object.entries(ZONES).forEach(([k, z]) => {
      html += `<optgroup label="${z.name}">` +
        z.cities.map((c) => `<option value="${k}|${c}">${c}</option>`).join('') + '</optgroup>';
    });
    return html;
  }

  function initCoverage() {
    const sel = document.getElementById('citySelect');
    const out = document.getElementById('coverResult');
    const map = document.getElementById('qcMap');
    document.querySelectorAll('[data-city-list]').forEach((s) => {
      s.innerHTML = cityOptions('Select your city…') + '<option value="other">Other / not listed</option>';
    });
    if (!sel || !out) return;
    sel.innerHTML = cityOptions('Select your city…');

    function show(key, city) {
      const z = ZONES[key]; if (!z) return;
      map && map.querySelectorAll('.zone').forEach((p) => p.classList.toggle('is-sel', p.dataset.zone === key));
      const place = city ? `${city}, ${z.name}` : z.name;
      const state = { on: 'ok', soon: 'soon', off: 'no' }[z.status];
      out.className = 'result is-shown ' + state;

      const body = {
        on: `<span class="badge is-ok">Zone open</span>
             <h4>${place}</h4>
             <p>We're accepting one partner electrician in this zone. Next step: a 15-minute call to verify your licence and open your pro account.</p>
             <a class="btn btn-fill arrow" href="#apply" style="margin-top:18px">Book My Verification Call</a>`,
        soon: `<span class="badge is-warn">Opening soon</span>
             <h4>${place}</h4>
             <p>This zone isn't live yet. Join the waitlist and you'll get first refusal when it opens.</p>
             <a class="btn arrow" href="#apply" style="margin-top:18px">Join The Waitlist</a>`,
        off: `<span class="badge is-stop">Not covered yet</span>
             <h4>${place}</h4>
             <p>We keep one trusted electrician per region and this one isn't open. Leave your details and we'll contact you when it is.</p>
             <a class="btn btn-ghost arrow" href="#apply" style="margin-top:18px">Notify Me</a>`
      }[z.status];

      out.innerHTML = `<div class="shell"><div class="inner">${body}</div></div>`;
      const apply = document.querySelector('[data-city-list]');
      if (apply && city) apply.value = `${key}|${city}`;
      out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    sel.addEventListener('change', (e) => {
      if (!e.target.value) return;
      const [k, c] = e.target.value.split('|'); show(k, c);
    });
    map && map.querySelectorAll('.zone').forEach((p) => {
      p.setAttribute('tabindex', '0');
      p.setAttribute('role', 'button');
      p.setAttribute('aria-label', ZONES[p.dataset.zone].name);
      const go = () => { sel.value = ''; show(p.dataset.zone); };
      p.addEventListener('click', go);
      p.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }

  /* ------------------------------------------------ pro-pricing gate -- */
  function initGate() {
    document.querySelectorAll('[data-gate]').forEach((g) => {
      const btn = document.querySelector('[data-gate-toggle]');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const open = g.classList.toggle('is-open');
        g.classList.toggle('is-locked', !open);
        btn.textContent = open ? 'Show locked view' : 'Preview partner view';
      });
    });
  }

  /* ------------------------------------------------------------ forms -- */
  function initForms() {
    document.querySelectorAll('[data-rbq]').forEach((i) => {
      i.addEventListener('input', () => {
        const v = i.value.replace(/\D/g, '').slice(0, 10);
        let o = v.slice(0, 4);
        if (v.length > 4) o += '-' + v.slice(4, 8);
        if (v.length > 8) o += '-' + v.slice(8, 10);
        i.value = o;
      });
    });

    document.querySelectorAll('form[data-form]').forEach((f) => {
      let msg = f.querySelector('.form-msg');
      if (!msg) { msg = document.createElement('div'); msg.className = 'form-msg'; msg.setAttribute('role', 'status'); f.appendChild(msg); }
      f.addEventListener('submit', (e) => {
        e.preventDefault();
        const box = f.closest('[data-booking]');
        if (box && (!box.dataset.day || !box.dataset.slot)) {
          msg.className = 'form-msg is-err';
          msg.textContent = 'Please pick a day and a time for your call first.';
          return;
        }
        if (!f.checkValidity()) { f.reportValidity(); return; }
        msg.className = 'form-msg is-ok';
        msg.textContent = f.dataset.success || "Thanks — your request is in. We'll get back to you within 24 business hours.";
        f.querySelectorAll('input,select,textarea,button').forEach((el) => { el.disabled = true; });
      });
    });
  }

  /* ------------------------------------------------------------- boot -- */
  function boot() {
    renderHeader();
    renderFooter();
    renderIcons();
    initMenu();
    initHeaderScroll();
    initParticles();
    initReveal();
    initBooking();
    initCoverage();
    initGate();
    initForms();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();