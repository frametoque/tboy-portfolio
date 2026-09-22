const initIsotope2 = () => {
  let iso;
  let grid = document.querySelectorAll('.gallery2');
  let filtersElem = document.querySelector('.filtering');
  let buttonGroups = document.querySelectorAll('.filtering');

  if (grid.length >= 1) {
    grid.forEach((item) => {
      const initIso = () => {
        let gallery2Iso = new window.Isotope(item, {
          itemSelector: '.items',
          masonry: {
            columnWidth: '.width2',
          },
        });

        if (filtersElem) {
          filtersElem.addEventListener('click', function (event) {
            if (!matchesSelector(event.target, 'span')) {
              return;
            }
            var filterValue = event.target.getAttribute('data-filter');
            gallery2Iso.arrange({ filter: filterValue });
          });
          
          const radioButtonGroup = (buttonGroup) => {
            buttonGroup.addEventListener('click', (event) => {
              if (!matchesSelector(event.target, 'span')) {
                return;
              }
              buttonGroup.querySelector('.active').classList.remove('active');
              event.target.classList.add('active');
            });
          };
          
          for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
          }
        }
      };

      if (window.imagesLoaded) {
        window.imagesLoaded(item, initIso);
      } else {
        setTimeout(initIso, 500);
      }
    });
  }
};

export default initIsotope2;
