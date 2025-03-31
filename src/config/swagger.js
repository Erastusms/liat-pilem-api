const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("../docs/swaggerDef");

const options = {
    definition: swaggerDefinition,
    apis: ["./src/docs/*.yaml"], // Mengambil dokumentasi dari file YAML
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
