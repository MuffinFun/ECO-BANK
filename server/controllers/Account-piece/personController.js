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
        user_sex: userSex,
        user_age: userAge,
        user_home_adress: userHomeAdress,
        user_phone_number: userPhoneNumber,
        work_place: workPlace,
        work_income: workIncome,
        creadit_history: creaditHistory,
        credit_can_confirmed: creditCanConfirmed,
        account_id: idAccount,
      });

      return res.json(person);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new personController();
