class ValidarReserva {
    constructor(nombre, personas, fecha, hora) {
        this.nombre = nombre;
        this.personas = personas;
        this.fecha = fecha;
        this.hora = hora;
    }

    validarNombre() {
        if (this.nombre === "") {
            return "El nombre es obligatorio";
        }

        return "";
    }

    validarPersonas() {
        if (this.personas === "") {
            return "Debe ingresar el número de personas";
        }

        if (this.personas <= 0) {
            return "El número de personas debe ser mayor a 0";
        }

        return "";
    }

    validarFecha() {
        if (this.fecha === "") {
            return "La fecha es obligatoria";
        }

        return "";
    }

    validarHora() {
        if (this.hora === "") {
            return "La hora es obligatoria";
        }

        return "";
    }
}

// Evento del formulario
document.getElementById("reserva").addEventListener("submit", function (e) {

    e.preventDefault();

    // Capturar datos
    let nombre = document.getElementById("nombre").value;
    let personas = document.getElementById("personas").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;

    // Crear objeto
    let reserva = new ValidarReserva(nombre, personas, fecha, hora);

    // Validaciones
    let errornombre = reserva.validarNombre();
    let errorpersonas = reserva.validarPersonas();
    let errorfecha = reserva.validarFecha();
    let errorhora = reserva.validarHora();

    // Mostrar errores
    document.getElementById("errornombre").innerHTML = errornombre;
    document.getElementById("errorpersonas").innerHTML = errorpersonas;
    document.getElementById("errorfecha").innerHTML = errorfecha;
    document.getElementById("errorhora").innerHTML = errorhora;

    // Mensaje final
    if (
        errornombre === "" && errorpersonas === "" && errorfecha === "" && errorhora === ""
    ) {
        document.getElementById("mensaje").innerHTML =
            "Reserva registrada correctamente";
    } else {
        document.getElementById("mensaje").innerHTML = "";
    }
});