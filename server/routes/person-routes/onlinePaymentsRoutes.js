const Router = require('express');
const router = new Router();
const onlinePaymentsController = require('../../controllers/person-controllers/onlinePaymentsController');

router.post('/', onlinePaymentsController.createPayment);
router.get('/:paymentId', onlinePaymentsController.getPayment);
router.get('/', onlinePaymentsController.getPayments);

module.exports = router;
