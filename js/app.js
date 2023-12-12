const listaJuegos = JSON.parse(localStorage.getItem("listaJuegosKey"));

if (listaJuegos) {
  listaJuegos.forEach(function (juego) {
    dibujarJuego(juego);
  });
}
function dibujarJuego(juego) {
  const nodoPadre = document.getElementById(juego.categoria);
  nodoPadre.innerHTML += `
  <a href="./pages/detail.html?codigo=${juego.codigo}" class="link-underline link-underline-opacity-0">
  <div class="myCard card mb-5 myGridCard" style="max-width: 540px;">
      <div class="row g-0">
          <div class="col-md-4">
              <img src="./img/slenderPoster.avif" class="img-fluid rounded-start w-75"
                  alt="Poster">
          </div>
          <div class="col-md-8 align-self-center">
              <div class="card-body">
                  <h5 class="card-title">${juego.titulo}</h5>
                  <p class="card-text">${juego.precio}</p>
              </div>
          </div>
      </div>
  </div>
</a>`;
}
function borrarPadresVacios() {
  const padres = document.querySelectorAll(".col-lg-3");
  padres.forEach(function (padre) {
    if (padre.children.length <= 1) {
      padre.style.display = "none";
    }
  });
}
borrarPadresVacios()