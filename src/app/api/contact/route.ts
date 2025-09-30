import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,       // your Gmail
      pass: process.env.GMAIL_PASS,       // app password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,           // receive on your Gmail
    subject: `Portfolio Contact: ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err });
  }
}
