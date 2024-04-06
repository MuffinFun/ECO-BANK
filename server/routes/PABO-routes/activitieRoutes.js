const Router = require('express');
const router = new Router();
const activitieController = require('../../controllers/PABO-piece/activitieController');

router.post('/create', activitieController.createActivitie);
router.get('/show', activitieController.getActivities);
router.post('/', activitieController.addActivitie);
router.get('/', activitieController.getMyActivities);

module.exports = router;
