const Router = require('express');
const router = new Router();
const messageCenterController = require('../../controllers/person-controllers/messageCenterController');

router.post('/', messageCenterController.createMessage);
router.get('/:messageId', messageCenterController.getMessage);
router.get('/', messageCenterController.getMessages);

module.exports = router;
