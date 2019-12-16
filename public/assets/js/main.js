'use strict';
const collapsibleTriggers = document.querySelectorAll('.js-collapsible__tigger');


function updateCollapsible(event) {
  //parentElement nos dice quien es la madre del elemento que se esta escuchando

  const currentCollapsible = event.currentTarget.parentElement;
  //Compruebo si esta abieto
  if (currentCollapsible.classList.contains('content-collapsible')) {
    //Si esta abierto, lo puedo cerrar
    currentCollapsible.classList.remove('content-collapsible');
  } else {
    //Si esta cerrado:
    // Los cierro todos
    for (const item of collapsibleTriggers) {
      item.parentElement.classList.remove('content-collapsible');
    }
    // Abro el correcto
    currentCollapsible.classList.add('content-collapsible');
  }
}

for (const item of collapsibleTriggers) {
  item.addEventListener('click', updateCollapsible);
}

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
const validation = function (event) {
  event.preventDefault();
  activateShareButton();
};


//añadir disable para que no se clicke
// Activar el boton de compartir solo si el formulario esta completo
const activateShareButton = function () {
  const check = containerForm.checkValidity();
  console.log(`entro, check: ${check}`);
  if (check === true) {
    submitEl.classList.add('share__button--active');
    submitEl.disabled = false;

  } else {
    submitEl.classList.remove('share__button--active');
    submitEl.disabled = true;



    // submitEl.setAttribute('disabled', true);


  }
};

containerForm.addEventListener('change', validation);

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

'use strict';
//Empezamos trayendo el formulario del html y creando un objeto con los inputs del formulario
const setToLocalStorage = () => {
  //guardamos en una constante el valor checked de la paleta seleccionada
  const colourChecked = document.querySelector('input[type=radio]:checked');
  const data = {
    name: nameEle.value,
    job: jobEle.value,
    phone: phoneEle.value,
    email: emailEle.value,
    linkedin: linkedinEle.value,
    github: githubEle.value,
    //metemos el valor del elemento radio seleccionado (color-option1, color-option2...) y se guarda en el objeto
    colour: colourChecked.value,
    photo: picture,
  };
  //convertimos (con setItem) el objeto en un JSON (que tiene formato string)
  localStorage.setItem('userData', JSON.stringify(data));
};

//Para cogerlos datos al iniciar la página convertimos los datos del JSON con parse (pasa de string a objeto)
const getFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    nameEle.value = userData.name;
    jobEle.value = userData.job;
    phoneEle.value = userData.phone;
    emailEle.value = userData.email;
    linkedinEle.value = userData.linkedin;
    githubEle.value = userData.github;
    picture = userData.photo;
    //parseamos el dato del valor del checked y lo asignamos a una constante que posteriormente meteremos interpolando en el queryselector
    const selectedPalette = userData.colour;
    document.querySelector(`#color-option${selectedPalette}`).checked = true;
    activateShareButton();
    //llamamos a las funciones que ya tenemos definidas en otros partials, para que haga el hilo de, cambiar la tarjeta, volver a cargar la imagen previsualizada y vuelva a cambiar el color de la paleta seleccionada
    changeCard();
    previewImage();
    changeColorPalette();
  }
};
//Escucho el formulario con keyup para que, cada vez que escribo, vaya guardando en el objeto todos los values
// containerForm.addEventListener("keyup", setToLocalStorage);
getFromLocalStorage();

'use strict';


'use strict';

const btnDelete = document.querySelector('.js-button--delete');

//funcion para borra los datos del form
const deleteData = function() {
  // changeColorPalette();
  colorReset();
  const palette1 = document.getElementById('color-option1');
  palette1.checked = true;
  document.querySelector('.js-name').value = '';
  document.querySelector('.js-job').value = '';
  document.querySelector('.js-phone').value = '';
  document.querySelector('.js-email').value = '';
  document.querySelector('.js-linkedin').value = '';
  document.querySelector('.js-github').value = '';
  document.querySelector('.js__profile-upload-btn').value = '';
  cardImage.style.backgroundImage = "url('./assets/images/placeholderImg.jpg')";
  profilePreviewImg.src = './assets/images/placeholderImg.jpg';

  submitEl.classList.remove('share__button--active');
  shareEle.classList.add('share__result--hidden');

  picture = '';
  localStorage.removeItem('userData');
};

function colorReset() {
  card.classList.remove('js-card-palette2');
  card.classList.remove('js-card-palette3');
  card.classList.remove('js-card-palette4');
  card.classList.add('js-card-palette1');
}
//Funcion que se ejecuta al pulsar reset
const handleReset = function() {
  //Limpio los inputs
  deleteData();
  //Repinto la cardResult
  changeCard();
};
btnDelete.addEventListener('click', handleReset);

'use strict';

let submitButton = document.querySelector('.js-button');
let responseURL = document.querySelector('.share__result__url');
let twitterURL = document.querySelector('.share__result__button');

submitButton.addEventListener('click', sendData);

function sendData(event) {
  event.preventDefault();
  let inputs = Array.from(containerForm.elements);
  let json = getJSONFromInputs(inputs);
  json.photo = picture;
  // Enviar la paleta seleccionada al servidor
  json.palette = document.querySelector(
    'input[name="color-options"]:checked'
  ).value;
  sendRequest(json);
}

function getJSONFromInputs(inputs) {
  return inputs.reduce(function(acc, val) {
    if (val.nodeName !== 'BUTTON') acc[val.name] = val.value;
    return acc;
  }, {});
}

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Si los datos del servidor son correctos, obtenemos la URL y la pintamos
function showURL(result) {
  if (result.success) {
    responseURL.href = result.cardURL;
    responseURL.innerHTML = result.cardURL;

    let twitterMsg = 'This is my awesome contact card!!';
    twitterURL.href = `https://twitter.com/intent/tweet?text=${twitterMsg} ${result.cardURL}`;

    shareEle.classList.remove('share__result--hidden');
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

//# sourceMappingURL=main.js.map
