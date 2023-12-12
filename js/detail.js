const url = new URLSearchParams(window.location.search),
  codigoJuego = url.get("codigo"),
  listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey")),
  juego = listaJuegos.find((juego) => juego.codigo === codigoJuego);
console.log(juego);

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