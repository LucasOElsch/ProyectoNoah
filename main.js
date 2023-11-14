var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var errorNombre = document.getElementById("errorNombre");
var errorApellido = document.getElementById("errorApellido")
var errorCorreo = document.getElementById("errorCorreo")
var errorTelefono =document.getElementById ("errorTelefono")
error.style.color = "red";

function enviarformulario(){
    console.log("Enviando Formulario...");

   

    if(nombre.value === null || nombre.value === "") {
        errorNombre.innerHTML = ("Ingresa tu nombre");
    } else {
        errorNombre.innerHTML = ("")
    }



    if(apellido.value === null || apellido.value === "") {
        errorApellido.innerHTML = ("Ingresa tu apellido");
    } else {
        errorApellido.innerHTML = ("")
    }

    if(correo.value === null || correo.value === "") {
        errorCorreo.innerHTML = ("Ingresa tu correo");
    } else {
        errorCorreo.innerHTML = ("")
    }
    
    if(telefono.value === null || telefono.value === "") {
        errorTelefono.innerHTML = ("Ingresa tu apellido");
     
    } else {
        errorTelefono.innerHTML = ("");
    }




    return false;
}
