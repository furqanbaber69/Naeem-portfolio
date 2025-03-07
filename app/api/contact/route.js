import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Incoming Form Data:", body);  // ✅ Log incoming request

    const { firstname, lastname, email, phone, service, message } = body;

    if (!firstname || !lastname || !email || !phone || !message) {
      console.error("❌ Missing required fields");
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailData = {
      from: process.env.EMAIL,  // ✅ Always use your own email as sender
      to: process.env.EMAIL, // ✅ Send email to yourself
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
    };

    console.log("📤 Sending Email...");
    await transporter.sendMail(mailData);
    console.log("✅ Email Sent Successfully!");

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("🔥 Server Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
