const busquedaInput = document.getElementById("busquedaInput"),
  busquedaResultado = document.getElementById("busquedaResultado"),
  busquedaInput2 = document.getElementById("busquedaInput2"),
  busquedaResultado2 = document.getElementById("busquedaResultado2");

function mostrarResultados(resultados, resultadoContenedor) {
  resultadoContenedor.innerHTML = "";
  if (resultados.length > 0) {
    resultados.forEach((juego) => {
      const listaItems = document.createElement("li");
      listaItems.className = "rounded-4";
      if (paginaActual == "/pages/detail.html") {
        listaItems.innerHTML = `<a class="nav-link" href="./detail.html?codigo=${juego.codigo}" >${juego.titulo}</a>`;
      } else {
        listaItems.innerHTML = `<a class="nav-link" href="./pages/detail.html?codigo=${juego.codigo}" >${juego.titulo}</a>`;
      }
      resultadoContenedor.appendChild(listaItems);
    });
    resultadoContenedor.style.display = "block";
  } else {
    resultadoContenedor.style.display = "none";
  }
}
function buscar(input, resultado) {
  const consulta = input.value.toLowerCase();
  if (consulta === "") {
    resultado.style.display = "none";
  } else {
    const datosFiltrados = listaJuegos.filter((juego) =>
      juego.titulo.toLowerCase().includes(consulta)
    );
    mostrarResultados(datosFiltrados, resultado);
  }
}
document.addEventListener("click", function (e) {
  if (!busquedaResultado.contains(e.target)) {
    busquedaResultado.style.display = "none";
  }
  if (!busquedaResultado2.contains(e.target)) {
    busquedaResultado2.style.display = "none";
  }
  if (e.target.tagName.toLowerCase() === "a") {
    busquedaInput.value = "";
    busquedaInput2.value = "";
  }
});

busquedaInput.addEventListener("input", function () {
  buscar(busquedaInput, busquedaResultado);
});
busquedaInput2.addEventListener("input", function () {
  buscar(busquedaInput2, busquedaResultado2);
});