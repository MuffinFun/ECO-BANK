const Router = require('express');
const router = new Router();
const userMessageController = require('../../controllers/person-controllers/userMessageController');

router.post('/', userMessageController.createMessage);
router.get('/:personId', userMessageController.getAllMessages);
router.get('/:personId/text/:messageText', userMessageController.getMessages);

module.exports = router;
