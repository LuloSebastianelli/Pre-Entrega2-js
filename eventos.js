// Definir eventos: Opción 1

// const boton = document.getElementById('btnPrincipal');

// const respuestaClick = () => {
//   console.log('Respuesta al evento click!');
// };

// function respuestaClick() {
//   console.log('Respuesta al evento click!');
// }

// // Pasando una función como argumento
// boton.addEventListener('click', respuestaClick);



// Pasando una arrow function como argumento
// boton.addEventListener('click', () => {
//   console.log('Respuesta al evento click!');
// });



// Definir eventos: Opción 2 - Propiedades del nodo

// const boton = document.getElementById('btnPrincipal');

// boton.onclick = () => {
//   console.log('Escuchando un evento mediante las propiedades del nodo.');
// };



// Tipos de eventos

// const btnMain = document.querySelector('#btnMain');

// btnMain.addEventListener('mousemove', () => {
//   console.log('El mouse se esta moviendo!');
// });

// const redBox = document.querySelector('#redBox');

// redBox.addEventListener('mouseover', () => {
//   console.log('Estoy sobre la caja roja!');
// });



const inputNombre = document.querySelector('#nombre');
const inputEdad = document.querySelector('#edad');

// inputNombre.addEventListener('keydown', () => {
//   console.log('Presionando una tecla');
// });


// Ejemplo 1

// inputEdad.onkeyup = () => {
//   console.log('Soltando una tecla');
// };


// Ejemplo 2

// inputNombre.addEventListener('change', () => {
//   console.log(inputNombre.value);
// });

// inputEdad.addEventListener('input', () => {
//   console.log(inputEdad.value);
// });


// Ejemplo 3

// inputNombre.addEventListener('input', (e) => {
//   console.log(e.target.value);
// });


// Obtener datos de un formulario

// const form = document.querySelector('#form');
// const nombreForm = document.querySelector('#nombreForm');
// const edadForm = document.querySelector('#edadForm');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   console.log(nombreForm.value);
//   console.log(edadForm.value);
// });