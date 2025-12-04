'use strict';

const path = require('path');
const http = require('http');
const cors = require('cors');

const oas3Tools = require('oas3-tools');
const serverPort = process.env.PORT || 8080;

// swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

const expressAppConfig = oas3Tools.expressAppConfig(
    path.join(__dirname, 'api/openapi.yaml'),
    options
);
const app = expressAppConfig.getApp();

/**
 * Allowed origins:
 * - http://localhost:4200 (dev)
 * - ffsj-asambleas web (hogueras.es domain)
 */
const allowedLocal = 'http://localhost:4200';
const allowedDomain = 'hogueras.es';

// función que verifica el origin
function isAllowedOrigin(origin) {
    if (!origin) return true; // llamadas internas / curl

    if (origin === allowedLocal) return true;

    try {
        const url = new URL(origin);
        const hostname = url.hostname.toLowerCase();

        if (hostname === allowedDomain) return true;
        if (hostname.endsWith('.' + allowedDomain)) return true;

        return false;
    } catch {
        return false;
    }
}

const corsOptions = {
    origin: function (origin, callback) {
        if (isAllowedOrigin(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS policy: Origin not allowed: ' + origin));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 204
};

// aplicar CORS antes de las rutas
app.use(cors(corsOptions));

// manejar todos los preflight OPTIONS
app.options('*', cors(corsOptions));

// Start server
http.createServer(app).listen(serverPort, function () {
    console.log(`Your server is listening on port ${serverPort} (http://localhost:${serverPort})`);
    console.log(`Swagger-ui is available on http://localhost:${serverPort}/docs`);
});
