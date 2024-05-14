const Router = require('express');
const router = new Router();
const benefitController = require('../../controllers/PABO-piece/benefitController');

router.post('/add-available', benefitController.createBenefit);
router.post('/', benefitController.addBenefit);
router.get('/show-available', benefitController.getAvailableBenefits);
router.get('/:role', benefitController.getBenefits);

module.exports = router;
