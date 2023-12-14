const parametroURL = new URLSearchParams(window.location.search);

const listaJuegos = JSON.parse(localStorage.getItem("listaDeseadosKey")) || [];

const listaCarro = JSON.parse(localStorage.getItem("listaCarroKey")) || [];

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
                    <div class="text-start col-6">
                      <h5 class="card-title">${juego.titulo}</h5>
                    </div>
                    <div class="text-end col-6 text-secondary">
                      <h5><b>${juego.precio}</b></h5>
                    </div>
                </div>
            </div>
            <div class="text-center card-footer bg-dark">
                <button class="linkEliminar me-1" onclick='borrarJuego("${juego.codigo}")'>Eliminar</button>
                <button href="#" class="btn btnCuadrado" onclick='crearItemCarro("${juego.codigo}")' id="btnCarro">Agregar al Carrito</button>
            </div>
        </div>
    </div>
    `;
};
const cargaInicial = () => {
  if (listaJuegos.length > 0) {
    listaJuegos.map((itemJuego) => crearCard(itemJuego));
  } 
};
const guardarEnLocalStorage = () => {
  // Guardar y Actualizar en este caso es lo mismo
  localStorage.setItem("listaDeseadosKey", JSON.stringify(listaJuegos));
};
const guardarEnLocalStorageCarro = () => {
  // Guardar y Actualizar en este caso es lo mismo
  localStorage.setItem("listaCarroKey", JSON.stringify(listaCarro));
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
window.crearItemCarro = (codigo) => {
    // 1: tomar info. (¿Cuál info?)
    const posicionJuego = listaJuegos.findIndex(
        (itemJuego) => itemJuego.codigo === codigo
    );
    
    // 2: guardar objeto en lista carro.
    listaCarro.push(listaJuegos[posicionJuego]);

    // 3: guardar lista deseados en localStorage
    guardarEnLocalStorageCarro();

    Swal.fire({
        icon: "success",
        title: "VideoJuego Agregado al Carrito",
        showConfirmButton: false,
        background: "#343a40",
        color: "#fff",
        timer: 3000,
      });
}

cargaInicial();
