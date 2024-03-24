document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();

    document.getElementById('push').addEventListener('click', () => {
        ui.agregarProducto();
    });
});

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.total = this.precio * this.cantidad;
    }
}

class UI {
    constructor() {
        this.tablaProductos = document.getElementById('tablaProductos');
        this.nombreInput = document.getElementById('producto');
        this.precioInput = document.getElementById('precio');
        this.cantidadInput = document.getElementById('cantidad');
    }

    agregarProducto() {
        const nombre = this.nombreInput.value;
        const precio = this.precioInput.value;
        const cantidad = this.cantidadInput.value;

        if (nombre && !isNaN(precio) && !isNaN(cantidad) && cantidad > 0 && precio > 0) {
            const producto = new Producto(nombre, precio, cantidad);
            this.agregarProductoATabla(producto);
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    }

    agregarProductoATabla(producto) {
        const row = this.tablaProductos.insertRow();
        const nombreCell = row.insertCell(0);
        const precioCell = row.insertCell(1);
        const cantidadCell = row.insertCell(2);
        const totalCell = row.insertCell(3);

        nombreCell.textContent = producto.nombre;
        precioCell.textContent = producto.precio.toFixed(2);
        cantidadCell.textContent = producto.cantidad;
        totalCell.textContent = producto.total.toFixed(2);
    }
}
