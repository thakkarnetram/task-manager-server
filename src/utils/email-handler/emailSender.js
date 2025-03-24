const nodeMailer = require('nodemailer');

exports.sendResetPasswordLink = async (email, link) => {
    let transporter = nodeMailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_ID,
                pass: process.env.GMAIL_PASS
            }
        }
    )
    const mailOptions = {
        from: process.env.GMAIL_ID,
        to: email,
        subject: "Reset Password",
        generateTextFromHTML: true,
        html: `
            <h2>Hello, ${email}</h2>
            <h3>Reset your password</h3>
            <p>Click <a href="${link}">here</a> to reset .</p>
            <h4>Thank you . </h4>
        `
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Sent Email to :', email)
    } catch (err) {
        console.log('Error', err)
    }
}
