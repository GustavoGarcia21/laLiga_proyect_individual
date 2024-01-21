function procesarFormulario() {
  // Aca creo variables con cada uno de los elementos del formulario
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var dni = document.getElementById('dni').value;
  var direccion = document.getElementById('direccion').value;
  var academia = document.getElementById('academia').value;
  var peso = document.getElementById('peso').value;
  var edad = document.getElementById('edad').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;

  // Acá muestro los datos en la consola
  console.log('Nombre:', nombre);
  console.log('Apellido:', apellido);
  console.log('DNI:', dni);
  console.log('Dirección:', direccion);
  console.log('Academia:', academia);
  console.log('Peso:', peso);
  console.log('Edad:', edad);
  console.log('Email:', email);
  console.log('Teléfono:', telefono);

  // Muestro mensaje indicando que se guardaron los datos
  alert('Se tomaron los datos de forma correcta');

  return false;
}
