"use strict";

var _cliente = _interopRequireDefault(require("./cliente.mjs"));
var _impuestos = _interopRequireDefault(require("./impuestos.mjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Desafío - Clases en ES6

// Importando las 2 clases necesarias

// Creando una instancia de Impuestos 
var impuestos_cliente1 = new _impuestos["default"](750000, 150000);

// Probando métodos Setter de la clase Impuestos
impuestos_cliente1.monto_bruto_anual = 850000;
impuestos_cliente1.deducciones = 200000;

// Creando una instancia de la clase Cliente
var cliente1 = new _cliente["default"]('Dave Grohl', impuestos_cliente1);

// Probando método Setter de la clase Cliente
cliente1.nombre = 'Kurt Cobain';

// Imprimiendo información en consola a través de métodos Getter
console.log("Nombre Cliente: ".concat(cliente1.nombre));
console.log("Monto bruto anual: ".concat(impuestos_cliente1.monto_bruto_anual));
console.log("Deducciones: ".concat(impuestos_cliente1.deducciones));

// Imprimiendo en consola el impuesto calculado con método 
// calcularImpuesto() de la clase Cliente.
console.log("Impuesto: ".concat(cliente1.calcularImpuesto(impuestos_cliente1.monto_bruto_anual, impuestos_cliente1.deducciones)));