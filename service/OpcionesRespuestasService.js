'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');
/**
 * Obtener todas las opciones de respuesta
 *
 * returns ResponseOpcionesRespuestas
 **/
exports.opcionesRespuestasGET = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "opcionesRespuestas" : [ {
    "active" : true,
    "id" : 5,
    "respuesta" : "respuesta"
  }, {
    "active" : true,
    "id" : 5,
    "respuesta" : "respuesta"
  } ],
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
exports.opcionesRespuestasIdGET = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "opcionRespuesta" : {
    "active" : true,
    "id" : 5,
    "respuesta" : "respuesta"
  },
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

