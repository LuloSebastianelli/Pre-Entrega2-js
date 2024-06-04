// Variables
let producto = ""
let precio = 0
let cantidad = 0
let cantidadTotal = 0
let seguirComprando = false
let precioTotal = 0

const incluirIva = (precioTotal) => precioTotal * 1.21

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0) {
        alert("Debe ingresar una cantidad valida")
        cantidad = parseInt(prompt("Ingrese la cantidad de copias que desea comprar"))
    }
    return cantidad
} 

// Inicio
alert("Bienvenido a String, con su compra de 3 o mas juegos recibira un 30% de descuento!")

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
            cantidad = cantidad * 2
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

let precioIva = incluirIva(precioTotal)

if (cantidadTotal >= 3) {
    alert("Se te aplico un descuento del 30% por tu compra de "+cantidadTotal+" Productos!")
    precioIva = precioIva * 0.70
} else {
    alert("No se te aplico descuento debido a que compraste menos de 3 productos!")
}

alert("Compraste "+cantidadTotal+" Juegos con un precio de $"+precioIva+"!")
alert("Felicidades realizaste tu compra con exito!")

//done 