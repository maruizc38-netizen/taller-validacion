/*Desarrollar un sistema que permita registrar:
● Nombre del estudiante
● 3 notas
Calcular:
● Promedio
Validar:
● Notas entre 0 y 5
Mostrar:
● Aprobado
● Reprobado*/
class validarform{
    constructor(nombre,nota1,nota2,nota3){
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
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
    validarnota(nota){
        if(nota ===""){
            return "nota requerida"
        }
        if(nota <0 || nota >5){
            return "nota debe estar entre 0 y 5"
        }
        return"";
    }
    calcular_promedio(){
        let promedio = (parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3)) / 3;
        return promedio;
    }
    mostrar_resultado(){
        let promedio = this.calcular_promedio();
        if(promedio >= 3){
            return "Aprobado";
        }
        else{
            return "Reprobado";
        }
    }
}
//evento del formulario
document.getElementById("registro_notas").addEventListener("submit", function (e){
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    let formulario = new validarform(nombre,nota1,nota2,nota3);
    let error_nombre = formulario.validarnombre();
    let error_nota1 = formulario.validarnota(nota1);
    let error_nota2 = formulario.validarnota(nota2);
    let error_nota3 = formulario.validarnota(nota3);
    if(error_nombre || error_nota1 || error_nota2 || error_nota3){
        document.getElementById("error_nombre").innerText = error_nombre;
        document.getElementById("error_nota1").innerText = error_nota1;
        document.getElementById("error_nota2").innerText = error_nota2;
        document.getElementById("error_nota3").innerText = error_nota3;
    }
    else{
        document.getElementById("error_nombre").innerText = "";
        document.getElementById("error_nota1").innerText = "";
        document.getElementById("error_nota2").innerText = "";
        document.getElementById("error_nota3").innerText = "";
        let resultado = formulario.mostrar_resultado();
        document.getElementById("resultado").innerText = resultado;
    }
});






    