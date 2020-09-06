'use strict'
import * as funciones from '/js/funciones.js';

// Función que buscar datos según tecla
funciones.entrada.addEventListener('keyup', funciones.buscar);

// Alerta
funciones.tabla.addEventListener('click', (e)=>{
  if(e.target.parentElement.parentElement.classList.contains('eliminar')){
    e.target.parentElement.parentElement.remove();
  };
});



  


