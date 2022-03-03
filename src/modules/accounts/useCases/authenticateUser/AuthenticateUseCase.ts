import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { IUsersTokensRepository } from "../../repositories/IUsersTokens Repository";

interface IRequest {
    email:string
    password:string
}
interface IResponse {
    user:{
        email: string,
        name: string
    },
    token: string
    refresh_token: string
}
@injectable()
class AuthenticateUserUseCase{
    constructor(  
        @inject("UsersRepository")
        private userRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private daysDateProvider: IDateProvider
        ){}
    
    
    async execute({email,password}:IRequest): Promise<IResponse>{
        const user = await this.userRepository.findByEmail(email)

        if(!user){
            throw new AppError("User or Password invalid!")
        }

    
        const passwordMatch = await compare(password, user.password)
       
        if(!passwordMatch){
            throw new AppError("User or Password invalid!")
        }

        const token  = sign({},auth.secret_token,{
            subject: user.id,
            expiresIn: auth.expires_in_token
        })

        const refresh_token = sign({email},auth.secret_refresh_token,{
            subject: user.id,
            expiresIn: auth.expires_refresh_token
        })
        const refresh_token_expires_date = this.daysDateProvider.addDays(auth.expires_refresh_token_days)
       
        await this.usersTokensRepository.create({
            expires_date: refresh_token_expires_date,
            refresh_token,
            user_id: user.id
        })

        const response: IResponse = {
            user: {
                email: user.email,
                name: user.name
            },
            token,
            refresh_token
        }
        
        return  response
    }
}


export {AuthenticateUserUseCase}