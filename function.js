const producto = {
    nombre: document.getElementById('nombre'),
    precioUnitario: document.getElementById('precioUnitario'),
    cantidad: document.getElementById('cantidad'),
    calcularTotal: ()=>{
        total = precioUnitario * cantidad;
    }
}

const carrito = {
    productos: productos.push(producto),
    folio: (Math.random() + 1).toString(36).substring(7),
    subtotal:producto.calcularTotal(),
    total: subtotal,
    calcularTotal: ()=>{
        total = total + (subtotal * .16);
        document.getElementById('subtotal')
    }
}

document.getElementById('enlace').addEventListener('click', function(e) {
    e.preventDefault();
    enviar_formulario();
})

function enviar_formulario() {
    let total = document.getElementById('total');
    total.appendChild(subtotal);
}

persona.hola= ()=>{
    console.log('ESTOY GRITANDO');
};