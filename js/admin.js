import Juego from "./classJuego.js";
const formularioAdminJuegos = document.querySelector(
  "#formularioAdministrarJuegos"
);
const titulo = document.querySelector("#titulo");
const precio = document.querySelector("#precio");
const categoria = document.querySelector("#categoria");
const imagenP = document.querySelector("#imagenP");
const imagenL = document.querySelector("#imagenL");
const imagenU = document.querySelector("#imagenU");
const imagenD = document.querySelector("#imagenD");
const imagenT = document.querySelector("#imagenT");
const imagenC = document.querySelector("#imagenC");
const descripcion = document.querySelector("#descripcion");
const requisitos = document.querySelector("#requisitos");
const desarrollador = document.querySelector("#desarrollador");
const modalJuego = new bootstrap.Modal(document.querySelector("#modalJuego"));
const btnAgregar = document.querySelector("#btnAgregar");
const btnCerrar = document.querySelector("#btnCerrar");
const listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey")) || [];
const tablaJuego = document.querySelector("tbody");
let modoEditar = false;
let codigoEditando = null;

const validarTexto = (elemento, minimo, maximo, nombre) => {
  if (elemento.length > maximo) {
    // Aquí voy a hacer algo.
    alert(`El campo '${nombre}' debe tener un máximo de ${maximo} caracteres.`);
    return false;
  }
  if (elemento.length < minimo) {
    // Aquí voy a hacer algo.
    alert(`El campo '${nombre}' debe tener un mínimo de ${minimo} caracteres.`);
    return false;
  } else {
    return true;
  }
};
const validarPrecio = (precio) => {
  const formatoValido = /^\d+(\.\d{1,2})?\s?UD\$$/.test(precio);
  if (precio === "Gratis" || precio === "gratis") {
    return true;
  } else if (!formatoValido) {
    alert(`
      El formato del precio no es válido.
      Debe ser un número seguido de "UD$".
      O bien, si no cuesta nada entonces "Gratis".`);
    return false;
  }
  const numeroPrecio = parseFloat(precio);
  if (isNaN(numeroPrecio) || numeroPrecio == 0) {
    alert("El valor numérico del precio no es válido.");
    return false;
  }
  return true;
};
const validarImagen = (url,nombre) => {
  // Expresión regular para validar una URL
  const formatoUrlValido = /^(https?:\/\/)/i.test(url);

  if (!formatoUrlValido) {
    alert(`
    Campo de "URL de Imagen" NO ACEPTADO


    La URL de "${nombre}" no es válida.
    Debe comenzar con "https://" o "http://".
    `);
    return false;
  } 

  // Expresión regular para validar una URL de imagen
  const formatoImagenValido = /\.(jpeg|jpg|gif|png|bmp|webp|avif)$/i.test(url);

  if (!formatoImagenValido) {
    alert(`
    Campo de "URL de Imagen" NO ACEPTADO


    La URL de "${nombre}" no es válida.
    Debe ser una URL de imagen con una extensión válida.

    Ejemplo: jpeg, jpg, gif, png, bmp, webp, avif.
    `);
    return false;
  }

  return true;
};
const validarCategoria = (categoria) => {
  if (
    categoria === "RPG" ||
    categoria === "FPS" ||
    categoria === "Accion" ||
    categoria === "Estrategia" ||
    categoria === "Carreras" ||
    categoria === "Horror"
  ) {
    return true;
  } else {
    alert("La categoria ingresada no es un categoria valida.");
    return false;
  }
};
const guardarEnLocalStorage = () => {
  localStorage.setItem("listaJuegosKey", JSON.stringify(listaJuegos));
};
const limpiarFormulario = () => {
  formularioAdminJuegos.reset();
};
const refrescarTabla = () => {
  tablaJuego.innerHTML = "";
  cargaInicial();
};
const crearFila = (juego, fila) => {
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
            <button class="btn btn-dark btn-sm botonHover border mb-1 mb-md-0" onclick="verDetalles('${juego.codigo}')"><i class="bi bi-info-square-fill"></i><p class="textoHover">Ver Detalle</p></button>                  
            <button class="btn btn-dark btn-sm botonHover border mb-1 mb-md-0" onclick="editarJuego('${juego.codigo}')"><i class="bi bi-pencil-square"><p class="textoHover">Editar</p></i></button>
            <button class="btn btn-dark btn-sm botonHover border" onclick="borrarJuego('${juego.codigo}')"><i class="bi bi-trash-fill"></i><p class="textoHover">Eliminar</p></button>
        </td>
    </tr>
    `;
};
const crearJuego = (e) => {
  e.preventDefault();
  const validarTitulo = validarTexto(titulo.value, 2, 30, "titulo");
  const validarPre = validarPrecio(precio.value);
  const validarCat = validarCategoria(categoria.value);
  const validarImgP = validarImagen(imagenP.value,"Portada");
  const validarImgL = validarImagen(imagenL.value,"Logo");
  const validarImgU = validarImagen(imagenU.value,"Carrusel 1");
  const validarImgD = validarImagen(imagenD.value,"Carrusel 2");
  const validarImgT = validarImagen(imagenT.value,"Carrusel 3");
  const validarImgC = validarImagen(imagenC.value,"Carrusel 4");
  const validarDesc = validarTexto(descripcion.value, 5, 500, "descripcion");
  const validarReq = validarTexto(requisitos.value, 5, 200, "requisitos");
  const validarDev = validarTexto(desarrollador.value, 2, 30, "desarrollador");
  if (
    validarTitulo &&
    validarPre &&
    validarCat &&
    validarImgP &&
    validarImgL &&
    validarImgU &&
    validarImgD &&
    validarImgT &&
    validarImgC &&
    validarDesc &&
    validarReq &&
    validarDev
  ) {
    if (modoEditar) {
      const juegoEditado = new Juego(
        codigoEditando,
        titulo.value,
        precio.value,
        categoria.value,
        imagenP.value,
        imagenL.value,
        imagenU.value,
        imagenD.value,
        imagenT.value,
        imagenC.value,
        descripcion.value,
        requisitos.value,
        desarrollador.value
      );
      const posicionJuego = listaJuegos.findIndex(
        (juego) => juego.codigo === codigoEditando
      );
      listaJuegos[posicionJuego] = juegoEditado;
      cerrarModalJuego();
    } else {
      const nuevoJuego = new Juego(
        undefined,
        titulo.value,
        precio.value,
        categoria.value,
        imagenP.value,
        imagenL.value,
        imagenU.value,
        imagenD.value,
        imagenT.value,
        imagenC.value,
        descripcion.value,
        requisitos.value,
        desarrollador.value
      );
      listaJuegos.push(nuevoJuego);
    }
    guardarEnLocalStorage();
    limpiarFormulario();
    modoEditar = false;
    codigoEditando = null;
    refrescarTabla();
    Swal.fire({
      icon: "success",
      title: "VideoJuego Agregado con Éxito",
      showConfirmButton: false,
      background: "#343a40",
      color: "#fff",
      timer: 3000,
    });
  }
};
const abrirModalJuego = () => {
  modalJuego.show();
};
const cerrarModalJuego = () => {
  modalJuego.hide();
  limpiarFormulario();
};
const cargaInicial = () => {
  if (listaJuegos.length > 0) {
    listaJuegos.map((itemJuego, posicion) =>
      crearFila(itemJuego, posicion + 1)
    );
  }
};
window.borrarJuego = (codigo) => {
  Swal.fire({
    title: "¿Estas seguro?",
    text: "¡No podras volver atras!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, borrarlo!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Borrado!",
        text: "Tu archivo fue borrado.",
        icon: "success",
      });
      const posicionJuego = listaJuegos.findIndex(
        (juego) => juego.codigo === codigo
      );
      listaJuegos.splice(posicionJuego, 1);
      guardarEnLocalStorage();
      tablaJuego.removeChild(tablaJuego.children[posicionJuego]);
    }
  });
};
window.editarJuego = (codigo) => {
  const juegoAEditar = listaJuegos.find((juego) => juego.codigo === codigo);
  if (juegoAEditar) {
    modoEditar = true;
    codigoEditando = codigo;
    document.querySelector("#titulo").value = juegoAEditar.titulo;
    document.querySelector("#precio").value = juegoAEditar.precio;
    document.querySelector("#categoria").value = juegoAEditar.categoria;
    document.querySelector("#imagenP").value = juegoAEditar.imagenP;
    document.querySelector("#imagenL").value = juegoAEditar.imagenL;
    document.querySelector("#imagenU").value = juegoAEditar.imagenU;
    document.querySelector("#imagenD").value = juegoAEditar.imagenD;
    document.querySelector("#imagenT").value = juegoAEditar.imagenT;
    document.querySelector("#imagenC").value = juegoAEditar.imagenC;
    document.querySelector("#descripcion").value = juegoAEditar.descripcion;
    document.querySelector("#requisitos").value = juegoAEditar.requisitos;
    document.querySelector("#desarrollador").value = juegoAEditar.desarrollador;
    abrirModalJuego();
  }
};
window.verDetalles = (codigo) => {
  window.location.href =
    window.location.origin + "/pages/detail.html?codigo=" + codigo;
};

formularioAdminJuegos.addEventListener("submit", crearJuego);
btnAgregar.addEventListener("click", abrirModalJuego);
btnCerrar.addEventListener("click", cerrarModalJuego);
cargaInicial();
