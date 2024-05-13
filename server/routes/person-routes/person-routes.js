const Router = require('express');
const router = new Router();
const billRoutes = require('./billsRoutes');
const taxRoutes = require('./taxRoutes');
const creditRoutes = require('./creditRoutes');
const fillingRoutes = require('./fillingsRoutes');
const feesRoutes = require('./feesRoutes');
const userMessageRoutes = require('./userMessageRoutes');
const onlinePaymentRoutes = require('./onlinePaymentsRoutes');

router.use('/bill', billRoutes);
router.use('/tax', taxRoutes);
router.use('/credit', creditRoutes);
router.use('/filling', fillingRoutes);
router.use('/fees', feesRoutes);
router.use('/online-payment', onlinePaymentRoutes);
router.use('/user-message', userMessageRoutes);

module.exports = router;
