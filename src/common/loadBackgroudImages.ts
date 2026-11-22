export default function loadBackgroudImages() {
  const backgroudImages = document.querySelectorAll('[data-background]');

  if (backgroudImages.length > 0) {
    backgroudImages.forEach((element) => {
      const el = element as HTMLElement;
      const image = el.dataset.background;
      if (image) {
        el.style.backgroundImage = `url('${image}')`;
      }
    });
  }
}
