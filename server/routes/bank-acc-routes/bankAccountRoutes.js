const Router = require('express');
const router = new Router();
const bankAccountController = require('../../controllers/bak-acc-controllers/bankAccountController');

router.post('/', bankAccountController.createBankAccount);
router.get('/', bankAccountController.getBankAccounts);
router.get('/:bankId', bankAccountController.getBalance);
router.put('/:bankId', bankAccountController.updateBalance);

module.exports = router;
