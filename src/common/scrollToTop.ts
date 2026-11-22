const scrollToTop = () => {
  const offset = 150;
  const progressWrap = document.querySelector('.progress-wrap') as HTMLElement | null;
  const progressPath = document.querySelector('.progress-wrap path') as SVGPathElement | null;
  if (!progressWrap || !progressPath) return;

  const pathLength = progressPath.getTotalLength();
  const updateProgress = () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? pathLength - (scroll * pathLength) / height : 0;
    progressPath.style.strokeDashoffset = String(progress);
  };

  progressPath.style.transition = 'none';
  progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  progressPath.style.strokeDashoffset = String(pathLength);
  progressPath.getBoundingClientRect();
  progressPath.style.transition = 'stroke-dashoffset 10ms linear';

  updateProgress();
  window.addEventListener('scroll', updateProgress);
  window.addEventListener('scroll', () => {
    if (window.scrollY > offset) {
      progressWrap.classList.add('active-progress');
    } else {
      progressWrap.classList.remove('active-progress');
    }
  });

  progressWrap.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export default scrollToTop;
