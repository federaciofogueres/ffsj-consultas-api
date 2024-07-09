'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');
/**
 * Obtener todas las opciones de respuesta
 *
 * returns ResponseOpcionesRespuestas
 **/
exports.opcionesRespuestasGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_consultas_opciones_respuestas", null).then(res => {
      resolve(extraService.transformResponse(res, "opciones_respuestas", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar una opción de respuesta por ID
 *
 * id Integer 
 * returns ResponseStatus
 **/
exports.opcionesRespuestasIdDELETE = function() {
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
 * Obtener una opción de respuesta por ID
 *
 * id Integer 
 * returns ResponseOpcionRespuesta
 **/
exports.opcionesRespuestasIdGET = function(opcionesRespuestas) {
  return new Promise(function(resolve, reject) {
    extraService.get(opcionesRespuestas, "ffsj_consultas_opciones_respuestas").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "opciones_respuestas", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe la opción de respuesta " + opcionesRespuestas}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar una opción de respuesta por ID
 *
 * body OpcionRespuesta 
 * id Integer 
 * returns ResponseStatus
 **/
exports.opcionesRespuestasIdPUT = function() {
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
 * Crear una nueva opción de respuesta
 *
 * body OpcionRespuesta 
 * returns ResponseStatus
 **/
exports.opcionesRespuestasPOST = function(body) {
  return new Promise(function(resolve, reject) {
    extraService.set(body, 'ffsj_consultas_opciones_respuestas', false).then(res => {
      resolve(extraService.transformResponse(res, 'opcionesRespuestas', true));
    }).catch(err => {
      reject(utils.respondWithCode(500, err))
    })
  });
}

