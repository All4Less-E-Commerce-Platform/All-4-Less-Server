import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';
import {} from 'dotenv/config';

const { EMAIL, EMAIL_PASSWORD } = process.env;

export interface MailBuilder {
  name: string;
  intro: string;
  outro: string;
  greeting: string;
  signature: string;
}
export interface MailOptions {
  to: string;
  subject: string;
  text: string;
  message: string;
}
export const generateEmail = (body: MailBuilder) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    // textDirection: 'ltl',
    product: {
      name: 'MSS',
      link: 'https://mss-client.vercel.app/',
      copyright: 'Copyright reserved by MSS @ 2023',
    },
  });

  const email = { body };

  const emailBody = mailGenerator.generate(email);
  const emailText = mailGenerator.generatePlaintext(email);

  return { emailBody, emailText };
};

export const sendEmail = async ({
  to,
  subject,
  text,
  message,
}: MailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: `${EMAIL}`,
      pass: `${EMAIL_PASSWORD}`,
    },
  });

  const mailOptions = {
    from: `${EMAIL}`,
    to,
    subject,
    text,
    html: message,
  };

  await transporter.sendMail(mailOptions);
};
