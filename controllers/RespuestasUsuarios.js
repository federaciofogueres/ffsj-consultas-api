'use strict';

var utils = require('../utils/writer.js');
var RespuestasUsuarios = require('../service/RespuestasUsuariosService');

module.exports.respuestasUsuariosIdDELETE = function respuestasUsuariosIdDELETE (req, res, next, id) {
  RespuestasUsuarios.respuestasUsuariosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.respuestasUsuariosIdGET = function respuestasUsuariosIdGET (req, res, next, id) {
  RespuestasUsuarios.respuestasUsuariosIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.respuestasUsuariosIdPUT = function respuestasUsuariosIdPUT (req, res, next, body, id) {
  RespuestasUsuarios.respuestasUsuariosIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.respuestasUsuariosPOST = function respuestasUsuariosPOST (req, res, next, body) {
  RespuestasUsuarios.respuestasUsuariosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
