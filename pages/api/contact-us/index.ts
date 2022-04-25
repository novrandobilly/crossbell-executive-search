import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
const PASSWORD = process.env.NODEMAILER_PASSWORD;

const contactHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'crossbellcorps@gmail.com',
        pass: PASSWORD,
      },
    });

    const { subject, name, email, phone, message } = req.body;

    const emailData = {
      from: 'crossbellcorps@gmail.com',
      to: 'novrandobilly@gmail.com',
      subject: subject,
      text: 'Crossbell Executive Search',
      html: `<div>
         <h4>Name: ${name}</h4>
         <h4>Email: ${email}</h4>
         <h4>Phone: ${phone}</h4>
         <p>${message}</p>
      </div>`,
    };

    transporter.sendMail(emailData, (err, info) => {
      if (err) {
        res.status(500).json({
          message:
            'Internal Server Error. Please try again later or contact us directly through the email or phone number below. We are sorry for the inconvenience.',
        });
      }
    });
    res
      .status(201)
      .json({ message: 'Thank you for your inquiry. Your message has been successfully sent to Envien Studio.' });
  }
};

export default contactHandler;
