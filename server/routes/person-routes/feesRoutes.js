const Router = require('express');
const router = new Router();
const feesController = require('../../controllers/person-controllers/feesController');

router.post('/', feesController.createFees);
router.get('/:feesId', feesController.getFees);
router.get('/', feesController.getFeeses);

module.exports = router;
