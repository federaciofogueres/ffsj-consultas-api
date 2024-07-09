'use strict';

var extraService = require("../service/ExtraService");

/**
 * Obtener todas las preguntas
 *
 * returns ResponsePreguntas
 **/
exports.preguntasGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_consultas_preguntas", null).then(res => {
      resolve(extraService.transformResponse(res, "preguntas", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar una pregunta por ID
 *
 * id Integer 
 * returns ResponseStatus
 **/
exports.preguntasIdDELETE = function() {
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
 * Obtener una pregunta por ID
 *
 * id Integer 
 * returns ResponsePregunta
 **/
exports.preguntasIdGET = function(pregunta) {
  return new Promise(function(resolve, reject) {
    extraService.get(pregunta, "ffsj_consultas_preguntas").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "preguntas", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe la pregunta " + pregunta}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar una pregunta por ID
 *
 * body Pregunta 
 * id Integer 
 * returns ResponseStatus
 **/
exports.preguntasIdPUT = function() {
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
 * Crear una nueva pregunta
 *
 * body Pregunta 
 * returns ResponseStatus
 **/
exports.preguntasPOST = function(body) {
  return new Promise(function(resolve, reject) {
    extraService.set(body, 'ffsj_consultas_preguntas', false).then(res => {
      console.log(res);
      resolve(extraService.transformResponse(res, 'preguntas', true));
    }).catch(err => {
      reject(utils.respondWithCode(500, err))
    })
  });
}

