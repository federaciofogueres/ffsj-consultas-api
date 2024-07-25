'use strict';

var utils = require('../utils/writer.js');
var AutorizacionesConsultas = require('../service/AutorizacionesConsultasService');

module.exports.consultasIdConsultaAutorizadosGET = function consultasIdConsultaAutorizadosGET (req, res, next, idConsulta) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosGET(idConsulta)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdConsultaAutorizadosIdUsuarioDELETE = function consultasIdConsultaAutorizadosIdUsuarioDELETE (req, res, next, idConsulta, idUsuario) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdUsuarioDELETE(idConsulta, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdConsultaAutorizadosIdUsuarioGET = function consultasIdConsultaAutorizadosIdUsuarioGET (req, res, next, idConsulta, idUsuario) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdUsuarioGET(idConsulta, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdConsultaAutorizadosIdUsuarioPUT = function consultasIdConsultaAutorizadosIdUsuarioPUT (req, res, next, body, idConsulta, idUsuario) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdUsuarioPUT(body, idConsulta, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdConsultaAutorizadosPOST = function consultasIdConsultaAutorizadosPOST (req, res, next, body, idConsulta) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosPOST(body, idConsulta)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
