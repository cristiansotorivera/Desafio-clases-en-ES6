// Definición de la clase Impuesto
export class Impuesto {
    // Propiedades privadas para el monto bruto anual y las deducciones
    #montoBrutoAnual
    #deducciones

    // Constructor de la clase Impuesto
    constructor(montoBrutoAnual, deducciones) {
        // Validar que los parámetros sean números válidos
        if (typeof montoBrutoAnual !== 'number' || isNaN(montoBrutoAnual) || typeof deducciones !== 'number' || isNaN(deducciones)) {
            throw new Error('Los montos bruto anual y de deducciones deben ser números válidos.');
        }
        // Inicializar las propiedades privadas
        this.#montoBrutoAnual = montoBrutoAnual
        this.#deducciones = deducciones
    }

    // Método getter para obtener el monto bruto anual
    get montoBrutoAnual() {
        return this.#montoBrutoAnual;
    }

    // Método setter para modificar el monto bruto anual
    set montoBrutoAnual(nuevoMontoBrutoAnual) {
        // Validar que el nuevo valor sea un número válido
        if (typeof nuevoMontoBrutoAnual !== 'number' || isNaN(nuevoMontoBrutoAnual)) {
            throw new Error('El monto bruto anual debe ser un número válido.');
        }
        // Asignar el nuevo valor a la propiedad privada
        this.#montoBrutoAnual = nuevoMontoBrutoAnual;
    }

    // Método getter para obtener las deducciones
    get deducciones() {
        return this.#deducciones;
    }

    // Método setter para modificar las deducciones
    set deducciones(nuevasDeducciones) {
        // Validar que el nuevo valor sea un número válido
        if (typeof nuevasDeducciones !== 'number' || isNaN(nuevasDeducciones)) {
            throw new Error('Las deducciones deben ser un número válido.');
        }
        // Asignar el nuevo valor a la propiedad privada
        this.#deducciones = nuevasDeducciones;
    }
}
