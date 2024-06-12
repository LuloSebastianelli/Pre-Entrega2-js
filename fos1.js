// HIGUER-ORDER FUNCTIONS

// let total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);




// console.log(sum(range(1, 10)));

// ¿En cuál es mas probable encontrar un Bug?





// FOREACH
// const numeros = [1,2,3,4,5,6];

// const sumarNumeros = () => {}; // Arrow function
// const restarNumeros = function () {}; // Función anónima

// numeros.forEach(function (numero) {
//   console.log(numero)
// });

// numeros.forEach((num) => { console.log(num) });


// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 22000},
//   {nombre: 'AngularJS', precio: 22000},
//   {nombre: 'Desarrollo Web', precio: 16000},
// ];

// cursos.forEach((curso) => {
//   console.log(curso.nombre);
//   console.log(curso.precio);
// });

// const nombresCursos = [];

// cursos.forEach((curso) => {
//   nombresCursos.push(curso.nombre);
// });

// console.log(nombresCursos)

// const eliminarCurso = (nombre) => {
//   cursos.forEach((curso, index) => {
//     if (curso.nombre == nombre) {
//       cursos.splice(index, 1);
//     }
//   });

//   console.log(cursos);
// };

// eliminarCurso('AngularJS');





// FIND

// const numeros = [1,2,3,4,5,6];

// const resultado = numeros.find((numero) => numero > 3);
// console.log(resultado);

// const nombres = ["Ana", "Ema", "Juan"];

// const resultado = nombres.find((nombre) => nombre == "Ema");
// const resultado2 = nombres.find((nombre) => nombre == "Jose");
// console.log(resultado);
// console.log(resultado2); // undefined


// const cursos = [
//   {
//       nombre: 'Javascript',
//       precio: 15000
//   },
//   {
//       nombre: 'ReactJS',
//       precio: 22000
//   }
// ];

// const resultado = cursos.find((curso) => curso.nombre == 'ReactJS');
// console.log(resultado);




// FILTER

// const numeros = [1,2,3,4,5,6];

// const filtro1 = numeros.filter((numero) => numero > 4);
// console.log(filtro1);


// const nombres = ["Ana", "Ema", "Juan", "Elias"];

// const filtro2 = nombres.filter((nombre) => nombre.includes('n'));
// const filtro3 = nombres.filter((nombre) => nombre.includes('z'));
// console.log(filtro2);
// console.log(filtro3);

// if (filtro3.length == 0) {

// }


// Ejemplo 2

// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 22000},
//   {nombre: 'AngularJS', precio: 22000},
//   {nombre: 'Desarrollo Web', precio: 16000},
// ];

// const filtro4 = cursos.filter((curso) => curso.precio < 18000);
// console.log(filtro4);




// SOME

// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 22000},
//   {nombre: 'AngularJS', precio: 22000},
//   {nombre: 'Desarrollo Web', precio: 16000},
// ];

// console.log( cursos.some((curso) => curso.nombre == 'Javascript') ); // true
// console.log( cursos.some((curso) => curso.nombre == 'PHP') ); // false





// MAP

// const numeros = [1,2,3,4,5,6];

// const resultado = numeros.map((numero) => numero * 2);
// const resultado2 = numeros.map((numero) => numero + 100);
// console.log(resultado);
// console.log(resultado2);


// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 22000},
//   {nombre: 'AngularJS', precio: 22000},
//   {nombre: 'Desarrollo Web', precio: 16000},
// ];

// const nombresCursos = cursos.map((curso) => curso.nombre);
// console.log(nombresCursos);

// Modificar o agregar propiedades a un array

// const cursos2 = cursos.map((curso) => {
//   return {
//     nombre: curso.nombre,
//     precio: curso.precio * 1.25,
//     vendido: false
//   }
// });

// console.log(cursos2);





// REDUCE

// const carrito = [
//   {nombre: 'Javascript', precio: 15000, cantidad: 2},
//   {nombre: 'ReactJS', precio: 22000, cantidad: 1},
//   {nombre: 'AngularJS', precio: 22000, cantidad: 3},
//   {nombre: 'Desarrollo Web', precio: 16000, cantidad: 1},
//   {nombre: 'QA Manual', precio: 30000, cantidad: 1},
// ];

// const precioTotal = carrito.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0);
// const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
// console.log(precioTotal);
// console.log(cantidadTotal);




// SORT

// const numeros = [ 40, 1, 5, 200 ];

// Ordenar de forma Ascendente
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// Ordenar de forma Descendente
// numeros.sort((a, b) => b - a);
// console.log(numeros);
