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

module.exports.consultasIdConsultaAutorizadosIdAsociadoDELETE = function consultasIdConsultaAutorizadosIdAsociadoDELETE (req, res, next, idConsulta, idAsociado) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdAsociadoDELETE(idConsulta, idAsociado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdConsultaAutorizadosIdAsociadoGET = function consultasIdConsultaAutorizadosIdAsociadoGET (req, res, next, idConsulta, idAsociado) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdAsociadoGET(idConsulta, idAsociado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdConsultaAutorizadosIdAsociadoPUT = function consultasIdConsultaAutorizadosIdAsociadoPUT (req, res, next, body, idConsulta, idAsociado) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdAsociadoPUT(body, idConsulta, idAsociado)
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
