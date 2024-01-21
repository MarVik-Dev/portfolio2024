"use server"

import nodemailer from "nodemailer"
import * as handlebars from "handlebars"
import { CopyMail } from "./templates/copyMail";


export async function send(data: {email:string, name:string, content:string, get:any}) {
console.log("🚀 ~ file: mail.ts:9 ~ send ~ data:", data)


   return await sendMail({
        to: data.get("email"),
        subject: "Copie de l'email envoyé à MarVik!",
        body: await compileWelcomeTemplate(data.get("name"), data.get("content"))
    });

}

export async function sendMail({ to, subject, body }: { to: string;  subject: string; body: string; }) {
    const { SMTP_HOST, SMTP_EMAIL, SMTP_PASSWORD } = process.env

    // HOST PROVIDER
    let transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        },
    });
    // check if all required datas are present
    try {
        await transport.verify()
    } catch (error) {
        console.log("🚀 ~ file: mail.ts:39 ~ sendMail ~ error:", error)
        return
    }

    try {
        await transport.sendMail({ from: SMTP_EMAIL, to, bcc: SMTP_EMAIL, subject, html: body })

    } catch (error) {
        console.log("🚀 ~ file: mail.ts:48 ~ sendMail ~ error:", error)
        return
    }
}
// The template with use user data in the template body. 
export async function compileWelcomeTemplate(name: string, content: string) {
    const template = handlebars.compile(CopyMail)
    const htmlBody = template({
        name: name,
        message: content
    })
    return htmlBody
}

