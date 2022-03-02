import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../repositories/IUsersTokens Repository";
import  {v4 as uuid} from "uuid"
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "../../../../shared/container/providers/MailProvider/IMailProvider";
@injectable()
class SendForgotPasswordMailUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokenRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("EthrealMailProvider")
        private mailProvider: IMailProvider        
    ){}
    async execute(email:string): Promise<void> {
        const user = await this.usersRepository.findByEmail(email)

        if(!user) {
            throw new AppError("Users does not exists")
        }
        const token = uuid()
        const expires_date = this.dateProvider.addHours(3)
        await this.usersTokenRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date
        })

        await this.mailProvider.sendmail(email,"Recuperacao de senha",`o link para o reset é ${token}`)
    }
}


export { SendForgotPasswordMailUseCase}