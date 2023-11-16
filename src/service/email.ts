import nodemailer from 'nodemailer';
import { EmailFormData } from '@/types/contact';

const transpoter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ from, subject, message }: EmailFormData) {
  const mailData = {
    from,
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    text: message,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br />
    <p>보낸사람: ${from}</p>
    `,
  };

  return transpoter.sendMail(mailData);
}
