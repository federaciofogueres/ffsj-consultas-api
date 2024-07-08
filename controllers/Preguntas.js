'use strict';

var utils = require('../utils/writer.js');
var Preguntas = require('../service/PreguntasService');

module.exports.preguntasGET = function preguntasGET (req, res, next) {
  Preguntas.preguntasGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.preguntasIdDELETE = function preguntasIdDELETE (req, res, next, id) {
  Preguntas.preguntasIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.preguntasIdGET = function preguntasIdGET (req, res, next, id) {
  Preguntas.preguntasIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.preguntasIdPUT = function preguntasIdPUT (req, res, next, body, id) {
  Preguntas.preguntasIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.preguntasPOST = function preguntasPOST (req, res, next, body) {
  Preguntas.preguntasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
