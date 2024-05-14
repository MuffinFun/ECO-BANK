const Router = require('express');
const router = new Router();
const activitieController = require('../../controllers/PABO-piece/activitieController');

router.post('/add-available', activitieController.createActivitie);
router.post('/', activitieController.addActivitie);
router.get('/show-available', activitieController.getAvalableActivities);
router.get('/:role', activitieController.getActivities);

module.exports = router;
