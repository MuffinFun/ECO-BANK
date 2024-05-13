const Router = require('express');
const router = new Router();
const taxController = require('../../controllers/person-controllers/taxController');

router.post('/', taxController.createTax);
router.get('/:taxId', taxController.getTax);
router.get('/', taxController.getTaxes);

module.exports = router;
