const Router = require('express');
const router = new Router();
const partnerController = require('../../controllers/PABO-piece/partnerController');

router.post('/', partnerController.createPartner);
router.post('/:id_target/user/:id_user', partnerController.addPartner);
router.get('/show', partnerController.getPartners);
router.get('/', partnerController.getMyPartners);

module.exports = router;
