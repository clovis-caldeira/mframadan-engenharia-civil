/* =========================================================
   MFRAMADAN — Interações da Landing Page
   ========================================================= */
(() => {
  'use strict';

  // ---------- Header sombra no scroll ----------
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Menu mobile ----------
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------- Reveal on scroll ----------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Ano atual no footer ----------
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ---------- Máscara simples para WhatsApp ----------
  const tel = document.querySelector('input[name="whatsapp"]');
  if (tel) {
    tel.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
      } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
      } else if (v.length > 0) {
        v = v.replace(/^(\d{0,2}).*/, '($1');
      }
      e.target.value = v;
    });
  }

  // ---------- Form -> WhatsApp ----------
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nome = (data.get('nome') || '').toString().trim();
      const wpp = (data.get('whatsapp') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const servico = (data.get('servico') || '').toString().trim();
      const mensagem = (data.get('mensagem') || '').toString().trim();

      if (!nome || !wpp || !servico) {
        alert('Por favor, preencha nome, WhatsApp e o serviço desejado.');
        return;
      }

      const linhas = [
        `Olá Marivalda! Sou ${nome} e gostaria de solicitar um orçamento pelo site.`,
        '',
        `*Serviço:* ${servico}`,
        `*WhatsApp:* ${wpp}`,
        email ? `*E-mail:* ${email}` : null,
        mensagem ? `*Mensagem:* ${mensagem}` : null,
        '',
        'Aguardo seu retorno. Obrigado(a)!'
      ].filter(Boolean);

      const texto = encodeURIComponent(linhas.join('\n'));
      window.open(`https://wa.me/5511989520479?text=${texto}`, '_blank', 'noopener');
    });
  }

  // ---------- Smooth scroll respeitando header sticky ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
