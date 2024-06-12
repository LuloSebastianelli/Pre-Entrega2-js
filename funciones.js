// function saludar() {
//   console.log('Hola Mundo!');
// };

// saludar();


// let nombreIngresado = prompt('Ingrese su nombre:');
// alert('El nombre ingresado es: '+nombreIngresado);

// let nombreIngresado2 = prompt('Ingrese su nombre:');
// alert('El nombre ingresado es: '+nombreIngresado2);


// function solicitarNombre() {
//   let nombreIngresado = prompt('Ingrese su nombre:');
//   alert('El nombre ingresado es: '+nombreIngresado);
// };

// solicitarNombre();
// solicitarNombre();



// Funciones con parámetros

// function sumarDosNumeros(numeroA, numeroB) {
//   console.log(numeroA + numeroB);
// };

// let numero1 = Number(prompt('Ingrese un número:'));
// let numero2 = Number(prompt('Ingrese otro número:'));

// sumarDosNumeros(numero1, numero2);



// Acceder a valores dentro de una función

// let resultado = 0;

// function sumarDosNumeros(numeroA, numeroB) {
//   resultado = numeroA + numeroB
// };

// sumarDosNumeros(4, 5);

// console.log(resultado);


// Usando return

// function sumarDosNumeros(numeroA, numeroB) {
//   return numeroA + numeroB
// };

// let resultado = sumarDosNumeros(3, 5);
// console.log(resultado);


// Ejemplo calculadora

// function calculadora(numero1, numero2, operacion) {
//   switch (operacion) {
//     case '+':
//       return numero1 + numero2;
//     case '-':
//       return numero1 - numero2;
//     case '*':
//       return numero1 * numero2;
//     default:
//       return 0;
//   }
// };

// let resultado = calculadora(10, 2, '*');
// console.log(resultado);



// Scope de una variable

// Variable global
// let resultado = 0;

// function sumarDosNumeros(numero1, numero2) {
//   resultado = numero1 + numero2;
// };

// sumarDosNumeros(4, 6);

// console.log(resultado);


// Variable local
// function sumarDosNumeros(numero1, numero2) {
//   let resultado = numero1 + numero2;
//   console.log(resultado);
// };

// sumarDosNumeros(2, 3);

// console.log(resultado); // error



// Ejemplo de porque no usar VAR

// function explainVar() {
//   var a = 10;
//   console.log(a); // 10

//   if (true) {
//     var a = 20;
//     console.log(a); // 20
//   }

//   console.log(a); // 20
// };

// explainVar();


// function explainLet() {
//   let a = 10;
//   console.log(a); // 10

//   if (true) {
//     let a = 20;
//     console.log(a); // 20
//   }

//   console.log(a); // 10
// };

// explainLet();



// Ejemplo de funciones flecha

// const suma = (num1, num2) => num1 + num2;
// const resta = (num1, num2) => num1 - num2;

// const calcularIva = (precioProducto) => precioProducto * 0.21;

// let precioProducto = 10000;
// let precioDescuento = 100;

// const montoIva = calcularIva(precioProducto);
// const subTotal = suma(precioProducto, montoIva);
// const precioFinal = resta(subTotal, precioDescuento);

// alert('El precio del producto es: '+precioFinal);


// EJEMPLO DESAFÍO ENTREGABLE

const comprarProductos = () => {
  let producto = '';
  let cantidad = 0;
  let precio = 0;
  let totalCompra = 0;
  let seguirComprando = false;

  do {
      producto = prompt ("¿Querés comprar shampoo, acondicionador o ambos?", "Ej: ambos");
      cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));

      let cantidadValidada = validarCantidad(cantidad);

  switch (producto) {
      case "shampoo":
          precio = 500;
          break;
      case "acondicionador":
          precio = 700;
          break;
      case "ambos":
          precio = 1100;
          break;
      default:
          alert("Alguno de los datos ingresados no es correcto");
          precio= 0;
          cantidad= 0;
  }

  totalCompra += precio * cantidadValidada;
  seguirComprando = confirm("¿Querés agregar otro producto?");

  } while (seguirComprando)

  return totalCompra;
}

const validarCantidad = (cantidad) => {
  while (Number.isNaN(cantidad) || cantidad === 0) {
      if (cantidad !== 0) {
          alert('Deber agregar un número.')
      } else {
          alert('Debe agregar un número distinto de cero.')
      }
      cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));
  }

  return cantidad;
};

const aplicarDescuento = (totalCompra) => {
  if (totalCompra >= 5000) {
      return totalCompra * 0.80;
  } else {
      return totalCompra;
  }
}

const calcularEnvio = (totalCompra) => {
  let tieneEnvioADomicilio = confirm("¿Querés envío a domicilio?");

  if (tieneEnvioADomicilio && totalCompra >= 2000) {
    alert("Tenés envio gratis. El total de tu compra es $" + totalCompra);
  } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
    totalCompra += 700;
    alert("El envío cuesta $700. El total de tu compra es $" + totalCompra);
  } else {
    alert("El total de tu compra es $" + totalCompra);
  }

  return totalCompra;
}

calcularEnvio(aplicarDescuento(comprarProductos()));