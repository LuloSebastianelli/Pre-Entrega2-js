// Arrays

// const numeros = [3, 5, 7, 2, 3, 5, 4];

// let resultado1 = numeros[0] + numeros[4];
// console.log(resultado1);

// // Saber la longitud de un array
// console.log(numeros.length); // 7

// // Recorrer elementos de un array
// for (let i = 0; i < numeros.length; i++) {
//   alert(numeros[i]);
// };




// push - agregar elementos al final de un array

// numeros.push('Hola');
// numeros.push(100);

// numeros.push(3, 5, 3);

// console.log(numeros);



// unshift - agregar uno o mas elementos al principio de un array
// const mascotas = ["mishi", "firulais", "rocky"];
// mascotas.unshift("apolo", "lara");
// console.log(mascotas);



// pop - eliminar elementos del final de un array
// shift - eliminar elementos del principio de un array

// const mascotas = ["mishi", "firulais", "rocky"];
// mascotas.pop();
// mascotas.shift();

// console.log(mascotas);



// splice - me permite eliminar uno o mas elementos en base a su posición
// const mascotas = ["mishi", "firulais", "rocky", "lara", "bella"];

// mascotas.splice(2, 1);
// // mascotas.splice(2, 2);

// console.log(mascotas);



// join
// const mascotas = ["mishi", "firulais", "rocky", "lara", "bella"];
// console.log(mascotas.join("-"));

// alert(mascotas.join("\n"));




// Métodos que no modifican el array original

// concat

// const perros = ["rocky", "apolo"];
// const gatos = ["mishi", "garfield"];
// const conejos = ["juana"];

// const mascotas = perros.concat(gatos, conejos, ["rabit"]);
// console.log(mascotas);
// console.log(perros);
// console.log(gatos);




// slice
// const mascotas = ["mishi", "firulais", "rocky", "lara", "bella"];

// const mascotasAlta = mascotas.slice(2, 4);
// console.log(mascotasAlta);




// indexOf

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// // console.log(nombres.indexOf('Ana'));
// // console.log(nombres.indexOf('Pedro'));
// // console.log(nombres.indexOf('Juan'));


// let nuevoUsuario = '';

// do {

//   if (nuevoUsuario != '') {
//     alert('El nombre de usuario ya éxiste, ingrese otro:');
//   }

//   nuevoUsuario = prompt('Ingrese su nombre de usuario:');

// } while (nombres.indexOf(nuevoUsuario) != -1);

// // Agrego el nombre de usuario
// nombres.push(nuevoUsuario);

// console.log(nombres);




// includes

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// console.log(nombres.includes('Pedro'));
// console.log(nombres.includes('Juan'));

// let nuevoUsuario = '';

// do {

//   if (nuevoUsuario != '') {
//     alert('El nombre de usuario ya éxiste, ingrese otro:');
//   }

//   nuevoUsuario = prompt('Ingrese su nombre de usuario:');

// } while (nombres.includes(nuevoUsuario));

// // Agrego el nombre de usuario
// nombres.push(nuevoUsuario);

// console.log(nombres);



// Ejemplo: Eliminar un elemento en particular

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// // recibo el elemento a borrar por parámetro
// const eliminarUsuario = (nombre) => {
//     // busco su índice en el array
//     let index = nombres.indexOf(nombre)

//      // si existe, o sea es distinto a -1, lo borro con splice
//     if (index != -1 ) {
//         nombres.splice(index, 1)
//     }
// };

// eliminarUsuario('Ana');

// console.log(nombres);




// Arrays mas objetos

// const productos = [
//   { id: 1, nombre: "Arroz", precio: 200 },
//   { id: 2,  nombre: "Fideo", precio: 500 },
//   { id: 3,  nombre: "Pan", precio: 100 },
//   { id: 4,  nombre: "Aceite", precio: 900 }
// ];

// for (const producto of productos) {
//   console.log(producto.nombre);
//   console.log(producto.precio);
// }