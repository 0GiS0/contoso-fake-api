const express = require('express');
const router = express.Router();
const { INVOICES } = require('../util/data');



router.get('/invoices', (req, res) => {

    /*#swagger.tags = ['Invoices']
    ##swagger.operationId = 'getInvoices'
    #swagger.description = 'Endpoint to return invoices'

    #swagger.responses[200] = {
        description: 'Invoices returned successfully',       
        schema: { $ref: '#/definitions/Invoices' }       
    }
    */
    console.log(INVOICES);
    res.json(INVOICES);

});

module.exports = router;