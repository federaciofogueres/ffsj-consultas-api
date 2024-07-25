var mysql = require('mysql');

exports.DB = 'u438573835_censo';
//exports.DBCensoAntiguo = 'u438573835_intranet1';
exports.DBCensoAntiguo = 'u438573835_intranet_pre';

// Pool de conexiones a la base de datos de la nueva BBDD
var pool = exports.pool = mysql.createPool({
    host: '193.203.168.4',
    port: '3306',
    user: 'u438573835_tdgital',
    password: 'Ef2024FFSJ*',
    timezone: 'utc'
});

var connect = exports.connect = function() {

    try {
        pool.query('SELECT * FROM u438573835_censo.ejercicios', function(err, rows, fields) {
            if (err) throw err;
        });
    } catch (error) {
        console.log('Error en la conexión a la base de datos: ', error);
    }
    return pool;

};

// var connect = exports.connect = function() {

//     var connection = mysql.createConnection({
//         host: '193.203.168.4',
//         port: '3306',
//         user: 'u438573835_tdgital',
//         password: 'Ef2024FFSJ*',
//         timezone: 'utc'
//     });

//     connection.connect();
//     connection.query('SELECT * FROM u438573835_censo.ejercicios', function(err, rows, fields) {

//         if (err) throw err;
        
//     });

//     return connection;

// }

var closeConnect = exports.closeConnect = function(connection) {

    connection.end();

}

var connectCensoAntiguo = exports.connectCensoAntiguo = function() {

    // var connection = mysql.createConnection({
    //     host: '62.72.37.247',
    //     port: '3306',
    //     user: 'u438573835_intranet1',
    //     password: 'Wwc8mFn.Qt3I6Gdy',
    //     timezone: 'utc'
    // });
    var connection = mysql.createConnection({
        host: '62.72.37.247',
        port: '3306',
        user: 'u438573835_intranet_pre',
        password: 'Wwc8mFn.Qt3I6Gdy',
        timezone: 'utc'
    });
    connection.connect();
    connection.query('SELECT * FROM u438573835_intranet_pre.apc_clients_childs', function(err, rows, fields) {

        if (err) throw err;
        
    });

    return connection;

}

var closeConnectCensoAntiguo = exports.closeConnectCensoAntiguo = function(connection) {

    connection.end();

}

// Cuando ya no necesites el pool, por ejemplo, al cerrar tu aplicación, puedes cerrarlo
// Esto cierra todas las conexiones en el pool
// Se hace una sola vez, generalmente cuando estás apagando tu aplicación
exports.closePool = function() {
    pool.end(function(err) {
        if (err) throw err;
        // El pool se ha cerrado
    });
}