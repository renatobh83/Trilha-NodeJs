import { Request, Response } from "express";
import { container } from "tsyringe";
import { ResetPassworUserUseCase } from "./ResetPassworUserUseCase";

class ResetPasswordUserController{
    async handle(request:Request, response:Response): Promise<Response>{
        const resetPassworUserUseCase = container.resolve(ResetPassworUserUseCase)
        const { token} = request.query
        const {password} = request.body
        
        await resetPassworUserUseCase.execute({token: String(token), password})


        return response.send()
    }
}


export {ResetPasswordUserController}