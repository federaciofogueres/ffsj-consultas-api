'use strict';


/**
 * Obtener todas las consultas
 *
 * returns ResponseConsultas
 **/
exports.consultasGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "consultas" : [ {
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
  }, {
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
 * Eliminar una consulta por ID
 *
 * id Integer 
 * returns ResponseStatus
 **/
exports.consultasIdDELETE = function(id) {
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
 * Obtener una consulta por ID
 *
 * id Integer 
 * returns ResponseConsulta
 **/
exports.consultasIdGET = function(id) {
  return new Promise(function(resolve, reject) {
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
exports.consultasIdPUT = function(body,id) {
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
 * Crear una nueva consulta
 *
 * body Consulta 
 * returns ResponseStatus
 **/
exports.consultasPOST = function(body) {
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

