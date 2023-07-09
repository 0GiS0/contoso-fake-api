// Modules
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const router = require('./routes');

// Create a port
const port = process.env.PORT || 3000;

// Create an instance of express
const app = express();

app.use(router);

const options = {
    explorer: true,
    swaggerOptions: {
        url: 'swagger.json'
    }
};

app.get("/swagger.json", (req, res) => res.json(swaggerDocument));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// Listen on port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

