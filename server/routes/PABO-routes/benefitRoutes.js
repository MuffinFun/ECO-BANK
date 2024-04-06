const Router = require('express');
const router = new Router();
const benefitController = require('../../controllers/PABO-piece/benefitController');

router.post('/create', benefitController.createBenefit);
router.get('/show', benefitController.getBenefits);
router.post('/', benefitController.addBenefit);
router.get('/', benefitController.getMyBenefits);

module.exports = router;
