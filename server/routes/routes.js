const Router = require('express');
const router = new Router();
const partnerRoutes = require('./PABO-routes/parnterRoutes');
const acitiviteRoutes = require('./PABO-routes/activitieRoutes');
const benefitRoutes = require('./PABO-routes/benefitRoutes');
const offerRoutes = require('./PABO-routes/offerRoutes');
const accountRoutes = require('./Account-routes/accountRoutes');

router.use('/partners', partnerRoutes);
router.use('/activities', acitiviteRoutes);
router.use('/benefits', benefitRoutes);
router.use('/offers', offerRoutes);
router.use('/account', accountRoutes);

module.exports = router;
