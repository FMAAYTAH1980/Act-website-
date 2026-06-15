// ACT Holding — shared scripts

(function () {
  'use strict';

  // ---------- Mobile menu toggle ----------
  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      var open = navLinks.classList.contains('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Reveal on scroll ----------
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // ---------- Contact form ----------
  // If the form's action is wired to Formspree (i.e. a real URL), submit via
  // fetch() and stay on page. If it still contains the placeholder
  // YOUR_FORM_ID, fall back to opening the user's email client.
  var form = document.getElementById('contact-form');
  if (!form) return;

  var statusBlock = document.getElementById('form-status');
  function setStatus(msg, isError) {
    if (!statusBlock) return;
    statusBlock.style.display = 'block';
    var p = statusBlock.querySelector('p');
    if (p) {
      p.textContent = msg;
      p.style.color = isError ? '#0a0a0a' : '#0a0a0a';
    }
  }

  function getVal(id) {
    var el = document.getElementById(id);
    return el ? el.value : '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var action = form.getAttribute('action') || '';
    var name = getVal('cf-name');
    var org = getVal('cf-org');
    var email = getVal('cf-email');
    var subject = getVal('cf-subject') || 'General';
    var message = getVal('cf-message');

    // Honeypot check
    var honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) return;

    // Basic validation
    if (!name || !email || !message) {
      setStatus('Please fill in your name, email and a message.', true);
      return;
    }

    // If Formspree is wired up properly, submit via fetch
    if (action && action.indexOf('formspree.io') !== -1 && action.indexOf('YOUR_FORM_ID') === -1) {
      var data = new FormData(form);
      var btn = form.querySelector('button[type="submit"]');
      var originalLabel = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }

      fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          setStatus('Thank you. Your message has been received — we respond within five working days.', false);
          if (btn) { btn.innerHTML = 'Sent ✓'; }
        } else {
          setStatus('Sorry, something went wrong. Please email hello@act-fm.com directly.', true);
          if (btn) { btn.disabled = false; btn.innerHTML = originalLabel; }
        }
      }).catch(function () {
        setStatus('Sorry, something went wrong. Please email hello@act-fm.com directly.', true);
        if (btn) { btn.disabled = false; btn.innerHTML = originalLabel; }
      });
      return;
    }

    // Fallback — open user's email client pre-filled
    var body = [
      'Name: ' + name,
      'Organisation: ' + org,
      'Email: ' + email,
      '',
      'Subject: ' + subject,
      '',
      message
    ].join('\n');

    var mailto = 'mailto:hello@act-fm.com'
      + '?subject=' + encodeURIComponent('[ACT — ' + subject + '] ' + name)
      + '&body=' + encodeURIComponent(body);

    window.location.href = mailto;
  });
})();
