// const div = document.getElementById('app');
// const parrafo = document.getElementById('parrafo1');
// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

// innerHTML
// La propiedad innerHTML establece o devuelve el contenido HTML de un elemento.




// const paises = document.getElementsByClassName('paises');
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);


// for of

// for (const pais of paises) {
//   console.log(pais.innerHTML);
// };




// innerHTML

// const parrafo = document.getElementById('parrafo1');
// console.log(parrafo.innerHTML);

// parrafo.innerHTML = 'Hola CODER!!!';


// const nombre = prompt('Ingrese su nombre:');
// parrafo.innerHTML = 'Hola '+nombre+'!!!';


// const contenedor = document.getElementById('contenedor');

// contenedor.innerHTML = '<h2>Hola Mundo!!!</h2><p>Soy un párrafo</p>';

// contenedor.className = 'container row';




// Crear un elemento mediante JavaScript

// const parrafo = document.createElement('p');

// parrafo.innerHTML = '<h2>Hola Mundo!</h2>';

// document.body.append(parrafo);




// Eliminar elementos del DOM

// const parrafo = document.getElementById('parrafo1');

// parrafo.remove();




// inputs

// const nombre = document.getElementById('nombre');
// const edad = document.getElementById('edad');
// nombre.value = 'Bart';
// edad.value = 12;




// const contenedor = document.getElementById('personas');

// let personas = ["Homero", "Marge", "Bart", "Lisa"];

// for (const persona of personas) {
//   let li = document.createElement('li');

//   li.innerHTML = persona;

//   contenedor.appendChild(li);
// }




// const productos = [
//   { id: 1,  nombre: "Arroz", precio: 125 },
//   {  id: 2,  nombre: "Fideo", precio: 70 },
//   {  id: 3,  nombre: "Pan"  , precio: 50},
//   {  id: 4,  nombre: "Flan" , precio: 100}
// ];

// for (const producto of productos) {
//   let div = document.createElement('div');

//   div.innerHTML = `
//     <div class="contenedor">
//       <h3>ID: ${producto.id}</h3>
//       <p>${producto.nombre}</p>
//       <p>$ ${producto.precio}</p>
//     </div>
//   `;

//   document.body.appendChild(div);
// }



