'use strict';
const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreviewImg = document.querySelector('.js__profile-preview-img');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', setImage);
  fr.readAsDataURL(myFile);
}
let picture = '';

function setImage() {
  picture = fr.result;
  previewImage();
  setToLocalStorage();
}

function previewImage() {
  if (picture !== '') {
    profileImage.style.backgroundImage = `url(${picture})`;
    profilePreviewImg.src = picture;
  }
}
/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick(ev) {
  ev.preventDefault();
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
