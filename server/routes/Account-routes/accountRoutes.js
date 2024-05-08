const Router = require('express');
const router = new Router();
const accountController = require('../../controllers/Account-piece/accountController.js');
const personController = require('../../controllers/Account-piece/personController.js');
const companyController = require('../../controllers/Account-piece/companyController.js');

router.post('/', accountController.createAccount);
router.post('/person', personController.createPerson);
router.post('/company', companyController.createCompany);
router.get('/', accountController.getAccounts);
router.get('/company', companyController.getCompanies);

module.exports = router;
