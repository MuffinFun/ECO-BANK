const Router = require('express');
const router = new Router();
const accountController = require('../../controllers/Account-piece/accountController.js');

router.post('/', accountController.createAccount);
router.get('/', accountController.getAccounts);

module.exports = router;
