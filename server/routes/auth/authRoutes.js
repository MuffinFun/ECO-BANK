const Router = require('express');
const router = new Router();
const authController = require('../../controllers/auth/authController');

router.post('/', authController.test);
router.get('/');

module.exports = router;
