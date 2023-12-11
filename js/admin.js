import Juego from "./classJuego.js";

// Variables
const fornai = new Juego(1, "Fortnite", "Juego de armas.", "Gratis");
const formularioAdminJuegos = document.querySelector(
  "#formularioAdministrarJuegos"
);
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const modalJuego = new bootstrap.Modal(document.querySelector("#modalJuego"));
const btnAgregar = document.querySelector("#btnAgregar");
const listaJuegos = JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];

// Funciones
const guardarEnLocalStorage = () => {
  localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
};
const limpiarFormulario = () => {
  formularioAdminJuegos.reset();
};
const crearFila = (juego, fila) => {
  const tablaJuego = document.querySelector("tbody");
  tablaJuego.innerHTML += `
    <tr class="align-middle border-bottom border-secondary border-2">
        <th scope="row"><span class="colorTexto">${fila}</span></th>
        <td class="h4 text-start ps-4 ps-md-5">
            <span class="colorTexto">${juego.titulo}</span>
        </td>
        <td class="w-25 py-3">
            <span class="colorTexto">${juego.descripcion}</span>
        </td>
        <td class="tamañoPrecio text-md-end">
            <span class="colorTexto">${juego.precio}</span>
        </td>
        <td class="text-end pe-5 pe-md-3">
            <button class="btn btn-dark btn-sm botonHover border mb-1 mb-md-0"><i class="bi bi-info-square-fill"></i><p class="textoHover">Ver Detalle</p></button>                  
            <button class="btn btn-dark btn-sm botonHover border mb-1 mb-md-0"><i class="bi bi-pencil-square"><p class="textoHover">Editar</p></i></button>
            <button class="btn btn-dark btn-sm botonHover border"><i class="bi bi-trash-fill"></i><p class="textoHover">Eliminar</p></button>
        </td>
    </tr>
    `;
};
const crearJuego = (e) => {
  e.preventDefault();
  // 1: Tomar info del form. "OK"
  // 2: Validar entrada. (crear funcion validar)
  const validarTitulo = true;
  const validarDesc = true;
  const validarPrecio = true;
  // 3: Crear objeto pelicula.
  if (validarTitulo && validarDesc && validarPrecio) {
    const nuevoJuego = new Juego(
      undefined,
      titulo.value,
      descripcion.value,
      precio.value
    );
    // 4: Guardar lista de juegos en localstorage.
    listaJuegos.push(nuevoJuego);
    guardarEnLocalStorage();
    limpiarFormulario();
    // 5: Dibujar el juego nuevo en el html.
    crearFila(nuevoJuego, listaJuegos.length);
  }
};
const abrirModalJuego = () => {
  modalJuego.show();
};
const cargaInicial = () => {
  if (listaJuegos.length > 0) {
    // Dibujar filas.
    listaJuegos.map((itemJuego, posicion) =>
      crearFila(itemJuego, posicion + 1)
    );
  } else {
    // Tarea: cambiar para más vista.
    alert("No hay juegos para mostrar.");
  }
};

// Más lógica
formularioAdminJuegos.addEventListener("submit",crearJuego);
btnAgregar.addEventListener("click",abrirModalJuego);

cargaInicial();