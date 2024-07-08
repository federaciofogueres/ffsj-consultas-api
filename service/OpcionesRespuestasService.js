'use strict';


/**
 * Obtener todas las opciones de respuesta
 *
 * returns ResponseOpcionesRespuestas
 **/
exports.opcionesRespuestasGET = function() {
  return new Promise(function(resolve, reject) {
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
exports.opcionesRespuestasIdDELETE = function(id) {
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
 * Obtener una opción de respuesta por ID
 *
 * id Integer 
 * returns ResponseOpcionRespuesta
 **/
exports.opcionesRespuestasIdGET = function(id) {
  return new Promise(function(resolve, reject) {
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
exports.opcionesRespuestasIdPUT = function(body,id) {
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
 * Crear una nueva opción de respuesta
 *
 * body OpcionRespuesta 
 * returns ResponseStatus
 **/
exports.opcionesRespuestasPOST = function(body) {
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

