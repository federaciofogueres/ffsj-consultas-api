'use strict';

var extraService = require("../service/ExtraService");
var preguntasService = require("../service/PreguntasService");
var opcionesRespuestasService = require("../service/OpcionesRespuestasService");
var utils = require('../utils/writer.js');

/**
 * Obtener todas las consultas
 *
 * returns ResponseConsultas
 **/
exports.consultasGET = function() {
  return new Promise(function(resolve, reject) {
    console.log('holaaa');
    extraService.get(null, "ffsj_consultas_consultas", null).then(res => {
      console.log('Response -> ', res);
      resolve(extraService.transformResponse(res, "consultas", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar una consulta por ID
 *
 * id Integer 
 * returns ResponseStatus
 **/
exports.consultasIdDELETE = function(consulta) {
  return new Promise(function(resolve, reject) {
    extraService.get(consulta, "ffsj_consultas", null).then(consultas => {
      if(consultas !== 0)
        extraService.delete(consulta, "ffsj_consultas", true).then(res => {
          resolve(extraService.transformResponse(res, null, true));
        }).catch(res => {
          reject(utils.respondWithCode(500, res));
        });
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe la asociación " + asociacion}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener una consulta por ID
 *
 * id Integer 
 * returns ResponseConsulta
 **/
exports.consultasIdGET = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "consulta" : {
    "opcionesRespuestas" : [ {
      "active" : true,
      "id" : 5,
      "respuesta" : "respuesta"
    }, {
      "active" : true,
      "id" : 5,
      "respuesta" : "respuesta"
    } ],
    "preguntas" : [ {
      "enunciado" : "enunciado",
      "titulo" : "titulo",
      "active" : true,
      "id" : 1
    }, {
      "enunciado" : "enunciado",
      "titulo" : "titulo",
      "active" : true,
      "id" : 1
    } ],
    "id" : 0,
    "idConsulta" : 6
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
 * Actualizar una consulta por ID
 *
 * body Consulta 
 * id Integer 
 * returns ResponseStatus
 **/
exports.consultasIdPUT = function() {
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
 * Crear una nueva consulta
 *
 * body Consulta 
 * returns ResponseStatus
 **/
exports.consultasPOST = function(body) {
  return new Promise(function(_resolve, reject) {
    let bodyToProcess = {
      id: body.id,
      fecha: body.fecha,
      titulo: body.titulo,
      votosTotales: body.votosTotales,
    };
    try {
      extraService.set(bodyToProcess, "ffsj_consultas_consultas", false).then((idConsulta) => {
        console.log('Consulta creada -> ', idConsulta);

        for (let pregunta of body.preguntas) {
          let opcionesRespuestas = pregunta.opcionesRespuestas;
          delete pregunta.opcionesRespuestas;
          pregunta.idConsulta = idConsulta;
          preguntasService.preguntasPOST(pregunta).then(pregunta => {

            for (let opcion of opcionesRespuestas) {
              opcion.idPregunta = pregunta.preguntas;
              opcionesRespuestasService.opcionesRespuestasPOST(opcion).then(res => {
                console.log('Opciones de respuesta creadas -> ', res);
              });
            }

          })
        }
        console.log('Contadores ---> ', opcionesRespuestasContador, preguntasContador);
      }).catch(errCreate => {
        reject(utils.respondWithCode(500, errCreate));
      });
    } catch (error) {
      reject(utils.respondWithCode(500, error));          
    }
  });
}


