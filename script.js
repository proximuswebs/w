// Prevent right-click on media
document.addEventListener('contextmenu', (e) => {
  const isMedia = ['img', 'image', 'video', 'svg', 'picture']
    .some(tag => tag.localeCompare(e.target.tagName, undefined, { sensitivity: 'base' }) === 0);
  if (isMedia) e.preventDefault();
});

// CAPTCHA settings
window.C_CAPTCHA_IMPLEMENTATION = 'RECAPTCHA';
window.C_CAPTCHA_KEY = '6LdpNmIrAAAAAHQVezN3pBAfDjQQ2qUpo881f24o';

// Set theme based on OS preference
document.documentElement.classList.replace(
  'adaptive',
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
);

// Install footer via fetch
window.canva_installFooter = (container) => {
  if (!(container instanceof HTMLDivElement)) return;
  const lang = navigator.language || 'en';
  fetch(`_footer?lang=${encodeURIComponent(lang)}`)
    .then(res => res.status === 200 && res.text())
    .then(html => {
      const div = document.createElement('div');
      div.innerHTML = html;
      [...div.children].forEach(child => {
        if (child.tagName.toLowerCase() !== 'script') container.append(child);
      });
      initReportModal();
    });
};

// Modal & captcha form handling
function initReportModal() {
  // ...copy over the entire IIFE from your head snippet that begins `! function(e) { ... }({});`
  // this encapsulates all the modal steps, focus trap, and recaptcha loader.
}

// Bootstrap payload and flags
(function () {
  window['__canva_public_path__'] = '_assets/';
  window.bootstrap = JSON.parse('{"base":{...},"page":{...}}');
  window.flags = JSON.parse('{"55dbebc8":true,"bb5838dc":true,"5d40ae58":true,"7321e74b":true,"978ce15d":150000.0}');
  window.cmsg = window.cmsg || { locale: "en-GB", strings: {} };
})();