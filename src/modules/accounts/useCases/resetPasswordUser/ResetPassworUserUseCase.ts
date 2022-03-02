import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../repositories/IUsersTokens Repository";
import { hash } from "bcryptjs";

interface IRequest {
    token: string
    password:string
}

@injectable()
class ResetPassworUserUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({token,password}: IRequest){
        const userToken = await this.usersTokensRepository.findByRefreshToken(token)

        if(!userToken){
            throw new AppError("Token is invalid")
        }
        if(this.dateProvider.conmpareIfBefore(userToken.expires_date,this.dateProvider.dateNow())){
            throw new AppError("token expired")
        }

        const user = await this.usersRepository.findById(userToken.user_id)

        user.password = await hash(password,8)

        await this.usersRepository.create(user)

        await this.usersTokensRepository.deleteById(userToken.id)
    }
}


export { ResetPassworUserUseCase}