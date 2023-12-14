class Usuario {
  #nombre;
  #email;
  #contraseña;
  constructor(nombre, email, contraseña) {
    this.#nombre = nombre;
    this.#email = email;
    this.#contraseña = contraseña;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get email() {
    return this.#email;
  }
  set email(nuevoEmail) {
    this.#email = nuevoEmail;
  }
  get contraseña() {
    return this.#contraseña;
  }
  set contraseña(nuevoContraseña) {
    this.#contraseña = nuevoContraseña;
  }
}

const registerForm = document.getElementsByTagName("form")[0],
  nombre = document.getElementsByTagName("input")[0],
  email = document.getElementsByTagName("input")[1],
  contraseña = document.getElementsByTagName("input")[2],
  listaUsuario = JSON.parse(localStorage.getItem("listaUsuarioKey")) || [];

const validarNombre = () => {
  if (nombre.value.length > 40) {
    alert(`El campo de nombre debe tener un máximo de 40 caracteres.`);
    return false;
  }
  if (nombre.value.length < 4) {
    alert(`El campo de nombre debe tener un mínimo de 4 caracteres.`);
    return false;
  }
  return true;
};
const validarEmail = () => {
  if (email.value.length > 40) {
    alert(`El campo de email debe tener un máximo de 60 caracteres.`);
    return false;
  }
  if (email.value.length < 4) {
    alert(`El campo de email debe tener un mínimo de 5 caracteres.`);
    return false;
  }
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formatoEmail.test(email.value)) {
    alert(`El formato de email es incorrecto.`);
    return false;
  }
  return true;
};
const validarContraseña = () => {
  if (contraseña.value.length > 40) {
    alert(`El campo de contraseña debe tener un máximo de 24 caracteres.`);
    return false;
  }
  if (contraseña.value.length < 4) {
    alert(`El campo de contraseña debe tener un mínimo de 8 caracteres.`);
    return false;
  }
  if (!/[A-Z]/.test(contraseña.value)) {
    alert(`El campo de contraseña debe tener al menos una mayuscula.`);
    return false;
  }
  if (!/[a-z]/.test(contraseña.value)) {
    alert(`El campo de contraseña debe tener al menos una minuscula.`);
    return false;
  }
  if (!/\d/.test(contraseña.value)) {
    alert(`El campo de contraseña debe tener al menos un numero.`);
    return false;
  }
  return true;
};
const guardarEnLocalStorage = () => {
  localStorage.setItem("listaUsuarioKey", JSON.stringify(listaUsuario));
};
const limpiarFormulario = () => {
  registerForm.reset();
};
function irAlIndex() {
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 3000);
}
function crearUsuario(e) {
  e.preventDefault();
  if (validarNombre() && validarEmail() && validarContraseña()) {
    const nuevoUsuario = new Usuario(
      nombre.value,
      email.value,
      contraseña.value
    );
    listaUsuario.push(nuevoUsuario);
    guardarEnLocalStorage();
    Swal.fire({
      icon: "success",
      title: "Usuario Creado con Éxito",
      showConfirmButton: false,
      background: "#343a40",
      color: "#fff",
      timer: 3000,
    });
    irAlIndex();
  }
}

registerForm.addEventListener("submit", crearUsuario);
