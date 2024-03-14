const Router = require('express');
const router = new Router();
const partnerController = require('../../controllers/PABO-piece/partnerController');

router.post('/create', partnerController.createPartner);
router.get('/show', partnerController.getPartners);
router.post('/', partnerController.addPartner);
router.get('/', partnerController.getMyPartners);

module.exports = router;
