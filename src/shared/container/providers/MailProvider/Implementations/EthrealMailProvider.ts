import { injectable } from "tsyringe";
import { IMailProvider } from "../IMailProvider";
import nodemailer,{Transporter} from "nodemailer"

class EthrealMailProvider implements IMailProvider {
    private client: Transporter
    constructor(){
        nodemailer.createTestAccount().then(account =>{
            const tranporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }

            })
            this.client  = tranporter
        }).catch(error => console.log(error))
    }

     async sendmail(to: string, subject: string, body: string): Promise<void> {
            const message =  await  this.client.sendMail({
                to,
                from: "RentX <noreplay@rentex.com.br",
                subject,
                text: body,
                html: body
            })

            console.log('Message sent: %s', message.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }

}

export {EthrealMailProvider}