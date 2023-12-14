const parametroURL = new URLSearchParams(window.location.search);

const listaCarro = JSON.parse(localStorage.getItem("listaCarroKey")) || [];

const crearCard = (juego) => {
    const padreCards = document.querySelector("#padreCards");
    padreCards.innerHTML += `
    <div class="col-lg-6 col-lg-4 mb-4">
        <div class="card h-100">
            <img
                src="${juego.imagenP}"
                class="card-img-top"
                alt="portada de juego"
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
                <button class="linkEliminar" onclick='borrarJuego("${juego.codigo}")'>Eliminar del carrito</button>
            </div>
        </div>
    </div>
    `;
}
const cargaInicial = () => {
    if(listaCarro.length > 0) {
        listaCarro.map((itemJuego) => crearCard(itemJuego));
    } else {
        alert("No hay juegos en tu carrito.");
    }
}
const guardarEnLocalStorage = () => {
    localStorage.setItem("listaCarroKey", JSON.stringify(listaCarro));
};
window.borrarJuego = (codigo) => {
    // Agregar logica de borrar.
    
    // Buscar en el array el codigo de la peli a borrar.
    const posicionJuego = listaCarro.findIndex(
      (itemJuego) => itemJuego.codigo === codigo
    );

    // Para borrar el elemento del array con splice con la posición de la peli
    listaCarro.splice(posicionJuego, 1);

    // Actualizar el localstorage
    guardarEnLocalStorage();

    // borrar fila de la tabla
    const padreCards = document.querySelector("#padreCards");
    padreCards.removeChild(padreCards.children[posicionJuego]);

    Swal.fire({
        icon: "success",
        title: "Juego Borrado de Carrito",
        showConfirmButton: false,
        background: "#343a40",
        color: "#fff",
        timer: 3000,
    });
}