import { sign, verify } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"
import auth from "../../../../config/auth"
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider"
import { AppError } from "../../../../shared/errors/AppError"
import { IUsersTokensRepository } from "../../repositories/IUsersTokens Repository"

interface IPayload {
    sub:string
    email:string
}

@injectable()
class RefreshTokenUseCase {

    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private daysDateProvider: IDateProvider
    ){}
    async excute(token:string): Promise<string> {
      const {email, sub}= verify(token,auth.secret_refresh_token) as IPayload

      const user_id = sub

     const userToken =  await this.usersTokensRepository.findByUserIdAndRefreshToken(user_id,token)

     if(!userToken) {
         throw new AppError("Refresh Token erro!")
     }
     await this.usersTokensRepository.deleteById(userToken.id)

     
     const refresh_token = sign({email},auth.secret_refresh_token,{
        subject: sub,
        expiresIn: auth.expires_refresh_token
    })
    const refresh_token_expires_date = this.daysDateProvider.addDays(auth.expires_refresh_token_days)
    
    await this.usersTokensRepository.create({
        expires_date:refresh_token_expires_date, 
        user_id,
        refresh_token
    })
    return refresh_token
   
    }
}



export { RefreshTokenUseCase}