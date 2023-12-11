export default class Juego {
    #codigo;
    #titulo;
    #precio; 
    #categoria;
    #imagen;
    #descripcion;
    #requisitos;
    #desarrollador;
    constructor(codigo = uuidv4(), titulo, precio, categoria, imagen, descripcion, requisitos, desarrollador) {
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#precio = precio;
        this.#categoria = categoria;
        this.#imagen = imagen;
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
    get imagen() {
        return this.#imagen;
    }
    set imagen(nuevoImagen) {
        this.#imagen = nuevoImagen;
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
    // Para que funcione JSON.stringify
    toJSON() {
        return{
            codigo: this.codigo,
            titulo: this.titulo,
            precio: this.precio,
            categoria: this.categoria,
            imagen: this.imagen,
            descripcion: this.descripcion,
            requisitos: this.requisitos,
            desarrollador: this.desarrollador,
        }
    }
}
