const nodemailer = require('nodemailer');

const SendEmailHelper = async (EmailTo, EmailText, EmailSubject) => {
    let dakPeon = nodemailer.createTransport({
        host: 'mail.teamrabbil.com',
        port: 25,
        secure: false,
        auth: { user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs' },
        tls: { rejectUnauthorized: false },
    });

    let mailOptions = {
        from: 'Task Manager MERN <info@teamrabbil.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    return  await dakPeon.sendMail(mailOptions)
}

module.exports=SendEmailHelper