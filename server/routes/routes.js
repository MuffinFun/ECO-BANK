const Router = require('express');
const router = new Router();
const partnerRoutes = require('./PABO-routes/parnterRoutes');
const acitiviteRoutes = require('./PABO-routes/activitieRoutes');
const benefitRoutes = require('./PABO-routes/benefitRoutes');
const offerRoutes = require('./PABO-routes/offerRoutes');
const accountRoutes = require('./Account-routes/accountRoutes');
const bankAccountRoutes = require('./bank-acc-routes/bankAccountRoutes');
const creditCardsRoutes = require('./bank-acc-routes/creditCardRoutes');
const personRoutes = require('./person-routes/person-routes');

router.use('/partners', partnerRoutes);
router.use('/activities', acitiviteRoutes);
router.use('/benefits', benefitRoutes);
router.use('/offers', offerRoutes);
router.use('/account', accountRoutes);
router.use('/bank-account', bankAccountRoutes);
router.use('/credit-card', creditCardsRoutes);
router.use('/person-thing', personRoutes);

module.exports = router;
