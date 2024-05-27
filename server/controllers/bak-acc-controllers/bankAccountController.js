const ApiError = require('../../error/ApiError');
const { BankAccount, BankAccountBalance } = require('../../models/models');

class BankAccountController {
  async createBankAccount(req, res, next) {
    try {
      const { bankAccName, userId, initialSum } = req.body;

      const bankAccount = await BankAccount.create(
        {
          bank_account_name: bankAccName,
          user_bank_id: userId,
          bank_balance: {
            total_balance: initialSum || 0,
          },
        },
        { include: { model: BankAccountBalance, as: 'bank_balance' } }
      );

      return res.json(bankAccount);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getBalance(req, res, next) {
    try {
      const { bankId } = req.params;
      const balance = await BankAccountBalance.findOne({
        where: { bank_id: bankId },
      });
      return res.json(balance);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getBankAccounts(req, res, next) {
    try {
      const bankAccounts = await BankAccount.findAll({
        include: { model: BankAccountBalance, as: 'bank_balance' },
      });
      return res.json(bankAccounts);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateBalance(req, res, next) {
    try {
      const { newSum } = req.body;
      const { bankId } = req.params;
      const newBalance = await BankAccountBalance.update(
        {
          total_balance: newSum,
        },
        { where: { bank_id: bankId }, returning: true }
      );

      return res.json(newBalance[1][0]);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new BankAccountController();
