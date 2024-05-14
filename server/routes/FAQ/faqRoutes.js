const Router = require('express');
const router = new Router();
const faqController = require('../../controllers/FAQ/faqController');

router.post('/', faqController.addFaqQuestion);
router.get('/', faqController.getFAQ);

module.exports = router;
