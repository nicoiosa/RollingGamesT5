const loginForm = document.getElementById("loginForm"),
  btnCloseLogin = document.getElementById("btnCloseLogin"),
  btnOpenLogin = document.getElementById("btnOpenLogin"),
  loginModal = new bootstrap.Modal(document.querySelector("#loginModal")),
  liLogOut = document.getElementById("liLogOut"),
  liLogIn = document.getElementById("liLogIn"),
  liAdmin = document.getElementById("liAdmin"),
  btnLogOut = document.getElementById("btnLogOut");
let paginaActual = window.location.pathname;

const baseDatosUsuario = {
  "nicoiosa@admin.com": "maxverstappen",
};
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
function login(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail1").value;
  const contraseña = document.getElementById("loginPassword").value;
  if (baseDatosUsuario.hasOwnProperty(email)) {
    if (contraseña === baseDatosUsuario[email]) {
      alert("¡Inicio de sesion exitoso!");
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
  if (
    paginaActual === "/pages/detail.html" ||
    paginaActual === "/pages/aboutUs.html"
  ) {
    location.reload();
  } else {
    location.href = "/index.html";
  }
}
function actualizarEstado() {
  liLogIn.className = "me-4 margen_icono d-none";
  liLogOut.className = "me-4 margen_icono";
  liAdmin.className = "me-4 margen_icono";
}

loginForm.addEventListener("submit", login);
btnOpenLogin.addEventListener("click", abrirLogin);
btnCloseLogin.addEventListener("click", cerrarLogin);
btnLogOut.addEventListener("click", logOut);