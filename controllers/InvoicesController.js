const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');


router.get('/invoices', (req, res) => {

    /*#swagger.tags = ['Invoices']
    ##swagger.operationId = 'getInvoices'
    #swagger.description = 'Endpoint to return invoices'

    #swagger.responses[200] = {
        description: 'Invoices returned successfully',       
        schema: { $ref: '#/definitions/Invoices' }       
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