let productos = JSON.parse(localStorage.getItem('productos')) || [];

function guardarProductos() {
    localStorage.setItem('productos', JSON.stringify(productos));
}

function agregarProducto() {
    const id = document.getElementById('id').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const categoria = document.getElementById('categoria').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);

    const errores = validarProducto({ id, nombre, categoria, precio });
    
    if (Object.keys(errores).length === 0) {
        const producto = { id, nombre, categoria, precio };
        productos.push(producto);
        guardarProductos();
        mostrarProductos(productos);
        limpiarFormulario();
    } else {
        mostrarErrores(errores);
    }
}

function eliminarProducto(id) {
    productos = productos.filter(producto => producto.id !== id);
    guardarProductos();
    mostrarProductos(productos);
}

function filtrarProductos() {
    const categoria = document.getElementById('filtroCategoria').value.trim();
    const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase().includes(categoria.toLowerCase()));
    mostrarProductos(productosFiltrados);
}

function mostrarProductos(lista) {
    const productosLista = document.getElementById('productosLista');
    productosLista.innerHTML = '';

    lista.forEach(({ id, nombre, categoria, precio }) => {
        const productoItem = document.createElement('div');
        productoItem.className = 'producto-item';
        productoItem.innerHTML = `
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Categoría:</strong> ${categoria}</p>
            <p><strong>Precio:</strong> $${precio.toFixed(2)}</p>
            <button onclick="eliminarProducto('${id}')">Eliminar</button>
        `;
        productosLista.appendChild(productoItem);
    });
}

function limpiarFormulario() {
    document.getElementById('id').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('precio').value = '';
    limpiarErrores();
}

function validarProducto({ id, nombre, categoria, precio }) {
    const errores = {};
    if (!id) errores.id = 'El ID es requerido.';
    if (!nombre) errores.nombre = 'El nombre es requerido.';
    if (!categoria) errores.categoria = 'La categoría es requerida.';
    if (isNaN(precio) || precio <= 0) errores.precio = 'El precio debe ser un número positivo.';
    return errores;
}

function mostrarErrores(errores) {
    limpiarErrores();
    for (const [key, mensaje] of Object.entries(errores)) {
        document.getElementById(`${key}Error`).innerText = mensaje;
    }
}

function limpiarErrores() {
    document.querySelectorAll('.error').forEach(span => span.innerText = '');
}

// Inicializar la lista de productos al cargar la página
mostrarProductos(productos);
