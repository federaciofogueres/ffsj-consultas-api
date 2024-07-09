var connectionBD = require('../utils/connect');
const cifrar = require('./CifrarService');

exports.transformResponse = function (res, object, responseOK) {
    var response = {};
    console.log('aquíiiii ', response, res, object, responseOK);

    if (responseOK) {
        response = {
            status: {
                status: 200,
                message: 'Éxito'
            }
        };
        if (object !== null) {
            response[object] = res;
        }
    } else if (res.codigo) {
        response = {
            status: {
                status: res.codigo,
                message: res.message,
            }
        };
    } else {
        response = {
            status : {
                status: 500,
                message: res,
            }
        }
    }
    return response;
}

var processSQLResponse = async function(rows) {
    var arrayResponse = []
    rows.forEach(row => {
        var response = {};
        Object.keys(row).forEach(key => {
            response[key] = row[key];
        });
        arrayResponse.push(response);
    });
    return arrayResponse
}

var get = exports.get = async function(codigo, table, sqlExpression = null) {
    return new Promise(async function (resolve, reject) {
        var connection = connectionBD.connect();
        if (connection) {
            var sql = 'SELECT * FROM ' + connectionBD.DB + '.' + table;
            if (sqlExpression) {
                sql = sqlExpression;
            }
            console.log('SQL -> ', sql);
            if (codigo !== null && sqlExpression === null) 
                sql += ` WHERE id = '${codigo}';`
            
            console.log('GET SQL ---> ', sql);
            connection.query(sql, async function (err, rows) {
                if (err) reject('Error al realizar la consulta: ' + err);
                connectionBD.closeConnect(connection);
                if (rows.length == 0) {
                    resolve(rows.length);
                } else {
                    resolve(await processSQLResponse(rows));
                }
            });
        } else {
            reject('Error al abrir la conexión con la BD.');
        }
    });
}

var processSQLPostRequest = async function(insertObject) {
    var fields = ' (';
    var values = ` VALUES (`;
    const keys = Object.keys(insertObject); // Obtener las llaves del objeto

    // Usar un bucle for...of para esperar correctamente las operaciones asíncronas
    for (const key of keys) {
        const tipo = await determinarTipoDeCadena(insertObject[key]);
        fields += `${key},`;
        if (tipo === "string") {
            values += `'${insertObject[key]}',`;
        } else {
            values += `${insertObject[key]},`;
        }
    }
    fields = fields.slice(0,-1);
    values = values.slice(0,-1);
    fields += ')';
    values += `);`;
    return fields + values;
}

exports.set = async function(insertObject, table, returnId = false) {
    return new Promise(async function (resolve, reject) {
        var connection = connectionBD.connect();
        if (connection) {
            var sql = `INSERT INTO ${connectionBD.DB}.${table}` + await processSQLPostRequest(insertObject);
            console.log('SQL SET: ', sql);
            connection.query(sql, async function (err, rows) {
                if (err) reject('Error al crear el registro: ' + err);
                if (returnId) {
                    resolve(rows.insertId)
                }
                if (rows) {
                    console.log('Objeto creado -> ', rows);
                    connectionBD.closeConnect(connection);
                    resolve(rows.insertId  ? rows.insertId : insertObject.id);
                } else {
                    connectionBD.closeConnect(connection);
                    reject('Error al crear el registro.');
                }
            });
        } else {
            reject('Error al abrir conexión con la BD.');
        }
    })
}

var softDeleteItem = exports.softDeleteItem = async function (codigo, table) {
    var sql = `UPDATE ${connectionBD.DB}.${table} SET active = 0`;
    // if(table === "historico")
    //     sql += `, idTipoHistorico = 3 WHERE idCargo = ${idCargo} AND idAsociacion = ${idAsociacion} AND idAsociado = ${idAsociado} AND ejercicio = ${ejercicio};`;
    // else
        sql += ` WHERE id = '${codigo}';`;
    return sql;
}

var processSQLDeleteRequest = exports.processSQLDeleteRequest = async function (codigo, table, idCargo = null, idAsociacion = null, idAsociado = null, ejercicio = null) {
    if(table === 'historico')
        return `DELETE FROM ${connectionBD.DB}.${table} WHERE idCargo = '${idCargo}' AND idAsociacion = '${idAsociacion}' AND idAsociado = '${idAsociado}' AND ejercicio = '${ejercicio}';`;
    else if(table === 'sincronizacion' && (codigo === undefined || codigo === null))
        return `DELETE FROM ${connectionBD.DB}.${table};`;
    else
        return `DELETE FROM ${connectionBD.DB}.${table} WHERE id = '${codigo}';`;
}

exports.delete = async function (codigo, table, softDelete = false, idCargo = null, idAsociacion = null, idAsociado = null, ejercicio = null) {
    return new Promise(async function (resolve, reject) {
        var connection = connectionBD.connect();
        if (connection) {
            var sql = '';
            if (softDelete) {
                sql = await softDeleteItem(codigo, table, idCargo, idAsociacion, idAsociado, ejercicio);
            } else {
                sql = await processSQLDeleteRequest(codigo, table);
            }
            connection.query(sql, function (err, rows) {
                console.log('DELETE SQL: ', sql);
                if (sql.includes("DELETE")) {
                    if (err) reject('Error al realizar el borrado. Error: ' + err);
                    if (rows.affectedRows > 0) {
                        connectionBD.closeConnect(connection);
                        resolve(rows.affectedRows);
                    } else {
                        connectionBD.closeConnect(connection);
                        reject('Error al realizar el borrado.');
                    }
                } else {
                    console.log(rows)
                    if (err) reject('Error al actualizar el registro. Error: ' + err);
                    if (rows && rows.changedRows >= 1) {
                        connectionBD.closeConnect(connection);
                        resolve("OK");
                    } else {
                        connectionBD.closeConnect(connection);
                        reject('No se pudo actualizar el registro.');
                    }
                }
            });
        } else {
            reject('Error al abrir conexión con la BD.');
        }
    })
}

// function createResStatus(codigo, mensaje)
// {
//     return {codigo: codigo, message: mensaje};
// }

async function determinarTipoDeCadena(valor) {
    valor = String(valor); // Convierte 'valor' a cadena si no lo es ya
    // Comprobar si es 'null'
    if (valor === null) {
      return "null";
    }
  
    // Comprobar si es 'undefined'
    if (valor === undefined) {
      return "undefined";
    }
  
    // Comprobar si es un booleano
    if (valor === "true" || valor === "false") {
      return "boolean";
    }
  
    // Comprobar si es numérico
    if (!isNaN(parseFloat(valor)) && isFinite(valor)) {
      // Diferenciar entre entero y flotante
      if (valor.indexOf('.') !== -1) {
        return "float";
      }
      return "integer";
    }
  
    // Si no es ninguno de los anteriores, asumir que es una cadena
    return "string";
  }

var processSQLPutRequest = async function(updateObject) {
    var sql = '';
    const keys = Object.keys(updateObject); // Obtener las llaves del objeto

    // Usar un bucle for...of para esperar correctamente las operaciones asíncronas
    for (const key of keys) {
        const tipo = await determinarTipoDeCadena(updateObject[key]);
        // console.log(key)
        // console.log(tipo); // Imprimir el tipo para depuración
        // console.log(updateObject[key])
        if(updateObject[key] !== null && updateObject[key] !== undefined)
        {
            if (tipo === "string") {
                sql += `${key}='${updateObject[key]}', `;
            } else {
                sql += `${key}=${updateObject[key]}, `;
            }
        }
    }

    sql = sql.slice(0, -2); // Ajustar para eliminar la última coma y espacio
    return sql;
}

var checkCipherMandatoryData = exports.checkCipherMandatoryData = function(data) {
    let cipherMandatoryKeys = ['password'];
    for(let key of Object.keys(data)) {
        if (cipherMandatoryKeys.includes(key) && data[key] !== null) {
            data[key] = cifrar.encryptPassword(cifrar.decryptFrontData(data[key]));
        }
    }
    return data;
}

exports.update = function (updateObject, table, idUpdateObject) {
    updateObject = checkCipherMandatoryData(updateObject);
    return new Promise(async function (resolve, reject) {
        var connection = connectionBD.connect();
        if (connection) {
            var sql = `UPDATE ${connectionBD.DB}.${table} SET ` + await processSQLPutRequest(updateObject);
            // if(table === 'historico')
            //     sql += ` WHERE idAsociado = ${updateObject.idAsociado} AND idAsociacion = ${updateObject.idAsociacion} AND idCargo = ${updateObject.idCargo} AND ejercicio = ${updateObject.ejercicio}`
            // else
                sql += ` WHERE id = ${idUpdateObject};`;

            console.log('UPDATE SQL: ', sql);
            connection.query(sql, function (err, rows) {
                if (err) reject('Error al actualizar el registro. Error: ' + err);
                connectionBD.closeConnect(connection);
                if (rows && rows.changedRows >= 1) {
                    resolve(get(idUpdateObject, table));
                } else if (rows && rows.changedRows === 0 && rows.affectedRows > 0) {
                    resolve({status: true, message: 'No cambió nada.'})
                } else {
                    reject('No se pudo actualizar el registro.');
                }
            });
        } else {
          reject('Error al abrir conexión con la BD.');
        }
    });
  };
