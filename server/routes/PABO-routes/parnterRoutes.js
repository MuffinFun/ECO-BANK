const Router = require('express');
const router = new Router();
const partnerController = require('../../controllers/PABO-piece/partnerController');

router.post('/add-available', partnerController.createPartner);
router.post('/', partnerController.addPartner);
router.get('/show-available', partnerController.getAvailablePartners);
router.get('/:role', partnerController.getPartners);

module.exports = router;
