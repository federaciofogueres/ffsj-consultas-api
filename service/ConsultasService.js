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
exports.consultasIdGET = function(consulta) {
  return new Promise(function(resolve, reject) {
    let response = {};
    extraService.get(consulta, "ffsj_consultas_consultas").then(res => {
      response = res[0];
      response.preguntas = [];
      extraService.get(null, null, 'SELECT * FROM u438573835_censo.ffsj_consultas_preguntas where idConsulta = ' + consulta +';').then(preguntas => {
        console.log('Preguntas -> ', preguntas);
        let promesasOpcionesRespuestas = preguntas.map(pregunta => {
          return new Promise((resolvePregunta) => {
            pregunta.opcionesRespuestas = [];
            extraService.get(null, null, 'SELECT * FROM u438573835_censo.ffsj_consultas_opciones_respuestas where idPregunta = ' + pregunta.id +';').then(opcionesRespuestas => {
              console.log('OPCIONES -> ', opcionesRespuestas);
              pregunta.opcionesRespuestas = opcionesRespuestas;
              console.log('Pregunta -> ', pregunta);
              resolvePregunta(pregunta); // Resuelve la promesa con la pregunta completa
            });
          });
        });

        Promise.all(promesasOpcionesRespuestas).then(preguntasCompletas => {
          response.preguntas = preguntasCompletas;
          console.log('RESPONSE -> ', response);
          resolve(extraService.transformResponse(response, "consulta", true)); // Esto se mueve aquí
        });
      })
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
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
  return new Promise(function(resolve, reject) {
    let bodyToProcess = {
      id: body.id,
      fecha: body.fecha,
      titulo: body.titulo,
      votosTotales: body.votosTotales,
    };
    let response = {};
    try {
      extraService.set(bodyToProcess, "ffsj_consultas_consultas", false).then(async (idConsulta) => { // Asegúrate de que esta función sea async
        console.log('Consulta creada -> ', idConsulta);
        response.idConsulta = idConsulta;
        response.preguntas = [];
    
        try {

          for (let pregunta of body.preguntas) {
            let opcionesRespuestas = pregunta.opcionesRespuestas;
            delete pregunta.opcionesRespuestas;
            pregunta.idConsulta = idConsulta;
            await preguntasService.preguntasPOST(pregunta).then(async (pregunta) => { // Asegúrate de que esta función sea async
              let preguntaResponse = {};
              preguntaResponse.id = pregunta.preguntas;
              preguntaResponse.opciones = [];
              let promesasOpcionesRespuestas = opcionesRespuestas.map(opcion => {
                opcion.idPregunta = pregunta.preguntas;
                return opcionesRespuestasService.opcionesRespuestasPOST(opcion);
              });
    
              await Promise.all(promesasOpcionesRespuestas).then(res => {
                for (let resOpcion of res) { 
                  preguntaResponse.opciones.push(resOpcion.opcionesRespuestas);
                }
              });
              response.preguntas.push(preguntaResponse);
    
              // Aquí puedes continuar con el código que depende de la resolución de todas las promesas
            });
          }
          resolve(extraService.transformResponse(response, "consultas", true));
        } catch (error) {
          reject(utils.respondWithCode(500, error));
        }
      });
    } catch (error) {
      console.error(error);
    }
  });
}
