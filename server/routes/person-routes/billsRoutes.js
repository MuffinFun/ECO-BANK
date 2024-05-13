const Router = require('express');
const router = new Router();
const billController = require('../../controllers/person-controllers/billsController');

router.post('/', billController.createBill);
router.get('/:billId', billController.getBill);
router.get('/', billController.getBills);

module.exports = router;
