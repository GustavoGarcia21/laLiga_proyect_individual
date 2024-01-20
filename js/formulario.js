function validarFormulario() {
  var formulario = document.getElementById('miFormulario');

  // Validar cada campo
  if (!validarCampo('nombre', 'Por favor, ingresa tu nombre.')) return false;
  if (!validarCampo('apellido', 'Por favor, ingresa tu apellido.')) return false;
  if (!validarCampo('dni', 'Por favor, ingresa tu DNI.')) return false;
  if (!validarCampo('direccion', 'Por favor, ingresa tu dirección.')) return false;
  if (!validarCampo('academia', 'Por favor, ingresa tu academia.')) return false;
  if (!validarCampo('peso', 'Por favor, ingresa tu peso aproximado.')) return false;
  if (!validarCampo('edad', 'Por favor, ingresa tu edad.')) return false;
  if (!validarCampo('email', 'Por favor, ingresa tu correo electrónico.')) return false;
  if (!validarCampo('telefono', 'Por favor, ingresa tu número de teléfono.')) return false;

  // Si llegamos aquí, el formulario es válido
  return true;
}

function validarCampo(idCampo, mensaje) {
  var campo = document.getElementById(idCampo);
  if (campo.value.trim() === '') {
    alert(mensaje);
    campo.focus();
    return false;
  }
  return true;
}


function validarFormulario() {
  if (!validarCampoTexto('nombre', 'Por favor, ingresa un nombre válido.')) return false;
  if (!validarCampoTexto('apellido', 'Por favor, ingresa un apellido válido.')) return false;
  if (!validarCampoEntero('dni', 'Por favor, ingresa un DNI válido.')) return false;
  if (!validarCampoTexto('direccion', 'Por favor, ingresa una dirección válida.')) return false;
  if (!validarCampoTexto('academia', 'Por favor, ingresa una academia válida.')) return false;
  if (!validarCampoFlotante('peso', 'Por favor, ingresa un peso válido.')) return false;
  if (!validarCampoTexto('edad', 'Por favor, ingresa una edad válida.')) return false;
  if (!validarCampoEmail('email', 'Por favor, ingresa un correo electrónico válido.')) return false;
  if (!validarCampoEntero('telefono', 'Por favor, ingresa un teléfono válido.')) return false;

  alert

  return true;
}

function validarCampoTexto(idCampo, mensaje) {
  var campo = document.getElementById(idCampo);
  var regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if (!regex.test(campo.value.trim())) {
    alert(mensaje);
    campo.focus();
    return false;
  }
  return true;
}

function validarCampoEntero(idCampo, mensaje) {
  var campo = document.getElementById(idCampo);
  var regex = /^\d+$/;

  if (!regex.test(campo.value.trim())) {
    alert(mensaje);
    campo.focus();
    return false;
  }
  return true;
}

function validarCampoFlotante(idCampo, mensaje) {
  var campo = document.getElementById(idCampo);
  var regex = /^(\d+\.\d+|\.\d+|\d+)$/;

  if (!regex.test(campo.value.trim())) {
    alert(mensaje);
    campo.focus();
    return false;
  }
  return true;
}

function validarCampoEmail(idCampo, mensaje) {
  var campo = document.getElementById(idCampo);
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(campo.value.trim())) {
    alert(mensaje);
    campo.focus();
    return false;
  }
  return true;
}


