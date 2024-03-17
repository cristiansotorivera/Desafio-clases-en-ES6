// Definición de la clase Cliente
export class Cliente {
    // Propiedades privadas para el nombre y el objeto de impuesto
    #nombre
    #impuesto

    // Constructor de la clase Cliente
    constructor(nombre) {
        // Validar que el nombre sea una cadena no vacía
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            throw new Error('El nombre del cliente debe ser una cadena no vacía.');
        }
        // Inicializar las propiedades privadas
        this.#nombre = nombre
        this.#impuesto = null
    }

    // Método getter para obtener el nombre del cliente
    get nombre() {
        return this.#nombre
    }

    // Método setter para modificar el nombre del cliente
    set nombre(nuevoNombre) {
        // Validar que el nuevo nombre sea una cadena no vacía
        if (typeof nuevoNombre !== 'string' || nuevoNombre.trim() === '') {
            throw new Error('El nombre del cliente debe ser una cadena no vacía.');
        }
        // Asignar el nuevo nombre a la propiedad privada
        this.#nombre = nuevoNombre
    }

    // Método para calcular el impuesto del cliente
    calcularImpuesto() {
        // Verificar si el cliente tiene un objeto de impuesto asignado
        if (this.#impuesto) {
            // Calcular el impuesto utilizando el monto bruto anual y las deducciones del objeto de impuesto
            const impuestoCalculado = (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21;
            // Devolver un objeto con el nombre del cliente y el impuesto calculado
            return {
                nombre: this.#nombre,
                impuesto: impuestoCalculado
            }
        } else {
            // Lanzar un error si no hay objeto de impuesto asignado
            throw new Error("No hay impuestos disponibles para calcular.");
        }
    }

    // Método para asignar un objeto de impuesto al cliente
    asignarImpuestoPorCliente(impuesto) {
        // Validar que el objeto de impuesto proporcionado sea válido
        if (impuesto && typeof impuesto === 'object' && typeof impuesto.montoBrutoAnual === 'number' && typeof impuesto.deducciones === 'number') {
            // Asignar el objeto de impuesto al cliente
            this.#impuesto = impuesto;
        } else {
            // Lanzar un error si el objeto de impuesto proporcionado es inválido
            throw new Error('El objeto de impuesto proporcionado es inválido.');
        }
    }
}
