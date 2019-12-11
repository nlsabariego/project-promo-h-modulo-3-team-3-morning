'use strict';

const nameEle = document.querySelector('.js-name');
const cardNameEle = document.querySelector('.js-cardTitle');
const jobEle = document.querySelector('.js-job');
const cardJobEle = document.querySelector('.js-cardJob');
const emailEle = document.querySelector('.js-email');
let cardEmailEle = document.querySelector('.js-cardEmail');
const phoneEle = document.querySelector('.js-phone');
let cardPhoneEle = document.querySelector('.js-cardPhone');
const linkedinEle = document.querySelector('.js-linkedin');
let cardLinkedinEle = document.querySelector('.js-cardLinkedin');
const githubEle = document.querySelector('.js-github');
let cardGithubEle = document.querySelector('.js-cardGithub');
const liElePhone = document.querySelector('.itemPhone');
const liEleMail = document.querySelector('.itemEmail');
const liEleLinkedin = document.querySelector('.itemLinkedin');
const liEleGithub = document.querySelector('.itemGithub');
const empty = '';
const cardImage = document.querySelector('.card__image');
const imgPreview = document.querySelector('.js__profile-preview');
const submitEl = document.querySelector('.js-button');
const shareEle = document.querySelector('.js-shareResult');

const cardFieldsDefaultValues = {
  name: 'Nombre Apellido',
  job: 'Front-end developer',
  phone: 'tel:',
  email: 'mailto:',
  linkedin: '',
  github: '',
};

function changeCard() {
  let nameValue = nameEle.value;
  if (nameValue !== empty) {
    cardNameEle.innerHTML = nameValue;
  } else {
    cardNameEle.innerHTML = cardFieldsDefaultValues.name;
  }

  let jobValue = jobEle.value;
  if (jobValue !== empty) {
    cardJobEle.innerHTML = jobValue;
  } else {
    cardJobEle.innerHTML = cardFieldsDefaultValues.job;
  }

  let phoneValue = phoneEle.value;
  if (phoneValue !== empty) {
    liElePhone.classList.remove('opacity');
    cardPhoneEle.href = `tel:${phoneValue}`;
  } else {
    liElePhone.classList.add('opacity');
  }

  let emailValue = emailEle.value;

  if (emailValue !== empty) {
    liEleMail.classList.remove('opacity');
    cardEmailEle.href = `mailto:${emailValue}`;
  } else {
    liEleMail.classList.add('opacity');
  }

  let linkedinValue = linkedinEle.value;
  if (linkedinValue !== empty) {
    liEleLinkedin.classList.remove('opacity');
    cardLinkedinEle.href = linkedinValue;
  } else {
    liEleLinkedin.classList.add('opacity');
  }

  let githubValue = githubEle.value;
  if (githubValue !== empty) {
    liEleGithub.classList.remove('opacity');
    cardGithubEle.href = githubValue;
  } else {
    liEleGithub.classList.add('opacity');
  }
  setToLocalStorage();
}

nameEle.addEventListener('keyup', changeCard);
jobEle.addEventListener('keyup', changeCard);
emailEle.addEventListener('keyup', changeCard);
phoneEle.addEventListener('keyup', changeCard);
linkedinEle.addEventListener('keyup', changeCard);
githubEle.addEventListener('keyup', changeCard);

//Validamos el formulario y añadimos la clase "active" cuando el formulario está cumplimentado
const containerForm = document.querySelector('.js-containerForm');
const validation = function(event) {
  event.preventDefault();
  activateShareButton();
};

// Activar el boton de compartir solo si el formulario esta completo
const activateShareButton = function() {
  const check = containerForm.checkValidity();
  if (check === true) {
    submitEl.classList.add('share__button--active');
  } else {
    submitEl.classList.remove('share__button--active');
  }
};

containerForm.addEventListener('change', validation);
