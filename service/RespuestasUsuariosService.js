'use strict';


/**
 * Eliminar una respuesta de usuario por ID
 *
 * id Integer 
 * returns ResponseStatus
 **/
exports.respuestasUsuariosIdDELETE = function(id) {
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
 * Obtener una respuesta de usuario por ID
 *
 * id Integer 
 * returns ResponseRespuestaUsuario
 **/
exports.respuestasUsuariosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "respuestaUsuario" : {
    "id" : 0,
    "idOpcionRespuesta" : 5,
    "idConsulta" : 6,
    "idPregunta" : 1
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
 * Actualizar una respuesta de usuario por ID
 *
 * body RespuestaUsuario 
 * id Integer 
 * returns ResponseStatus
 **/
exports.respuestasUsuariosIdPUT = function(body,id) {
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
 * Guardar una respuesta de usuario
 *
 * body RespuestaUsuario 
 * returns ResponseStatus
 **/
exports.respuestasUsuariosPOST = function(body) {
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

