if (typeof window !== 'undefined') {
  const initWow = () => {
    if (typeof WOW !== 'undefined') {
      new WOW({
        animateClass: 'animated',
        offset: 100,
      }).init();
    }
  };

  if (document.readyState === 'complete') {
    initWow();
  } else {
    window.addEventListener('load', initWow);
  }
}
