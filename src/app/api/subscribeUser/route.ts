import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Invalid email address' },
      { status: 400 }
    );
  }

  try {
    // SendGrid Email Configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 465,
      secure: true,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY, // Set in .env
      },
    });

    // Send confirmation email to the admin
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.MY_EMAIL, // Your admin email
      subject: 'New Newsletter Subscriber',
      text: `A new user has subscribed to your newsletter.\n\nEmail: ${email}`,
    });

    // Send welcome email to the subscriber
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Welcome to Our Newsletter!',
      text: `Thank you for subscribing, ${email}! You'll receive updates soon.`,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed!', status: 201 },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription Error:', error);
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        status: 500,
      },
      { status: 500 }
    );
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
