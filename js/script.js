// ============ MEMA AUTO ASSESSORS — site script ============
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Sticky header shadow + scroll progress bar
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');
  var progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', function () {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.style.boxShadow = y > 10 ? '0 6px 24px rgba(10,47,92,.14)' : '0 2px 18px rgba(10,47,92,.08)';
    if (toTop) toTop.classList.toggle('show', y > 420);
    if (progressBar) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }
  }, { passive: true });

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Reveal-on-scroll animation
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Animated stat counters
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1400;
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var progress = Math.min((ts - start) / duration, 1);
          var value = Math.floor(progress * target);
          el.textContent = value + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { counterIO.observe(el); });
  }

  // Contact form — mailto fallback (static hosting, no backend)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var subject = form.querySelector('#subject').value.trim() || 'Website enquiry';
      var message = form.querySelector('#message').value.trim();

      var body = 'Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0APhone: ' + phone + '%0D%0A%0D%0A' + encodeURIComponent(message);
      var mailto = 'mailto:sales@memaautoassessors.co.ke?subject=' + encodeURIComponent(subject) + '&body=' + body;
      window.location.href = mailto;

      var note = document.getElementById('form-status');
      if (note) note.textContent = 'Opening your email app to send this enquiry to sales@memaautoassessors.co.ke ...';
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
