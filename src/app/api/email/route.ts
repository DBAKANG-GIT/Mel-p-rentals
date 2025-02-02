import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, subject, message, agreePolicy } =
    await request.json();

  if (!agreePolicy) {
    return NextResponse.json(
      { error: 'You must agree to the privacy policy.' },
      { status: 400 }
    );
  }

  // Configure the SendGrid SMTP transporter
  const transport = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465, // Use 465 for SSL connections
    secure: true, // Secure connection
    auth: {
      user: 'apikey', // SendGrid requires "apikey" as the username
      pass: process.env.SENDGRID_API_KEY, // Your SendGrid API Key
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.FROM_EMAIL, // Sender's email (must match a verified sender in SendGrid)
    to: process.env.MY_EMAIL, // Recipient's email (you can replace with a specific address)
    subject: `Message from ${firstName} ${lastName} (${email}) - ${subject}`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json(null, {
    headers: {
      Allow: 'POST',
    },
    status: 405,
  });
}
