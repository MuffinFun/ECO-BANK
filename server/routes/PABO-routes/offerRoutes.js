const Router = require('express');
const router = new Router();
const offerController = require('../../controllers/PABO-piece/offerController');

router.post('/', offerController.createOffer);
router.get('/:typeUserId/role/:role', offerController.getOffers);
router.get('/:offerId', offerController.getOffer);

module.exports = router;
