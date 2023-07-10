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

router.get('/invoices/:id', (req, res) => {

    /*#swagger.tags = ['Invoices']
    ##swagger.operationId = 'getInvoiceById'

    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Invoice ID',
        required: true,
        type: 'integer'
    }

    #swagger.responses[200] = {
        description: 'Invoice returned successfully',
        schema: { $ref: '#/definitions/Invoice' }
    }
    #swagger.responses[404] = {
        description: 'Invoice not found'
    }
    */

    const invoice = INVOICES.find(invoice => invoice.id === parseInt(req.params.id));
    if (!invoice) return res.status(404).send('The invoice with the given ID was not found.');
    res.json(invoice);

});

router.post('/invoices', (req, res) => {

    /*#swagger.tags = ['Invoices']
    ##swagger.operationId = 'createInvoice'

    #swagger.parameters['newInvoice'] = {
        in: 'body',
        description: 'Invoice to be created',
        required: true,
        schema: { $ref: '#/definitions/Invoice' }
    }

    #swagger.responses[201] = {
        description: 'Invoice created successfully',
        schema: { $ref: '#/definitions/Invoice' }
    }
    */

    console.log(req.body);

    const invoice = {
        id: INVOICES.length + 1,
        date: req.body.date,
        accountName: req.body.accountName,
        contact: req.body.contact,
        price: req.body.price,
        status: req.body.status
    };

    INVOICES.push(invoice);
    res.status(201).json(invoice);

});

router.put('/invoices/:id', (req, res) => {

    /*#swagger.tags = ['Invoices']
    ##swagger.operationId = 'updateInvoice'

    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Invoice ID',
        required: true,
        type: 'integer'
    }

    #swagger.parameters['updatedInvoice'] = {
        in: 'body',
        description: 'Invoice to be updated',
        required: true,
        schema: { $ref: '#/definitions/Invoice' }
    }

    #swagger.responses[200] = {
        description: 'Invoice updated successfully',
        schema: { $ref: '#/definitions/Invoice' }
    }

    #swagger.responses[404] = {
        description: 'Invoice not found'
    }
    */

    const invoice = INVOICES.find(invoice => invoice.id === parseInt(req.params.id));
    if (!invoice) return res.status(404).send('The invoice with the given ID was not found.');

    invoice.date = req.body.date;
    invoice.accountName = req.body.accountName;
    invoice.contact = req.body.contact;
    invoice.price = req.body.price;
    invoice.status = req.body.status;

    res.json(invoice);

});

router.delete('/invoices/:id', (req, res) => {

    /*#swagger.tags = ['Invoices']
    ##swagger.operationId = 'deleteInvoice'
    
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Invoice ID',
        required: true,
        type: 'integer'
    }

    #swagger.responses[200] = {
        description: 'Invoice deleted successfully'
    }

    #swagger.responses[404] = {
        description: 'Invoice not found'

    }
    */

    const invoice = INVOICES.find(invoice => invoice.id === parseInt(req.params.id));
    if (!invoice) return res.status(404).send('The invoice with the given ID was not found.');

    const index = INVOICES.indexOf(invoice);
    INVOICES.splice(index, 1);

    res.json(invoice);

});

module.exports = router;