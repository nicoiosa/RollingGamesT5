const url = new URLSearchParams(window.location.search),
  codigoJuego = url.get("codigo"),
  listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey")),
  juego = listaJuegos.find((juego) => juego.codigo === codigoJuego);
const titulo = document.getElementsByTagName("h2")[0],
  precio = document.getElementsByClassName("margen_precio")[0],
  categoria = document.getElementsByTagName("p")[1],
  descripcion = document.getElementsByClassName("letra")[0],
  requisitos = document.getElementsByTagName("p")[3],
  desarrollador = document.getElementsByClassName("nombre_desarrollador")[0],
  imagenL = document.getElementById("logoJuego"),
  imagenUBtn = document.getElementsByClassName("tamaño_imagen_carrousel")[0],
  imagenDBtn = document.getElementsByClassName("tamaño_imagen_carrousel")[1],
  imagenTBtn = document.getElementsByClassName("tamaño_imagen_carrousel")[2],
  imagenCBtn = document.getElementsByClassName("tamaño_imagen_carrousel")[3],
  imagenUCar = document.getElementsByClassName("card-img")[0],
  imagenDCar = document.getElementsByClassName("card-img")[1],
  imagenTCar = document.getElementsByClassName("card-img")[2],
  imagenCCar = document.getElementsByClassName("card-img")[3];

titulo.innerText = juego.titulo;
precio.innerText = juego.precio;
categoria.innerText = juego.categoria;
descripcion.innerText = juego.descripcion;
requisitos.innerText = juego.requisitos;
desarrollador.innerText = juego.desarrollador;
imagenL.src = juego.imagenL;
imagenUBtn.src = juego.imagenU;
imagenDBtn.src = juego.imagenD;
imagenTBtn.src = juego.imagenT;
imagenCBtn.src = juego.imagenC;
imagenUCar.src = juego.imagenU;
imagenDCar.src = juego.imagenD;
imagenTCar.src = juego.imagenT;
imagenCCar.src = juego.imagenC;

//logica para agregar a lista de deseados.

// Variables

const btnAgregarLista = document.querySelector("#btnAgregarLista");
const listaDeseados = JSON.parse(localStorage.getItem("listaDeseadosKey")) || [];
const btnAgregarCarro = document.querySelector("#btnAgregarCarro");
const listaCarro = JSON.parse(localStorage.getItem("listaCarroKey")) || [];

// Funciones

const guardarEnLocalStorageDeseados = () => {
  // Guardar y Actualizar en este caso es lo mismo
  localStorage.setItem("listaDeseadosKey", JSON.stringify(listaDeseados));
};
const guardarEnLocalStorageCarro = () => {
  // Guardar y Actualizar en este caso es lo mismo
  localStorage.setItem("listaCarroKey", JSON.stringify(listaCarro));
};
const crearDeseado = () => {
  const agregado = ` ❤️ Agregado`;

  if(btnAgregarLista.innerHTML != agregado) {
    // 1: tomar info. (¿Cuál info?)
    console.log(juego);
  
    // 2: guardar objeto en lista deseados.
    listaDeseados.push(juego); 
  
    // 3: guardar lista deseados en localStorage
    guardarEnLocalStorageDeseados();
  
    // 4: deshabilitar el botón.
    btnAgregarLista.innerHTML = ` ❤️ Agregado`
  }
}
const crearItemCarro = () => {
  const agregado = ` 🛒 Agregado`;

  if(btnAgregarCarro.innerHTML != agregado) {
    // 1: tomar info. (¿Cuál info?)
    console.log(juego);
  
    // 2: guardar objeto en lista carro.
    listaCarro.push(juego);
  
    // 3: guardar lista deseados en localStorage
    guardarEnLocalStorageCarro();
  
    // 4: deshabilitar el botón.
    btnAgregarCarro.innerHTML = ` 🛒 Agregado`
  }
}

// Resto de la lógica

btnAgregarLista.addEventListener("click",crearDeseado);
btnAgregarCarro.addEventListener("click",crearItemCarro);