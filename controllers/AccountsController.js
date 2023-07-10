const express = require('express');
const router = express.Router();
const { ACCOUNTS } = require('../util/data');


router.get('/accounts', (req, res) => {

    /*#swagger.tags = ['Accounts']
    ##swagger.operationId = 'getAccounts'
    #swagger.description = 'Endpoint to return accounts'

    #swagger.responses[200] = {
        description: 'Accounts returned successfully',       
        schema: { $ref: '#/definitions/Accounts' }       
    }
    */
    console.log(ACCOUNTS);

    res.json(ACCOUNTS);

});

module.exports = router;