'use strict'

function calcuEdad(fechaNacimiento) {

    let edad = 2023 - fechaNacimiento;
    alert("Tu edad es: " + edad);
  }
let fechaNacimientoUsuario = Number(prompt('Ingrese su año nacimiento:'));
calcuEdad(fechaNacimientoUsuario);
