/* Juzly — Shared Scripts */
(function(){
  'use strict';

  /* Mobile menu toggle */
  var btn = document.getElementById('hamburgerBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Back-to-top button */
  var toTop = document.getElementById('backToTop');
  if (toTop) {
    window.addEventListener('scroll', function(){
      toTop.classList.toggle('visible', window.scrollY > 600);
    });
    toTop.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Contact form handler (only if form exists on page) */
  var form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.querySelector('#f-name').value.trim();
      var email = form.querySelector('#f-email').value.trim();
      var service = form.querySelector('#f-service').value;
      var message = form.querySelector('#f-message').value.trim();
      var msg = form.querySelector('.form-msg');
      if (!name || !email || !message) {
        msg.textContent = 'Please fill in your name, email, and message.';
        msg.classList.add('show');
        return;
      }
      var body = encodeURIComponent('Name: ' + name + '\nInterested in: ' + service + '\n\n' + message);
      var subject = encodeURIComponent('Enquiry from ' + name + ' — ' + service);
      window.location.href = 'mailto:hello@juzly.com?subject=' + subject + '&body=' + body;
      msg.textContent = 'Opening your email client to send this — if nothing opens, email us directly at hello@juzly.com.';
      msg.classList.add('show');
    });
  }
})();
