const { UserPerson, UserAccount } = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class accountController {
  async createAccount(req, res) {
    try {
      const {
        userSex,
        userAge,
        userHomeAdress,
        userPhoneNumber,
        workPlace,
        workIncome,
        name,
        surName,
        thirdName,
        email,
        role,
        creditHistory,
        creditCanConfirmed,
      } = req.body;

      let { img } = req.files;

      const filename = `account__${uuid.v4()}.png`;

      img.mv(
        path.resolve(__dirname, '..', '..', 'static', 'accounts', filename)
      );

      const account = await UserAccount.create({
        name,
        surName,
        thirdName,
        email,
        role,
        img: filename,
      });

      if (account) {
        await UserPerson.create({
          userSex,
          userAge,
          userHomeAdress,
          userPhoneNumber,
          workPlace,
          workIncome,
          creditHistory,
          creditCanConfirmed,
          accountId: account.id_account,
        });
      }

      return res.json(account);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getAccounts(req, res) {
    try {
      const accounts = await UserAccount.findAll({ include: UserPerson });
      return res.json(accounts);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new accountController();
