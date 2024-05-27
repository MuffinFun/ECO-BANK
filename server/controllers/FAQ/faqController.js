const ApiError = require('../../error/ApiError');
const { Faq } = require('../../models/models');

class faqController {
  async addFaqQuestion(req, res, next) {
    try {
      const { question, answer } = req.body;

      const faq = await Faq.create({
        faq_question: question,
        faq_answer: answer,
      });

      return res.json(faq);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getFAQ(req, res, next) {
    try {
      const faq = await Faq.findAndCountAll();
      return res.json(faq);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new faqController();
