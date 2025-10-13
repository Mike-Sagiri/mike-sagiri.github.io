(function () {
  const storageKey = 'preferredLanguage';
  const supportedLanguages = ['en', 'zh'];
  const defaultLanguage = 'en';

  const getSavedLanguage = () => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored && supportedLanguages.includes(stored)) {
        return stored;
      }
    } catch (error) {
      console.warn('Language preference unavailable:', error);
    }
    return defaultLanguage;
  };

  const applyLanguage = (lang) => {
    if (!supportedLanguages.includes(lang)) {
      lang = defaultLanguage;
    }
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('data-lang', lang);
    htmlEl.setAttribute('lang', lang);

    const switchers = document.querySelectorAll('[data-lang-switcher]');
    switchers.forEach((switcher) => {
      switcher.setAttribute('data-current-lang', lang);
    });

    try {
      window.localStorage.setItem(storageKey, lang);
    } catch (error) {
      console.warn('Unable to persist language preference:', error);
    }
  };

  const toggleLanguage = () => {
    const current = document.documentElement.getAttribute('data-lang') || defaultLanguage;
    const nextIndex = (supportedLanguages.indexOf(current) + 1) % supportedLanguages.length;
    applyLanguage(supportedLanguages[nextIndex]);
  };

  const init = () => {
    applyLanguage(getSavedLanguage());

    document.addEventListener('click', (event) => {
      const target = event.target.closest('[data-lang-switcher]');
      if (!target) {
        return;
      }
      event.preventDefault();
      toggleLanguage();
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
