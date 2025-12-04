'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener todas las autorizaciones de una consulta
 *
 * idConsulta Integer 
 * returns ResponseAutorizaciones
 **/
exports.consultasIdConsultaAutorizadosGET = function (idConsulta) {
  return new Promise(function (resolve, reject) {
    extraService.special(
      `
      SELECT * FROM u438573835_censo.ffsj_consultas_autorizados where idConsulta = ${idConsulta};
      `
    ).then(res => {
      resolve(extraService.transformResponse(res, "autorizaciones", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar una autorización de usuario por ID
 *
 * idConsulta Integer 
 * idUsuario Integer 
 * returns ResponseStatus
 **/
exports.consultasIdConsultaAutorizadosIdAsistenciaDELETE = function (idConsulta, idAsistencia) {
  return new Promise(function (resolve, reject) {
    extraService.special(
      `
      DELETE FROM u438573835_censo.ffsj_consultas_autorizados WHERE (idAsistencia = ${idAsistencia}) and (idConsulta = ${idConsulta});
      `
    ).then(res => {
      resolve(extraService.transformResponse(res, "autorizaciones", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}

exports.consultasIdConsultaAutorizadosIdAsociadoGET = function (idConsulta, idAsistencia) {
  return new Promise(function (resolve, reject) {
    extraService.special(
      `
      SELECT * FROM u438573835_censo.ffsj_consultas_autorizados where idConsulta = ${idConsulta} and idAsistencia = ${idAsistencia};
      `
    ).then(res => {
      resolve(extraService.transformResponse(res, "autorizaciones", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener una autorización de usuario por ID
 *
 * idConsulta Integer 
 * idUsuario Integer 
 * returns ResponseAutorizacion
 **/
exports.consultasIdConsultaAutorizadosIdAsistenciaGET = function (idConsulta, idAsistencia) {
  return new Promise(function (resolve, reject) {
    extraService.special(
      `
      SELECT * FROM u438573835_censo.ffsj_consultas_autorizados where idConsulta = ${idConsulta} and idAsistencia = ${idAsistencia};
      `
    ).then(res => {
      resolve(extraService.transformResponse(res, "autorizaciones", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar una autorización de usuario en una consulta
 *
 * body ResponseAutorizacion 
 * idConsulta Integer 
 * idUsuario Integer 
 * returns ResponseStatus
 **/
exports.consultasIdConsultaAutorizadosIdAsistenciaPUT = function (body, idConsulta, idAsistencia) {
  return new Promise(function (resolve, reject) {
    extraService.special(
      `
      UPDATE u438573835_censo.ffsj_consultas_autorizados SET idAsistencia = ${body.idAsistencia}, idConsulta = ${body.idConsulta} WHERE (idAsistencia = ${idAsistencia}) and (idConsulta = ${idConsulta});
      `
    ).then(res => {
      resolve(extraService.transformResponse(res, "autorizaciones", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Crear una nueva autorización
 *
 * body ResponseAutorizacion 
 * idConsulta Integer 
 * returns ResponseStatus
 **/
exports.consultasIdConsultaAutorizadosPOST = function (body, idConsulta) {
  console.log(body, idConsulta);
  return new Promise(function (resolve, reject) {
    try {

      extraService.set(body, 'ffsj_consultas_autorizados', false).then(res => {
        resolve(extraService.transformResponse(res, 'autorizaciones', true));
      }).catch(err => {
        reject(utils.respondWithCode(500, err))
      })
    } catch (error) {
      reject(utils.respondWithCode(500, error))
    }
  });
}

