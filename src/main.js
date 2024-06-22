import Cliente from "./cliente.js";
import Impuesto from "./impuesto.js";

var impuesto1 = new Impuesto(100000, 2000);
var impuesto2 = new Impuesto(400000, 150000)
var impuesto3 = new Impuesto(450000, 25000)
var cliente1 = new Cliente('Varinia Mendez', impuesto1);
var cliente2 = new Cliente('Arturo Perez', impuesto2);
var cliente3 = new Cliente('Alejandro Marquez', impuesto1);
var cliente4 = new Cliente('Ingrid Neira', impuesto3);


cliente1.calcularImp();
cliente2.calcularImp();
cliente3.calcularImp();
cliente4.calcularImp();