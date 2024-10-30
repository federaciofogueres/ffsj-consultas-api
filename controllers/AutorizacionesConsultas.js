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

module.exports.consultasIdConsultaAutorizadosIdAsistenciaDELETE = function consultasIdConsultaAutorizadosIdAsistenciaDELETE (req, res, next, idConsulta, idAsistencia) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdAsistenciaDELETE(idConsulta, idAsistencia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdConsultaAutorizadosIdAsistenciaGET = function consultasIdConsultaAutorizadosIdAsistenciaGET (req, res, next, idConsulta, idAsistencia) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdAsistenciaGET(idConsulta, idAsistencia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultasIdConsultaAutorizadosIdAsistenciaPUT = function consultasIdConsultaAutorizadosIdAsistenciaPUT (req, res, next, body, idConsulta, idAsistencia) {
  AutorizacionesConsultas.consultasIdConsultaAutorizadosIdAsistenciaPUT(body, idConsulta, idAsistencia)
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
