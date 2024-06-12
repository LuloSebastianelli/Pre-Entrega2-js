let productos = [
    {id: 1, nombre: "Silla", categoria: "Muebles", precio: 100},
    {id: 2, nombre: "Mesa",  categoria: "Muebles", precio: 150},
    {id: 3, nombre: "Heladera", categoria: "Cocina", precio: 200}
];

function agregarProducto() {
    const id = prompt("Ingrese el ID del producto");
    const nombre = prompt("Ingrese el nombre del producto:");
    const categoria = prompt("Ingrese la categoría del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (id && nombre && categoria && !isNaN(precio)) {
        const producto = {
            id,
            nombre,
            categoria,
            precio
        };
        productos.push(producto);
        alert("Producto agregado con exito.");
    } else {
        alert("Por favor ingrese todos los datos correctamente.");
    }
}

function eliminarProducto() {
    const id = parseInt(prompt("Ingrese el ID del producto a eliminar:"));
    const productoEncontrado = productos.find(producto => producto.id === id);

    if (productoEncontrado) {
        productos = productos.filter(producto => producto.id !== id);
        alert("Producto eliminado con éxito.");
    } else {
        alert("Producto no encontrado.");
    }
}

function filtrarProductos() {
    const categoria = prompt("Ingrese la categoría para filtrar productos:");
    const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase().includes(categoria.toLowerCase()));
    
    if (productosFiltrados.length > 0) {
        let resultado = "Productos filtrados:\n";
        productosFiltrados.forEach(producto => {
            resultado += `ID: ${producto.id}, Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: $${producto.precio.toFixed(2)}\n`;
        });
        alert(resultado);
    } else {
        alert("No se encontraron productos en esa categoría.");
    }
}

function mostrarProductos() {
    if (productos.length > 0) {
        let lista = "Lista de productos:\n";
        productos.forEach(producto => {
            lista += `ID: ${producto.id}, Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: $${producto.precio.toFixed(2)}\n`;
        });
        alert(lista);
    } else {
        alert("No hay productos en la lista.");
    }
}

function menu() {
    let opcion;
    do {
        opcion = parseInt(prompt(`Seleccione una opción:
        1. Agregar producto
        2. Eliminar producto
        3. Filtrar productos por categoría
        4. Mostrar todos los productos
        5. Salir`));

        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                eliminarProducto();
                break;
            case 3:
                filtrarProductos();
                break;
            case 4:
                mostrarProductos();
                break;
            case 5:
                alert("Gracias por usar mi proyecto :)");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== 5);
}

// Ejecutar el menú para comenzar la interacción con el usuario
menu();
