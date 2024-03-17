// Importar las clases Cliente e Impuesto desde sus respectivos archivos
import { Impuesto } from "./impuestos.js"
import { Cliente } from "./cliente.js"

// Crear una instancia de Cliente para "Cristian Soto" y otro para "James Hetfield"
const cliente1 = new Cliente("Cristian Soto");
const cliente2 = new Cliente("James Hetfield");

// Crear instancias de Impuesto correspondientes para cada cliente
const impuestoCliente1 = new Impuesto(33335, 4677);
const impuestoCliente2 = new Impuesto(445500, 7000);

// Asignar los objetos de impuesto a cada cliente utilizando el método asignarImpuestoPorCliente()
cliente1.asignarImpuestoPorCliente(impuestoCliente1);
cliente2.asignarImpuestoPorCliente(impuestoCliente2);

// Calcular el impuesto para cada cliente utilizando el método calcularImpuesto()
const impuestoCliente1Calculado = cliente1.calcularImpuesto();
const impuestoCliente2Calculado = cliente2.calcularImpuesto();

// Mostrar el resultado en la consola
console.log(impuestoCliente1Calculado);
console.log(impuestoCliente2Calculado);
