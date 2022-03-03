import { IMailProvider } from "../IMailProvider";
import nodemailer,{Transporter} from "nodemailer"
import handlebars from "handlebars";
import fs from "fs"


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
     async sendmail(to: string, subject: string, variables:any, path:string): Promise<string> {
            const templateFileContent = fs.readFileSync(path).toString("utf-8")

            const templateParse = handlebars.compile(templateFileContent)

            const templateHtml = templateParse(variables)


            const message =  await  this.client.sendMail({
                to,
                from: "RentX <noreplay@rentex.com.br",
                subject,
                html: templateHtml
            })

            
            return  nodemailer.getTestMessageUrl(message) as string
    }

}

export {EthrealMailProvider}