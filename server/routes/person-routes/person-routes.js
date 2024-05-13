const Router = require('express');
const router = new Router();
const billRoutes = require('./billsRoutes');
const taxRoutes = require('./taxRoutes');
const creditRoutes = require('./creditRoutes');
const fillingRoutes = require('./fillingsRoutes');
const feesRoutes = require('./feesRoutes');
const messageCenterRoutes = require('./messageCenterRoutes');
const onlinePaymentRoutes = require('./onlinePaymentsRoutes');

router.use('/bill', billRoutes);
router.use('/tax', taxRoutes);
router.use('/credit', creditRoutes);
router.use('/filling', fillingRoutes);
router.use('/fees', feesRoutes);
router.use('/online-payments', onlinePaymentRoutes);
router.use('/message-center', messageCenterRoutes);

module.exports = router;
