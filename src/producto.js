const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

// Colores
const propiedadColor = producto.querySelector('#propiedad-color');

// Botones cantidad
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const inputCantidad = producto.querySelector('#cantidad');

// EventListeners para cambiar imagen
thumbs.addEventListener('click',(e) => {
    if(e.target.tagName === 'IMG') {
        const imagenSrc = e.target.src;

        // Obtenemos la posicion del ultimo despues del "/" 
        const lastIndex = imagenSrc.lastIndexOf('/');

        // Cortamos la cadena de texto para obtener solamente una parte
        const nombreImagen = imagenSrc.substring(lastIndex + 1);

        // Cambiamos la ruta de la imagen del productos
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
});
// EvenListener para cambiar el color
propiedadColor.addEventListener('click',(e) => {
    if(e.target.tagName === 'INPUT') {
        productoImagen.src =`./img/tennis/${e.target.value}.jpg`;
    }
});

// Aumentar la cantidad
btnIncrementarCantidad.addEventListener('click', (e) => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

// Disminuir la cantidad
btnDisminuirCantidad.addEventListener('click', (e) => {
// Validacion de que no baje a numeros negativos
if(parseInt(inputCantidad.value) > 1){
    inputCantidad.value = parseInt(inputCantidad.value) - 1;
}
});
