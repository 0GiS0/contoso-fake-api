const express = require('express');
const router = express.Router();
const InvoicesController = require('./controllers/InvoicesController');
const AccountsController = require('./controllers/AccountsController');
const SupportController = require('./controllers/SupportController');

router.use(InvoicesController);
router.use(AccountsController);
router.use(SupportController);

module.exports = router;