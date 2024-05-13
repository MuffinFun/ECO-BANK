const Router = require('express');
const router = new Router();
const fillController = require('../../controllers/person-controllers/fillController');

router.post('/', fillController.createFill);
router.get('/:fillId', fillController.getFill);
router.get('/', fillController.getFillings);

module.exports = router;
