/*Crear un formulario usando clases en JavaScript para registrar empleados.
Solicitar:
● Nombre
● Cargo
● Salario
● Horas extras
Calcular:
● Salario total
Validar:
● Salario mayor a 0
● Horas extras válidas*/
class validarform{
    constructor(nombre,cargo,salario,hora_extras){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.hora_extras = hora_extras;
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
    validarcargo(){
        if(this.cargo === ""){
            return"cargo requerido";
        }
        return"";
    }
    validarsalario(){
        if(this.salario ===""){
            return "salario requerido"
        }
        if(this.edad <0){
            return "salario debe ser mayor a 0 cero"
        }
        return"";
    }
    validarhoras(){
        if(this.hora_extras ===""){
            return "horas extras requeridas"
        }
        return "";
    }
    calcular_salario(){
        let salario_total = parseFloat(this.salario) + (parseFloat(this.hora_extras) * 6000); 
        return salario_total;

    }
}
//evento del formulario
document.getElementById("registro_empleado").addEventListener("submit", function (e){
    e.preventDefault();
    //capturar datos
    let nombre =document.getElementById("nombre").value;
    let cargo =document.getElementById("cargo").value;
    let salario =document.getElementById("salario").value;
    let hora_extras=document.getElementById("horas_extras").value;
    //crear objeto
    let registro_empleado = new validarform(nombre,cargo,salario,hora_extras);
    //validaciones
    let errornombre = registro_empleado.validarnombre();
    let errorcargo = registro_empleado.validarcargo();
    let errorsalario = registro_empleado.validarsalario();
    let errorhoras_extras = registro_empleado.validarhoras();
    // mostrar errores
    document.getElementById("errornombre").innerHTML = errornombre;
    document.getElementById("errorcargo").innerHTML = errorcargo;
    document.getElementById("errorsalario").innerHTML = errorsalario;
    document.getElementById("errorhoras_extras").innerHTML = errorhoras_extras;
    //condiciones para mostrar errores 
    if(errornombre === ""&& errorcargo === ""&& errorsalario === ""&& errorhoras_extras ===""){
        document.getElementById("mensaje").innerHTML ="formulario enviado exitosamente";
        let salario_total = registro_empleado.calcular_salario();
        document.getElementById("salario_total").innerHTML = "Salario Total: " + salario_total.toLocaleString();
    }
    else{
        document.getElementById("mensaje").innerHTML="";
    }
});