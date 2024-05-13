const nodemailer = require("nodemailer");

const sendEmail = async (name, fromUser, toUser, message) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const sendMail = await transporter.sendMail({
    from: fromUser,
    to: "strange8638@gmail.com",
    subject: "Listing Inquiry",
    html: `<div>
      <p>${name} want to buy or rent your listing.</p>
        <p>${message}</p>
    </div>`,
  });

  return sendMail;
};

module.exports = sendEmail;
