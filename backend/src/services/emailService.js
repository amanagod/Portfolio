const nodemailer = require('nodemailer');
const config = require('../config');
const logger = require('../config/logger');
const ApiError = require('../utils/ApiError');

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });
};

/**
 * Sends a contact form email.
 * @param {Object} data - { name, email, message }
 */
const sendContactEmail = async ({ name, email, message }) => {
  try {
    const transporter = createTransporter();

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact Message</h1>
        </div>
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; width: 100px;">Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Email:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <h3 style="color: #475569; margin-bottom: 10px;">Message:</h3>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
            Sent from your Portfolio Contact Form
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Portfolio Contact" <${config.email.user}>`,
      to: config.email.user,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: htmlContent,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    logger.error(`Email service error: ${error.message}`);
    throw new ApiError(500, 'Failed to send email. Please try again later.');
  }
};

module.exports = { sendContactEmail };

