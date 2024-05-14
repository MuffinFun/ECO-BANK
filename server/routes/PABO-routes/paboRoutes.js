const Router = require('express');
const router = new Router();
const partnerRoutes = require('./parnterRoutes');
const acitiviteRoutes = require('./activitieRoutes');
const benefitRoutes = require('./benefitRoutes');
const offerRoutes = require('./offerRoutes');

router.use('/partner', partnerRoutes);
router.use('/activitie', acitiviteRoutes);
router.use('/benefit', benefitRoutes);
router.use('/offer', offerRoutes);

module.exports = router;
