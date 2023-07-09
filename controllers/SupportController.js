const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');


router.get('/support', (req, res) => {

    /*#swagger.tags = ['Support']
    ##swagger.operationId = 'getCases'
    #swagger.description = 'Endpoint to return support cases'

    #swagger.responses[200] = {
        description: 'Cases returned successfully',       
        schema: { $ref: '#/definitions/SupportCases' }       
    }
    */
    let invoices = [];

    permittedStatus = ['Paid', 'Uninvoiced', 'Invoiced'];

    for (let i = 0; i < 10; i++) {
        invoices.push({

            date: faker.date.past().toLocaleDateString('es-ES'),
            accountName: faker.company.name(),
            contact: faker.internet.email(),
            price: parseFloat(faker.commerce.price()),
            status: permittedStatus[Math.floor(Math.random() * permittedStatus.length)]
        });
    }
    res.json(invoices);

});

module.exports = router;