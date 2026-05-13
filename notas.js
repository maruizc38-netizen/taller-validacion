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







    