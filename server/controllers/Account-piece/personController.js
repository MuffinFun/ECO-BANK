const { UserPerson } = require('../../models/models');
const ApiError = require('../../error/ApiError');

class personController {
  async createPerson(req, res) {
    try {
      const {
        userSex,
        userAge,
        userHomeAdress,
        userPhoneNumber,
        workPlace,
        workIncome,
        idAccount,
        creaditHistory,
        creditCanConfirmed,
      } = req.body;

      const person = await UserPerson.create({
        userSex,
        userAge,
        userHomeAdress,
        userPhoneNumber,
        workPlace,
        workIncome,
        creaditHistory,
        creditCanConfirmed,
        accountId: idAccount,
      });

      return res.json(person);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new personController();
