const ApiError = require('../../error/ApiError');
const { BankAccount, BankAccountBalance } = require('../../models/models');

class BankAccountController {
  async createBankAccount(req, res) {
    let { bankAccName, userId, initialSum } = req.body;

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
  }
  async getBalance(req, res) {
    const { bankId } = req.params;
    const balance = await BankAccountBalance.findOne({
      where: { bank_id: bankId },
    });
    return res.json(balance);
  }
  async getBankAccounts(req, res) {
    const bankAccounts = await BankAccount.findAll({
      include: { model: BankAccountBalance, as: 'bank_balance' },
    });
    return res.json(bankAccounts);
  }

  async updateBalance(req, res) {
    const { newSum } = req.body;
    const { bankId } = req.params;
    const newBalance = await BankAccountBalance.update(
      {
        total_balance: newSum,
      },
      { where: { bank_id: bankId }, returning: true }
    );

    return res.json(newBalance[1][0]);
  }
}

module.exports = new BankAccountController();
