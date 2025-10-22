(function () {
  var storageKey = 'preferredLanguage';
  var supported = ['en', 'zh', 'ja'];
  var fallback = 'en';
  var controls = [];

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
    syncControls(lang);
  }

  function syncControls(lang) {
    for (var i = 0; i < controls.length; i++) {
      if (controls[i].value !== lang) {
        controls[i].value = lang;
      }
    }
  }

  function init() {
    controls = Array.prototype.slice.call(document.querySelectorAll('[data-lang-switcher]'));

    var initial = getSavedLanguage();
    applyLanguage(initial);

    controls.forEach(function (control) {
      control.addEventListener('change', function (event) {
        var requested = event.target.value;
        if (supported.indexOf(requested) === -1) {
          requested = fallback;
        }
        applyLanguage(requested);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
