'use strict';

const path = require('path');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const yaml = require('js-yaml');

const oas3Tools = require('oas3-tools');

const app = express();
const serverPort = process.env.PORT || 8080;

// Middlewares estándar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cargar el archivo OpenAPI
const spec = yaml.load(
    fs.readFileSync(path.join(__dirname, 'api/openapi.yaml'), 'utf8')
);

// Configuración de rutas y controladores
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers'),
    },
};

// Inicializar el middleware de OAS3
oas3Tools.initializeMiddleware(spec, (middleware) => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerRouter(options));
    app.use(middleware.swaggerUi());

    // Arranque del servidor
    app.listen(serverPort, () => {
        console.log(`Server listening on port ${serverPort}`);
        console.log(`Swagger UI: http://localhost:${serverPort}/docs`);
    });
});
