/*Crear un formulario de compra. Solicitar: 
● Producto 
● Precio 
● Cantidad Calcular: 
● Subtotal 
● IVA 
● Total Validar: 
● Cantidad positiva 
● Precio válido */
class validarform{
    constructor(producto, precio, cantidad){
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }   
    validar_producto(){
        if(this.producto === ""){
            return "producto requerido";
        }
        return "";
    }
    validar_precio(){
        if(this.precio === ""){
            return "precio requerido";
        }
        if(isNaN(this.precio) || this.precio <= 0){
            return "precio debe ser un número positivo";
        }
        return "";
    }
    validar_cantidad(){
        if(this.cantidad === ""){
            return "cantidad requerida";
        }   
        if(isNaN(this.cantidad) || this.cantidad <= 0){
            return "cantidad debe ser un número positivo";
        }
        return "";
    }
    calcular_subtotal(){
        return this.precio * this.cantidad;
    }
    calcular_iva(){
        return this.calcular_subtotal() * 0.16;
    }
    calcular_total(){
        return this.calcular_subtotal() + this.calcular_iva();
    }
}
//evento del formulario
document.getElementById("formulario_compra").addEventListener("submit", function (e){
    e.preventDefault();
    let producto = document.getElementById("producto").value;   
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let formulario = new validarform(producto, precio, cantidad);
    let error_producto = formulario.validar_producto();
    let error_precio = formulario.validar_precio();
    let error_cantidad = formulario.validar_cantidad();
    if(error_producto || error_precio || error_cantidad){
        alert(error_producto + "\n" + error_precio + "\n" + error_cantidad);
    }
    else{
        let subtotal = formulario.calcular_subtotal();
        let iva = formulario.calcular_iva();
        let total = formulario.calcular_total();
        alert("Subtotal: " + subtotal.toFixed(2) + "\nIVA: " + iva.toFixed(2) + "\nTotal: " + total.toFixed(2));
    }
});