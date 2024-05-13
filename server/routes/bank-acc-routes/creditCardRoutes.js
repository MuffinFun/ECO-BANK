const Router = require('express');
const router = new Router();
const creditCardController = require('../../controllers/bak-acc-controllers/creditCardController');

router.post('/', creditCardController.createCreditCard);
router.get('/', creditCardController.getCreditCards);
router.get('/:cardId', creditCardController.getCreditCard);

module.exports = router;
