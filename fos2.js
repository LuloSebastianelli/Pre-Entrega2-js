// sort

// const items = [
//   { name: 'Pikachu', price: 21 },
//   { name: 'Charmander', price: 45 },
//   { name: 'Pidgey', price: 37 },
//   { name: 'Squirtle', price: 60 }
// ];

// const result = items.sort((a, b) => {
//   if (a.name > b.name) {
//     return 1
//   }
//   if (a.name < b.name) {
//     return -1
//   }

//   return 0;
// });

// console.log(result);


// items.sort((a, b) => a.price - b.price);

// console.log(items);




// Objeto Math

// console.log(Math.max(23, 11, 45, 3, 9, 76));
// console.log(Math.min(23, 11, 45, 3, 9, 76));


// const pi = Math.PI;

// const num = 3.5;

// // ceil()
// console.log(Math.ceil(pi));

// // floor()
// console.log(Math.floor(pi));

// // round()
// console.log(Math.round(pi));
// console.log(Math.round(num));



// random()

// console.log(Math.random());

// // Rango de número entre el 0 y el 10
// console.log(Math.random() * 10);
// console.log(Math.random() * 100);

// // Rango del 30 al 60
// console.log(Math.random() * 30 + 30);


// // Combinar métodos
// console.log(Math.round(Math.random() * 100));


// const randomNumbers = () => {
//   return Math.round(Math.random() * 100);
// };

// const result = randomNumbers();
// console.log(result);




// Ejemplo de código aleatorio
// const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// const codigoAleatorio = (longitud) => {
//   let contrasena = '';

//   for (let i=0; i < longitud; i++) {
//     const indice = Math.floor(Math.random() * caracteres.length);
//     contrasena += caracteres.charAt(indice);
//   }

//   return contrasena;
// };

// const codigo = codigoAleatorio(6);
// console.log(codigo);



// Date

// const navidad = new Date("December 25, 2024");
// const hoy = new Date("June 3, 2024");

// // console.log(navidad - hoy);
// const milisegundosPorDia = 86400000;

// console.log((navidad - hoy) / milisegundosPorDia);


// Ejemplo 2

// const inicio = new Date()

// for (let i = 0; i < 1000; i++) {
//     console.log("haciendo tiempo")
// }

// const final = new Date()

// console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
// // El proceso tardó: 396 milisegundos



// const calcularEdad = (fecha) => {
//   const fechaActual = new Date();
//   const fechaDeNacimiento = new Date(fecha);
//   const mesDiferencia = fechaActual.getMonth() - fechaDeNacimiento.getMonth();
//   const diaDiferencia = fechaActual.getDate() < fechaDeNacimiento.getDate();

//   let edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear();

//   if (mesDiferencia < 0 || (mesDiferencia === 0 && diaDiferencia)) {
//     edad--
//   };

//   return edad;
// };

// const edadActual = calcularEdad('4/19/1988');
// console.log(edadActual);
