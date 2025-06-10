// utils/emailService.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendEmail({ to, subject, html }) {
    return transporter.sendMail({
        from: `"WerneTech" <${process.env.SMTP_USER}>`,
        to,
        subject,
        html,
    });
}
