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
