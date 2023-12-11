export default class Juego {
    #codigo;
    #titulo;
    #descripcion;
    #precio;
    constructor(codigo = uuidv4(), titulo, descripcion, precio) {
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#precio = precio;
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
    get descripcion() {
        return this.#descripcion;
    }
    set descripcion(nuevoDescripcion) {
        this.#descripcion = nuevoDescripcion;
    }
    get precio() {
        return this.#precio;
    }
    set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio;
    }
    // Para que funcione JSON.stringify
    toJSON() {
        return{
            codigo: this.codigo,
            titulo: this.titulo,
            descripcion: this.descripcion,
            precio: this.precio,
        }
    }
}
