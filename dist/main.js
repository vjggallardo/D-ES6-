"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuesto1 = new _impuesto["default"](100000, 2000);
var impuesto2 = new _impuesto["default"](400000, 150000);
var impuesto3 = new _impuesto["default"](450000, 25000);
var cliente1 = new _cliente["default"]('Varinia Mendez', impuesto1);
var cliente2 = new _cliente["default"]('Arturo Perez', impuesto2);
var cliente3 = new _cliente["default"]('Alejandro Marquez', impuesto1);
var cliente4 = new _cliente["default"]('Ingrid Neira', impuesto3);
cliente1.calcularImp();
cliente2.calcularImp();
cliente3.calcularImp();
cliente4.calcularImp();

