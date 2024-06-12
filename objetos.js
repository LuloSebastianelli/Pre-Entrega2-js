// const persona1 = {
//   nombre: "Homero",
//   edad: 39,
//   calle: "Av. Siempreviva 742"
// };

// Acceder a valores de un objeto
// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.calle);


// Asignar valores a las propiedades de un objeto
// persona1.edad = 42;

// console.log(persona1);



// Funciones constructoras

// function Persona (nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;
// };

// const nombre = prompt('Ingrese su nombre:');
// const edad = parseInt(prompt('Ingrese su edad:'));
// const calle = prompt('Ingrese su dirección:');

// const persona1 = new Persona('Homero', 38, 'Av. siempreviva 743');
// const persona2 = new Persona('Magi', 2, 'Av. siempreviva 743');
// const persona3 = new Persona('Bart', 12, 'Av. siempreviva 743');
// const persona4 = new Persona(nombre, edad, calle);

// console.log(persona1.nombre);
// console.log(persona2.nombre);
// console.log(persona3.nombre);
// console.log(persona4);




// Métodos en funciones constructoras

// function Persona (nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;

//   this.hablar = function() {
//     console.log('Hola soy ' + this.nombre);
//   }
// };

// const persona1 = new Persona('Homero', 38, 'Av. siempreviva 743');
// const persona2 = new Persona('Magi', 2, 'Av. siempreviva 743');

// persona1.hablar();
// persona2.hablar();



// in y for in

// const persona1 = {
//   nombre: "Homero",
//   edad: 39,
//   calle: "Av. Siempreviva 742"
// };

// console.log( 'edad' in persona1 ); // true
// console.log( 'eda' in persona1 ); // false

// for (const propiedad in persona1) {
//   console.log(propiedad);
//   console.log(persona1[propiedad]);
// }



// Clases constructoras

// class Persona {
//   constructor(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//   }

//   hablar() {
//     console.log('Hola soy ' + this.nombre);
//   }
// };

// const persona1 = new Persona('Homero', 38, 'Av. siempreviva 743');
// persona1.hablar();



// Ejemplo 1

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  };

  sumarIva() {
    this.precio = this.precio * 1.21;
  };

  vender() {
    this.vendido = true;
  }
};

const producto1 = new Producto('Harina', 400);
producto1.sumarIva();
console.log(producto1);

const producto2 = new Producto('Aceite', 1000);
producto2.sumarIva();
producto2.vender();
console.log(producto2);

