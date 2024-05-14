const Router = require('express');
const router = new Router();

const paboRoutes = require('./PABO-routes/paboRoutes');

const accountRoutes = require('./Account-routes/accountRoutes');
const bankAccountRoutes = require('./bank-acc-routes/bankAccountRoutes');
const creditCardsRoutes = require('./bank-acc-routes/creditCardRoutes');
const personRoutes = require('./person-routes/person-routes');
const transactionRoutes = require('./transaction-routes/transactionRoutes');

router.use('/pabo', paboRoutes);

router.use('/account', accountRoutes);

router.use('/bank-account', bankAccountRoutes);
router.use('/credit-card', creditCardsRoutes);

router.use('/person-thing', personRoutes);

router.use('/transaction', transactionRoutes);

module.exports = router;
