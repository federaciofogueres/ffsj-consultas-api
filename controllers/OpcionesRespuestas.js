'use strict';

var utils = require('../utils/writer.js');
var OpcionesRespuestas = require('../service/OpcionesRespuestasService');

module.exports.opcionesRespuestasGET = function opcionesRespuestasGET (req, res, next) {
  OpcionesRespuestas.opcionesRespuestasGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opcionesRespuestasIdDELETE = function opcionesRespuestasIdDELETE (req, res, next, id) {
  OpcionesRespuestas.opcionesRespuestasIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opcionesRespuestasIdGET = function opcionesRespuestasIdGET (req, res, next, id) {
  OpcionesRespuestas.opcionesRespuestasIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opcionesRespuestasIdPUT = function opcionesRespuestasIdPUT (req, res, next, body, id) {
  OpcionesRespuestas.opcionesRespuestasIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.opcionesRespuestasPOST = function opcionesRespuestasPOST (req, res, next, body) {
  OpcionesRespuestas.opcionesRespuestasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
