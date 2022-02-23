import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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
}
@injectable()
class AuthenticateUserUseCase{
    constructor(  
        @inject("UsersRepository")
    private userRepository: IUsersRepository){}
    
    
    async execute({email,password}:IRequest): Promise<IResponse>{
        const user = await this.userRepository.findByEmail(email)

        if(!user){
            throw new AppError("User or Password invalid!")
        }

        const passwordMatch = await compare(password, user.password)
        
        if(!passwordMatch){
            throw new AppError("User or Password invalid!")
        }

        const token  = sign({},"6ac703d3b6dbcb8a13bdee984879452c",{
            subject: user.id,
            expiresIn: "1d"
        })

        const response: IResponse = {
            user: {
                email: user.email,
                name: user.name
            },
            token
        }
        
        return  response
    }
}


export {AuthenticateUserUseCase}