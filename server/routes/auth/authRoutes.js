const Router = require('express');
const router = new Router();
const authController = require('../../controllers/auth/authController');
const { body } = require('express-validator');
const authMiddleware = require('../../middlewares/auth-middleware');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 24 }),
  authController.registration
);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/activate/:link', authController.activate);
router.get('/refresh', authController.refresh);
router.get('/users', authMiddleware, authController.getUsers);

module.exports = router;
