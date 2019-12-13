'use strict';
const palette1 = document.getElementById('color-option1');
const palette2 = document.getElementById('color-option2');
const palette3 = document.getElementById('color-option3');
const palette4 = document.getElementById('color-option4');

const card = document.querySelector('.js-card');

function changeColorPalette() {
  const checkedPalette = document.querySelector('input[type=radio]:checked');
  const attr = checkedPalette.getAttribute('palette');
  card.classList.remove('js-card-palette1');
  card.classList.remove('js-card-palette2');
  card.classList.remove('js-card-palette3');
  card.classList.remove('js-card-palette4');
  card.classList.add(`js-card-${attr}`);
  setToLocalStorage();
}
palette1.addEventListener('click', changeColorPalette);
palette2.addEventListener('click', changeColorPalette);
palette3.addEventListener('click', changeColorPalette);
palette4.addEventListener('click', changeColorPalette);
