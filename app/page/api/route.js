import { NextResponse } from "next/server"


const nodemailer = require('nodemailer');
  const POST = async (Request) => {
    const {name, email, message} = Request.body
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        }
    });
    
    const mailData = {
        from: email,
        to: process.env.EMAIL,
        subject: `Message From ${name}`,
        text: message
    }
    
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
        console.log(err)
        return NextResponse.error(new Error('Something went wrong'))
        } else {
        console.log(info)
        return NextResponse.next()
        }
    })
}



export default POST