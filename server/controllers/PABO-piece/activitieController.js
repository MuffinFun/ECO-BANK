const {
  Activitie,
  AvailableActivitie,
  Company,
  UserPerson,
} = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ActivitieController {
  async createActivitie(req, res) {
    try {
      const { availableName, availableDescription } = req.body;

      let fileName;

      if (req.files) {
        let { availableImg } = req.files;

        fileName = `available-activitie__${uuid.v4()}.png`;

        availableImg.mv(
          path.resolve(__dirname, '..', '..', 'static', 'activities', fileName)
        );
      }

      const activitie = await AvailableActivitie.create({
        available_activitie_name: availableName,
        available_activitie_description: availableDescription,
        available_activitie_img: fileName,
      });

      return res.json(activitie);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async addActivitie(req, res) {
    try {
      let { name, personId, companyId } = req.body;

      let fileName;

      if (req.files) {
        let { img } = req.files;

        fileName = `activitie__${uuid.v4()}.png`;

        img.mv(
          path.resolve(__dirname, '..', '..', 'static', 'activities', fileName)
        );
      }

      const activitie = await Activitie.create({
        activitie_name: name,
        activitie_img: fileName || 'none',
      });

      if (companyId) {
        await activitie.addCompany(+companyId);
      } else if (personId) {
        await activitie.addPerson(+personId);
      } else {
        throw new Error('something went wrong in activitie controller');
      }

      return res.json(activitie);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getActivities(req, res) {
    try {
      const { role } = req.params;
      if (role.toUpperCase() === 'PERSON') {
        const activities = await Activitie.findAndCountAll({
          include: {
            model: UserPerson,
            as: 'person',
          },
        });

        return res.json(activities);
      } else if (role.toUpperCase() === 'COMPANY') {
        const activities = await Activitie.findAndCountAll({
          include: {
            model: Company,
            as: 'company',
          },
        });

        return res.json(activities);
      } else {
        throw new Error('something went wrong');
      }
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getAvalableActivities(req, res) {
    try {
      const availableActivities = await AvailableActivitie.findAndCountAll();
      return res.json(availableActivities);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new ActivitieController();
