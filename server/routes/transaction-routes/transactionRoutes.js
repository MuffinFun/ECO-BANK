const Router = require('express');
const router = new Router();
const transactionController = require('../../controllers/transaction-controllers/transactionController');

router.post('/', transactionController.createTransaction);
router.get('/:transactionId', transactionController.getTransaction);
router.get('/:typeUserId/role/:role', transactionController.getTransactions);

module.exports = router;
