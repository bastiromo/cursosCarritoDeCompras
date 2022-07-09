// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let = articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  // Cuando agregar un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

// Funciones
function agregarCurso(e) {
  e.preventDefault(); // Prevenimos que la pagina se vaya para arriba
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement; // Selecciona el card del curso
    leerDatosCurso(cursoSeleccionado);
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso

function leerDatosCurso(curso) {


  //crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Agrega elementos al arreglo de carrito
  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log(articulosCarrito);
  carritoHTML();

}

// muestra el carrito en el html

function carritoHTML(){
    // limpiar HTML
    limpiarHTML();


    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${curso.titulo}</td>
        `;

        // Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);

    })
}
// elimina los cursos del tbody

function limpiarHTML(){
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}