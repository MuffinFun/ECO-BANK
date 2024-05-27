const ApiError = require('../../error/ApiError');
const { Transaction, TransactionInfo } = require('../../models/models');

class transactionController {
  async createTransaction(req, res, next) {
    try {
      const {
        transactionType,
        transactionSum,
        personId,
        companyId,
        purpose,
        checknum,
        bankComission,
        transactionDescription,
      } = req.body;

      const transaction = await Transaction.create(
        {
          transaction_type: transactionType,
          transaction_sum: transactionSum,
          person_transaction_id: personId || null,
          company_transaction_id: companyId || null,
          transaction_info: {
            purpose,
            checknum,
            bank_comission: bankComission,
            transaction_description: transactionDescription,
          },
        },
        { include: { model: TransactionInfo, as: 'transaction_info' } }
      );

      return res.json(transaction);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getTransaction(req, res, next) {
    try {
      const { transactionId } = req.params;

      const transaction = await Transaction.findOne({
        where: { id_transaction: transactionId },
        include: { model: TransactionInfo, as: 'transaction_info' },
      });

      return res.json(transaction);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getTransactions(req, res, next) {
    try {
      const { typeUserId, role } = req.params;

      if (role.toUpperCase() === 'COMPANY') {
        const transactions = await Transaction.findAndCountAll({
          where: { company_transaction_id: typeUserId },
        });

        return res.json(transactions);
      } else if (role.toUpperCase() === 'PERSON') {
        const transactions = await Transaction.findAndCountAll({
          where: { person_transaction_id: typeUserId },
        });

        return res.json(transactions);
      } else {
        throw new Error('something went wrong :(');
      }
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new transactionController();
