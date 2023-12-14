export default class Juego {
  #codigo;
  #titulo;
  #precio;
  #categoria;
  #imagenP;
  #imagenL;
  #imagenU;
  #imagenD;
  #imagenT;
  #imagenC;
  #descripcion;
  #requisitos;
  #desarrollador;
  constructor(
    codigo = uuidv4(),
    titulo,
    precio,
    categoria,
    imagenP,
    imagenL,
    imagenU,
    imagenD,
    imagenT,
    imagenC,
    descripcion,
    requisitos,
    desarrollador
  ) {
    this.#codigo = codigo;
    this.#titulo = titulo;
    this.#precio = precio;
    this.#categoria = categoria;
    this.#imagenP = imagenP;
    this.#imagenL = imagenL;
    this.#imagenU = imagenU;
    this.#imagenD = imagenD;
    this.#imagenT = imagenT;
    this.#imagenC = imagenC;
    this.#descripcion = descripcion;
    this.#requisitos = requisitos;
    this.#desarrollador = desarrollador;
  }
  get codigo() {
    return this.#codigo;
  }
  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }
  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevoTitulo) {
    this.#codigo = nuevoTitulo;
  }
  get precio() {
    return this.#precio;
  }
  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }
  get categoria() {
    return this.#categoria;
  }
  set categoria(nuevoCategoria) {
    this.#categoria = nuevoCategoria;
  }
  get imagenP() {
    return this.#imagenP;
  }
  set imagenP(nuevoImagenP) {
    this.#imagenP = nuevoImagenP;
  }
  get imagenL() {
    return this.#imagenL;
  }
  set imagenL(nuevoImagenL) {
    this.#imagenL = nuevoImagenL;
  }
  get imagenU() {
    return this.#imagenU;
  }
  set imagenU(nuevoImagenU) {
    this.#imagenU = nuevoImagenU;
  }
  get imagenD() {
    return this.#imagenD;
  }
  set imagenD(nuevoImagenD) {
    this.#imagenD = nuevoImagenD;
  }
  get imagenT() {
    return this.#imagenT;
  }
  set imagenT(nuevoImagenT) {
    this.#imagenT = nuevoImagenT;
  }
  get imagenC() {
    return this.#imagenC;
  }
  set imagenC(nuevoImagenC) {
    this.#imagenC = nuevoImagenC;
  }
  get descripcion() {
    return this.#descripcion;
  }
  set descripcion(nuevoDescripcion) {
    this.#descripcion = nuevoDescripcion;
  }
  get requisitos() {
    return this.#requisitos;
  }
  set requisitos(nuevoRequisitos) {
    this.#requisitos = nuevoRequisitos;
  }
  get desarrollador() {
    return this.#desarrollador;
  }
  set desarrollador(nuevoDesarrollador) {
    this.#desarrollador = nuevoDesarrollador;
  }
  toJSON() {
    return {
      codigo: this.codigo,
      titulo: this.titulo,
      precio: this.precio,
      categoria: this.categoria,
      imagenP: this.imagenP,
      imagenL: this.imagenL,
      imagenU: this.imagenU,
      imagenD: this.imagenD,
      imagenT: this.imagenT,
      imagenC: this.imagenC,
      descripcion: this.descripcion,
      requisitos: this.requisitos,
      desarrollador: this.desarrollador,
    };
  }
}
