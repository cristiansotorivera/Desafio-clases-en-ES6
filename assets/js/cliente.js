/* 

export class Cliente {
    #nombre
    #impuesto

    constructor(nombre) {
        this.#nombre = nombre
        this.#impuesto = null
    }

    get nombre() {
        return this.#nombre
    }
    set nombre(nuevoNombre) {
        return this.#nombre = nuevoNombre
    }

    calcularImpuesto() {
        if (this.#impuesto) {
            const impuestoCalculado = (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21;
            return {
                nombre: this.#nombre,
                impuesto: impuestoCalculado
            }
        } else {
            console.log("No hay impuestos disponible.");
            return 0;
        }
    }

    asignarImpuestoPorCliente(impuesto) {
        this.#impuesto = impuesto;
    }
}
 */





export class Cliente {
    #nombre
    #impuesto

    constructor(nombre) {
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            throw new Error('El nombre del cliente debe ser una cadena no vacía.');
        }
        this.#nombre = nombre
        this.#impuesto = null
    }

    get nombre() {
        return this.#nombre
    }
    set nombre(nuevoNombre) {
        if (typeof nuevoNombre !== 'string' || nuevoNombre.trim() === '') {
            throw new Error('El nombre del cliente debe ser una cadena no vacía.');
        }
        this.#nombre = nuevoNombre
    }

    calcularImpuesto() {
        if (this.#impuesto) {
            const impuestoCalculado = (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21;
            return {
                nombre: this.#nombre,
                impuesto: impuestoCalculado
            }
        } else {
            throw new Error("No hay impuestos disponibles para calcular.");
        }
    }

    asignarImpuestoPorCliente(impuesto) {
        if (impuesto && typeof impuesto === 'object' && typeof impuesto.montoBrutoAnual === 'number' && typeof impuesto.deducciones === 'number') {
            this.#impuesto = impuesto;
        } else {
            throw new Error('El objeto de impuesto proporcionado es inválido.');
        }
    }
}
