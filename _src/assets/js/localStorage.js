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
