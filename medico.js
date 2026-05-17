/*Una clínica necesita registrar pacientes. Solicitar: 
● Nombre 
● Edad 
● Peso 
● Estatura Calcular: 
● IMC Clasificar: 
● Bajo peso 
● Normal 
● Sobrepeso*/
class validarform{
    constructor(nombre, edad, peso, estatura){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.estatura = estatura;
    }
    validar_nombre(){
        if(this.nombre === ""){
            return "nombre requerido";
        }
        return "";
    }
    validar_edad(){
        if(this.edad === ""){
            return "edad requerida";
        }
        if(isNaN(this.edad) || this.edad <= 0){
            return "edad debe ser un número positivo";
        }
        return "";
    }
    validar_peso(){
        if(this.peso === ""){
            return "peso requerido";
        }
        if(isNaN(this.peso) || this.peso <= 0){
            return "peso debe ser un número positivo";
        }
        return "";
    }
    validar_estatura(){
        if(this.estatura === ""){
            return "estatura requerida";
        }   
        if(isNaN(this.estatura) || this.estatura <= 0){
            return "estatura debe ser un número positivo";
        }
        return "";
    }
    calcular_imc(){
        return this.peso / (this.estatura * this.estatura);
    }
    clasificar_imc(){
        let imc = this.calcular_imc();
        if(imc < 18.5){
            return "Bajo peso";
        } else if(imc >= 18.5 && imc < 25){
            return "Normal";
        } else {
            return "Sobrepeso";
        }   
    }
}
//evento del formulario
document.getElementById("formulario_paciente").addEventListener("submit", function (e){
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);
    let formulario = new validarform(nombre, edad, peso, estatura);
    let error_nombre = formulario.validar_nombre();
    let error_edad = formulario.validar_edad();
    let error_peso = formulario.validar_peso();
    let error_estatura = formulario.validar_estatura();
    if(error_nombre || error_edad || error_peso || error_estatura){
        alert(error_nombre + "\n" + error_edad + "\n" + error_peso + "\n" + error_estatura);
    }
    else{
        let imc = formulario.calcular_imc();
        let clasificacion = formulario.clasificar_imc();
        alert("IMC: " + imc.toFixed(2) + "\nClasificación: " + clasificacion);
    }
});
