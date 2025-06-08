import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config();

if (!process.env.RESEND_API_KEY) {
    console.log("Provide RESEND_API in the side from the .env file")
}

const resend = new Resend(process.env.RESEND_API_KEY);


const sendEmail = async ({ sendTO, subject, html }) => {

    try {

        const { data, error } = await resend.emails.send({
            from: 'myPortfolio <onboarding@resend.dev>',
            to: sendTO,
            subject: subject,
            html: html,
        });

        if (error) {
            return console.log({ error });
        }

        return data;

    } catch (error) {
        console.log("error catch from sendEmail.js");
    }

}

export default sendEmail