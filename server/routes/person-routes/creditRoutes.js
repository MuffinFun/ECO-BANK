const Router = require('express');
const router = new Router();
const creditController = require('../../controllers/person-controllers/creditController');

router.post('/', creditController.createCredit);
router.get('/:creditId', creditController.getCredit);
router.get('/', creditController.getCredits);

module.exports = router;
