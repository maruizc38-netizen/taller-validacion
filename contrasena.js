/*Desarrollar un formulario que permita cambiar la contraseña. Solicitar: 
● Contraseña actual 
● Nueva contraseña 
● Confirmar contraseña Validar: 
● Contraseña mínima 8 caracteres 
● Coincidencia entre contraseñas */
class validarform{
    constructor(contraseña_actual, nueva_contraseña, confirmar_contraseña){
        this.contraseña_actual = contraseña_actual;
        this.nueva_contraseña = nueva_contraseña;
        this.confirmar_contraseña = confirmar_contraseña;
    }
    validar_contraseña_actual(){
        if(this.contraseña_actual === ""){
            return "contraseña actual requerida";
        }
        return "";
    }
    validar_nueva_contraseña(){
        if(this.nueva_contraseña === ""){
            return "nueva contraseña requerida";
        }
        if(this.nueva_contraseña.length < 8){
            return "nueva contraseña debe tener al menos 8 caracteres";
        }
        return "";
    }
    validar_confirmar_contraseña(){
        if(this.confirmar_contraseña === ""){
            return "confirmar contraseña requerida";
        }   
        if(this.nueva_contraseña !== this.confirmar_contraseña){
            return "nueva contraseña y confirmar contraseña no coinciden";
        }
        return "";
    }
}
//evento del formulario
document.getElementById("cambiar_contraseña").addEventListener("submit", function (e){
    e.preventDefault();
    let contraseña_actual = document.getElementById("contraseña_actual").value;
    let nueva_contraseña = document.getElementById("nueva_contraseña").value;
    let confirmar_contraseña = document.getElementById("confirmar_contraseña").value;   
    let formulario = new validarform(contraseña_actual, nueva_contraseña, confirmar_contraseña);
    let error_contraseña_actual = formulario.validar_contraseña_actual();
    let error_nueva_contraseña = formulario.validar_nueva_contraseña();
    let error_confirmar_contraseña = formulario.validar_confirmar_contraseña();
    if(error_contraseña_actual || error_nueva_contraseña || error_confirmar_contraseña){
        alert(error_contraseña_actual + "\n" + error_nueva_contraseña + "\n" + error_confirmar_contraseña);
    }
    else{
        alert("Contraseña cambiada exitosamente");
    }
});
