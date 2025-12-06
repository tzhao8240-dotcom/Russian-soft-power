
function setLang(lang){
  document.documentElement.lang = (lang==='en') ? 'en' : 'zh';
  // for each element with data-en and data-zh, switch text
  document.querySelectorAll('[data-en]').forEach(function(el){
    el.textContent = (lang==='en') ? el.getAttribute('data-en') : el.getAttribute('data-zh');
  });
}
// initialize default English
document.addEventListener('DOMContentLoaded', function(){ setLang('en'); });
