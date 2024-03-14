const Router = require('express');
const router = new Router();
const offerController = require('../../controllers/PABO-piece/offerController');

router.post('/', offerController.createOffer);
router.get('/:id_offer', offerController.getOffers);
router.get('/', offerController.getOffer);

module.exports = router;
