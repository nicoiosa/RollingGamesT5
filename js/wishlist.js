const parametroURL = new URLSearchParams(window.location.search);

const listaJuegos = JSON.parse(localStorage.getItem("listaDeseadosKey"));

const crearCard = (juego) => {
  const padreCard = document.querySelector("#padreCard");
  padreCard.innerHTML += `
    <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
            <img
                src="${juego.imagenP}"
                class="card-img-top"
                alt="imagen portada"
            />
            <div class="card-body bg-dark text-light text-center">
                <div class="row">
                    <div class="text-end col-6">
                      <h5 class="card-title">${juego.titulo}</h5>
                    </div>
                    <div class="text-end col-6 text-secondary">
                      <h5><b>${juego.precio}</b></h5>
                    </div>
                </div>
            </div>
            <div class="text-center card-footer bg-dark">
                <button class="linkEliminar me-1" onclick='borrarJuego("${juego.codigo}")'>Eliminar</button>
                <a href="#" class="btn btnCuadrado"
                >Agregar al Carrito</a>
            </div>
        </div>
    </div>
    `;
};
const cargaInicial = () => {
  if (listaJuegos.length > 0) {
    listaJuegos.map((itemJuego) => crearCard(itemJuego));
  } else {
    alert("No hay juegos en la lista de deseos.");
  }
};
const guardarEnLocalStorage = () => {
  // Guardar y Actualizar en este caso es lo mismo
  localStorage.setItem("listaDeseadosKey", JSON.stringify(listaJuegos));
};
window.borrarJuego = (codigo) => {
  // Agregar logica de borrar.

  // Buscar en el array el codigo de la peli a borrar.
  const posicionJuego = listaJuegos.findIndex(
    (itemJuego) => itemJuego.codigo === codigo
  );

  // Para borrar el elemento del array con splice con la posición de la peli
  listaJuegos.splice(posicionJuego, 1);

  // Actualizar el localstorage
  guardarEnLocalStorage();

  // borrar fila de la tabla
  const padreCard = document.querySelector("#padreCard");
  padreCard.removeChild(padreCard.children[posicionJuego]);

  Swal.fire({
    icon: "success",
    title: "VideoJuego Borrado con Éxito",
    showConfirmButton: false,
    background: "#343a40",
    color: "#fff",
    timer: 3000,
  });
};

cargaInicial();
