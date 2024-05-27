const { UserAccount } = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class accountController {
  async createAccount(req, res) {
    try {
      const { name, surName, thirdName, email, role } = req.body;

      let filename;

      if (req.files) {
        let { img } = req.files;

        filename = `account__${uuid.v4()}.png`;

        img.mv(
          path.resolve(__dirname, '..', '..', 'static', 'accounts', filename)
        );
      }
      
      const account = await UserAccount.create({
        name,
        sur_name: surName,
        third_name: thirdName,
        email,
        img: filename,
        role: role.toUpperCase(),
      });

      return res.json(account);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getAccounts(req, res) {
    try {
      const accounts = await UserAccount.findAll();
      return res.json(accounts);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new accountController();
