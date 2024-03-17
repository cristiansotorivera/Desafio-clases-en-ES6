
import { Impuesto } from "./impuestos.js"
import { Cliente } from "./cliente.js"

const cliente1 = new Cliente("Cristian Soto");
const impuestoCliente1 = new Impuesto(33335, 4677);

const cliente2 = new Cliente("James Hetfield")
const impuestoCliente2 = new Impuesto(445500, 7000);



cliente1.asignarImpuestoPorCliente(impuestoCliente1);
cliente2.asignarImpuestoPorCliente(impuestoCliente2);


console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());
