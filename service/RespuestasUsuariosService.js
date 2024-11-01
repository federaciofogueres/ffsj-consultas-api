'use strict';

var extraService = require("../service/ExtraService");
var autorizacionesService = require("../service/AutorizacionesConsultasService");
var utils = require('../utils/writer.js');

/**
 * Eliminar una respuesta de usuario por ID
 *
 * id Integer 
 * returns ResponseStatus
 **/
var respuestasUsuariosIdDELETE = exports.respuestasUsuariosIdDELETE = function(idRespuesta) {
  return new Promise(function(resolve, reject) {
    respuestasUsuariosIdGET(idRespuesta).then(() => {
      extraService.delete(idRespuesta, "ffsj_consultas_respuestas_usuarios", false).then(res => {
        console.log('Deleted -> ', res);
        resolve(extraService.transformResponse(res, null, true));
      }).catch(res => {
        reject(utils.respondWithCode(500, res));
      });
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener una respuesta de usuario por ID
 *
 * id Integer 
 * returns ResponseRespuestaUsuario
 **/
var respuestasUsuariosIdGET = exports.respuestasUsuariosIdGET = function(idRespuestaUsuario) {
  return new Promise(function(resolve, reject) {
    extraService.get(idRespuestaUsuario, "ffsj_consultas_respuestas_usuarios").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "preguntas", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe la respuesta " + idRespuestaUsuario}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar una respuesta de usuario por ID
 *
 * body RespuestaUsuario 
 * id Integer 
 * returns ResponseStatus
 **/
exports.respuestasUsuariosIdPUT = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "status" : {
    "message" : "La llamada ha ido bien",
    "status" : 200
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Guardar una respuesta de usuario
 *
 * body RespuestaUsuario 
 * returns ResponseStatus
 **/
exports.respuestasUsuariosPOST = async function(body) { // Paso 2: Hacer la función async
  return new Promise(async function(resolve, reject) { // Añadir async aquí también es opcional
    try {
      await checkAutorizado(body.idPregunta, body.idAsistencia); // Paso 3: Usar await
      try {
        await checkRespuestaExists(body.idPregunta, body.idAsistencia); // Paso 2: Usar await
        extraService.set(body, 'ffsj_consultas_respuestas_usuarios', false).then(res => {
          resolve(extraService.transformResponse(res, 'respuestasUsuarios', true));
        }).catch(err => {
          reject(utils.respondWithCode(500, err))
        });
      } catch (err) {
        reject(utils.respondWithCode(500, err));
      }
    } catch (error) {
      console.log('Error -> ', error);
      reject(utils.respondWithCode(500, 'El usuario no está autorizado'));
    }
  });
}

var checkRespuestaExists = function (idPregunta, idAsistencia) {
  return new Promise((resolve, reject) => { // Paso 1: Retornar una promesa
    extraService.get(null, null, `SELECT * FROM u438573835_censo.ffsj_consultas_respuestas_usuarios where idPregunta = ${idPregunta} and idAsistencia = ${idAsistencia};`).then(res => {
      if (res && res.length > 0) {
        respuestasUsuariosIdDELETE(res[0].id).then(resolve).catch(reject);
      } else {
        resolve();
      }
    }).catch(reject);
  });
}


var checkAutorizado = function (idPregunta, idAsistencia) {
  return new Promise((resolve, reject) => { // Paso 1: Retornar una promesa
    extraService.special( 
      `
      SELECT * FROM u438573835_censo.ffsj_consultas_autorizados where idConsulta in (
        SELECT idConsulta FROM u438573835_censo.ffsj_consultas_preguntas where id = ${idPregunta}
      ) and idAsistencia = ${idAsistencia};
      `
    ).then(res => {
      console.log(res);
      if (res === 0) {
        reject(false);
        return;
      }
      resolve(true);
    }).catch(() => reject(false));
  });
}
