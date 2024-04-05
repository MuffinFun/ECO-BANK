const Router = require('express');
const router = new Router();
const offerController = require('../../controllers/PABO-piece/offerController');

router.post('/', offerController.createOffer);
router.get('/', offerController.getOffers);
router.get('/:id_offer', offerController.getOffer);

module.exports = router;
