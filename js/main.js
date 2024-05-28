// Variables
let producto = ""
let precio = 0
let cantidad = 0
let cantidadTotal = 0
let seguirComprando = false
let precioTotal = 0

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0) {
        alert("Debe ingresar una cantidad valida")
        cantidad = parseInt(prompt("Ingrese la cantidad de copias que desea comprar"))
    }
    return cantidad
} 

// Inicio
do {
    producto = prompt("¡Que Juego quieres comprar? Uncharted, Minecraft o ambos.", "Ej:Uncharted")
    cantidad = parseInt(prompt("Ingrese la cantidad de copias que desea comprar"))

    const cantidadValidada = validarCantidad(cantidad)

    switch (producto) {
        case "Uncharted":
            precio = 1000
            break;
        case "Minecraft":
            precio = 1500
            break;
        case "ambos":
            precio = 2500
            break;
        default:
            alert("Algunos de los datos no fue ingresado correctamente")
            precio = 0
            cantidad = 0
    }
    precioTotal += precio*cantidadValidada
    cantidadTotal += cantidad
    
    seguirComprando = confirm("¡Deseas seguir comprando?")

} while (seguirComprando);

alert("Compraste "+cantidadTotal+" Juegos con un precio de $"+precioTotal+"!")
alert("Felicidades realizaste tu compra con exito!")

//done