const express = require('express');
const router = express.Router();
const { SUPPORT_CASES } = require('../util/data');


router.get('/support', (req, res) => {

    /*#swagger.tags = ['Support']
    ##swagger.operationId = 'getCases'
    #swagger.description = 'Endpoint to return support cases'

    #swagger.responses[200] = {
        description: 'Cases returned successfully',       
        schema: { $ref: '#/definitions/SupportCases' }       
    }
    */

    console.log(SUPPORT_CASES);
    res.json(SUPPORT_CASES);

});

module.exports = router;