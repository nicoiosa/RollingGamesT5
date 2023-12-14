const loginForm = document.getElementById("loginForm"),
  btnCloseLogin = document.getElementById("btnCloseLogin"),
  btnOpenLogin = document.getElementById("btnOpenLogin"),
  loginModal = new bootstrap.Modal(document.querySelector("#loginModal")),
  liLogOut = document.getElementById("liLogOut"),
  liLogIn = document.getElementById("liLogIn"),
  liAdmin = document.getElementById("liAdmin"),
  btnLogOut = document.getElementById("btnLogOut");
let paginaActual = window.location.pathname,
  estadoActualAdmin =
    JSON.parse(sessionStorage.getItem("estadoActualAdminKey")) || false,
  estadoActualInvitado =
    JSON.parse(sessionStorage.getItem("estadoActualInvitadoKey")) || false;

const limpiarLogin = () => {
  loginForm.reset();
};
const abrirLogin = () => {
  loginModal.show();
};
const cerrarLogin = () => {
  loginModal.hide();
  limpiarLogin();
};

const baseDatosUsuario = {
  admin: {
    email: "nicoiosa@admin.com",
    contraseña: "maxverstappen",
  },
};
listaUsuario = JSON.parse(localStorage.getItem("listaUsuarioKey")) || [];
function login(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail1").value;
  const contraseña = document.getElementById("loginPassword").value;
  if (email === baseDatosUsuario.admin.email) {
    if (contraseña === baseDatosUsuario.admin.contraseña) {
      alert("¡Inicio de sesion exitoso!");
      estadoActualAdmin = true;
      guardarEnSessionStorage();
      cerrarLogin();
      actualizarEstado();
      F;
    } else {
      alert("Contraseña incorrecta. Pruebe de nuevo.");
    }
  } else if (listaUsuario.every((usuario) => usuario.email === email)) {
    const usuario = listaUsuario[email];
    if (usuario.contraseña === contraseña) {
      alert("¡Inicio de sesion exitoso!");
      estadoActualInvitado = true;
      guardarEnSessionStorage();
      cerrarLogin();
      actualizarEstado();
    } else {
      alert("Contraseña incorrecta. Pruebe de nuevo.");
    }
  } else {
    alert("Usuario no encontrado. Pruebe de nuevo.");
  }
}
function logOut() {
  alert;
  ("¡Cierre de sesion exitoso!");
  estadoActualAdmin = false;
  guardarEnSessionStorage();
  if (
    paginaActual == "/pages/detail.html" ||
    paginaActual === "/pages/aboutUs.html"
  ) {
    location.reload();
  } else {
    location.href = "/index.html";
  }
}
function actualizarEstado() {
  if (estadoActualAdmin) {
    liLogIn.className = "me-4 margen_icono d-none";
    liLogOut.className = "me-4 margen_icono";
    liAdmin.className = "me-4 margen_icono";
  } else if (estadoActualInvitado) {
    liLogIn.className = "me-4 margen_icono d-none";
    liLogOut.className = "me-4 margen_icono";
    liAdmin.className = "me-4 margen_icono d-none";
  } else {
    liLogIn.className = "me-4 margen_icono";
    liLogOut.className = "me-4 margen_icono d-none";
    liAdmin.className = "me-4 margen_icono d-none";
  }
}
function guardarEnSessionStorage() {
  sessionStorage.setItem(
    "estadoActualAdminKey",
    JSON.stringify(estadoActualAdmin)
  );
}

loginForm.addEventListener("submit", login);
btnOpenLogin.addEventListener("click", abrirLogin);
btnCloseLogin.addEventListener("click", cerrarLogin);
btnLogOut.addEventListener("click", logOut);
actualizarEstado();
