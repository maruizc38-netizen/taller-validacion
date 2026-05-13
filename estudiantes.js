class validarform{
    constructor(nombre,correo,edad,programa){
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
        this.programa = programa;
    }
    validarnombre(){
        if(this.nombre === ""){
            return"nombre obligatorio";
        }
        if(this.nombre.length <10){
            return"el nombre debe tener mas de 10 caracteres";
        }
        return"";
    }
    validarcorreo(){
        if(this.correo === ""){
            return"correo requerido";
        }
        if(!this.correo.includes("@")){
            return"debe contener @"
        }
        return"";
    }
    validaredad(){
        if(this.edad ===""){
            return "edad requerida"
        }
        if(this.edad <14){
            return "debe ser mayor de 14 años"
        }
        return"";
    }
    validarprograma(){
        if(this.programa ===""){
            return "programa requerido"
        }
        return "";
    }
}
//evento del formulario
document.getElementById("registro_estu").addEventListener("submit", function (e){
    e.preventDefault();
    //capturar datos
    let nombre =document.getElementById("nombre").value;
    let correo =document.getElementById("correo").value;
    let edad =document.getElementById("edad").value;
    let programa=document.getElementById("programa").value;
    //crear objeto
    let registro_estu = new validarform(nombre,correo,edad,programa);
    //validaciones
    let errornombre = registro_estu.validarnombre();
    let errorcorreo = registro_estu.validarcorreo();
    let erroredad  = registro_estu.validaredad();
    let errorprograma = registro_estu.validarprograma();
    // mostrar errores
    document.getElementById("errornombre").innerHTML = errornombre;
    document.getElementById("errorcorreo").innerHTML = errorcorreo;
    document.getElementById("erroredad").innerHTML = erroredad;
    document.getElementById("errorprograma").innerHTML = errorprograma;
    //condiciones para mostrar errores 
    if(errornombre === ""&& errorcorreo === ""&& erroredad === ""&& errorprograma ===""){
        document.getElementById("mensaje").innerHTML ="formulario enviado exitosamente";
    }
    else{
        document.getElementById("mensaje").innerHTML="";
    }
});