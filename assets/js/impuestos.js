/* 

export class Impuesto {
    #montoBrutoAnual
    #deducciones

    constructor(montoBrutoAnual, deducciones) {
        this.#montoBrutoAnual = montoBrutoAnual
        this.#deducciones = deducciones
    }

    get montoBrutoAnual() {
        return this.#montoBrutoAnual;
    }
    set montoBrutoAnual(nuevoMontoBrutoAnual) {
        this.#montoBrutoAnual = nuevoMontoBrutoAnual;
    }

    get deducciones() {
        return this.#deducciones;
    }
    set deducciones(nuevasDeducciones) {
        this.#deducciones = nuevasDeducciones;
    }
}

 */





export class Impuesto {
    #montoBrutoAnual
    #deducciones

    constructor(montoBrutoAnual, deducciones) {
        if (typeof montoBrutoAnual !== 'number' || isNaN(montoBrutoAnual) || typeof deducciones !== 'number' || isNaN(deducciones)) {
            throw new Error('Los montos bruto anual y de deducciones deben ser números válidos.');
        }
        this.#montoBrutoAnual = montoBrutoAnual
        this.#deducciones = deducciones
    }

    get montoBrutoAnual() {
        return this.#montoBrutoAnual;
    }
    set montoBrutoAnual(nuevoMontoBrutoAnual) {
        if (typeof nuevoMontoBrutoAnual !== 'number' || isNaN(nuevoMontoBrutoAnual)) {
            throw new Error('El monto bruto anual debe ser un número válido.');
        }
        this.#montoBrutoAnual = nuevoMontoBrutoAnual;
    }

    get deducciones() {
        return this.#deducciones;
    }
    set deducciones(nuevasDeducciones) {
        if (typeof nuevasDeducciones !== 'number' || isNaN(nuevasDeducciones)) {
            throw new Error('Las deducciones deben ser un número válido.');
        }
        this.#deducciones = nuevasDeducciones;
    }
}
