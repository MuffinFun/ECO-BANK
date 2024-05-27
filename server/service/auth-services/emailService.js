const ApiError = require('../../error/ApiError');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: `account activation - ${process.env.API_URL}`,
        text: 'testing',
        html: `
            <div>
                <h1>For activation</h1>
                <a href="${link}">${link}</a>
            </div>
        `,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new EmailService();
