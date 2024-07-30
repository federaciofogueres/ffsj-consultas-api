'use strict';

var utils = require('../utils/writer.js');
var Consultas = require('../service/ConsultasService');

module.exports.consultasGET = function consultasGET (req, res, next) {
  Consultas.consultasGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdDELETE = function consultasIdDELETE (req, res, next, id) {
  Consultas.consultasIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdGET = function consultasIdGET (req, res, next, id) {
  Consultas.consultasIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdPUT = function consultasIdPUT (req, res, next, body, id) {
  Consultas.consultasIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdResultadosGET = function consultasIdResultadosGET (req, res, next, id) {
  Consultas.consultasIdResultadosGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasPOST = function consultasPOST (req, res, next, body) {
  Consultas.consultasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
