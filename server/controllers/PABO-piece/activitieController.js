const { Activitie, AvailableActivitie } = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ActivitieController {
  async createActivitie(req, res) {
    try {
      let { availableActivitieName, availableActivitieDescription } = req.body;
      let { availableActivitieImg } = req.files;

      let fileName = `${uuid.v4()}.png`;

      availableActivitieImg.mv(
        path.resolve(__dirname, '..', 'static', 'activities', fileName)
      );

      const activitie = await AvailableActivitie.create({
        availableActivitieName,
        availableActivitieDescription,
        availableActivitieImg: fileName,
      });

      return res.json(activitie);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async addActivitie(req, res) {
    try {
      let { activitieName } = req.body;
      let { activitieImg } = req.files;

      let fileName = `${uuid.v4()}.png`;

      activitieImg.mv(
        path.resolve(__dirname, '..', 'static', 'activities', fileName)
      );

      const activitie = await Activitie.create({
        activitieName,
        activitieImg: fileName,
      });

      return res.json(activitie);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getMyActivities(req, res) {
    try {
      const activities = await Activitie.findAll();
      return res.json(activities);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getActivities(req, res) {
    try {
      const availableActivities = await AvailableActivitie.findAll();
      return res.json(availableActivities);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new ActivitieController();
