class validarformulario {
    constructor(usuario, contrasena) {
        
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
    validarusuario() {
        if (this.usuario === "") {
            return "Usuario obligatorio";
        }
        return "";
    }
    validarcontrasena() {
        if (this.contrasena === "") {
            return "La contraseña no puede estar vacia";
            
        }
        if (this.contrasena.length < 8) {
            return "La contraseña debe tener al menos 6 caracteres";

        }
        return "";
    }

}
//evento del formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    //capturar datos 
    let usuario =document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    //crear objeto
    let formulario = new validarformulario(usuario,contrasena)
    //validaciones 
    let errorusu = formulario.validarusuario();
    let errorcontrasena= formulario.validarcontrasena();
    
    //mostrar errores 
    document.getElementById("errorusu").innerHTML = errorusu;
    document.getElementById("errorcontrasena").innerHTML = errorcontrasena;

    //
    if(errorusu === "" && errorcontrasena === ""){
        document.getElementById("mensaje").innerHTML ="formulario enviado exitosamente";
    }
    else{
        document.getElementById("mensaje").innerHTML = "";
    }
    

    
    

});