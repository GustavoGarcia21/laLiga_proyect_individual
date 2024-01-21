/* Al no tener base de datos voy a crear dos variables para usuario y contraseña */
function loguear() {
    const usuario = "Gustavo";
    const pass = "fullstack";
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    console.log("Al no tener base de datos creé dos variables, para usuario y contraseña")
    console.log(usuario);
    console.log(pass);
    console.log(user);
    console.log(password);
    if (user == usuario && pass == password) {
        alert("usuario loguado");
        window.location.host("./index.html")
    }
    else {
        alert("usuario no logueado");
    }

    return (false);

}
