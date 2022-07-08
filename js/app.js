// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregar un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);


}

// Funciones
function agregarCurso(e) {
    e.preventDefault() // Prevenimos que la pagina se vaya para arriba
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;  // Selecciona el card del curso
        leerDatosCurso(cursoSeleccionado);
    }
}



// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso

function leerDatosCurso(curso) {
    console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent
    }


    console.log(infoCurso);
}


console.log('ESTE ES UN NUEVO MENSAJEE');
