'use strict';


/**
 * Obtener todas las preguntas
 *
 * returns ResponsePreguntas
 **/
exports.preguntasGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Eliminar una pregunta por ID
 *
 * id Integer 
 * returns ResponseStatus
 **/
exports.preguntasIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
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
exports.preguntasIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pregunta" : {
    "enunciado" : "enunciado",
    "titulo" : "titulo",
    "active" : true,
    "id" : 1
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
 * Actualizar una pregunta por ID
 *
 * body Pregunta 
 * id Integer 
 * returns ResponseStatus
 **/
exports.preguntasIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
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

