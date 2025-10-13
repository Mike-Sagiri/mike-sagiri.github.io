(function () {
  var storageKey = 'preferredLanguage';
  var supported = ['en', 'zh'];
  var fallback = 'en';

  function getSavedLanguage() {
    try {
      var stored = window.localStorage.getItem(storageKey);
      if (supported.indexOf(stored) !== -1) {
        return stored;
      }
    } catch (error) {
      // ignore
    }
    return fallback;
  }

  function applyLanguage(lang) {
    if (supported.indexOf(lang) === -1) {
      lang = fallback;
    }
    var html = document.documentElement;
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang);

    try {
      window.localStorage.setItem(storageKey, lang);
    } catch (error) {
      // ignore
    }
  }

  function toggleLanguage() {
    var current = document.documentElement.getAttribute('data-lang') || fallback;
    var nextIndex = (supported.indexOf(current) + 1) % supported.length;
    applyLanguage(supported[nextIndex]);
  }

  function init() {
    applyLanguage(getSavedLanguage());

    document.addEventListener('click', function (event) {
      var button = event.target.closest('[data-lang-switcher]');
      if (!button) {
        return;
      }
      event.preventDefault();
      toggleLanguage();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
