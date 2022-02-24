import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../../../modules/accounts/repositories/UsersRepository";

interface IPayload {
    sub : string
}
export async function ensureAuthenticated(request:Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization

    if(!authHeader){
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
      const {sub:userId} = verify(token,"6ac703d3b6dbcb8a13bdee984879452c") as IPayload
      
        const usersRepository = new UsersRepository()
        const user = await usersRepository.findById(userId)

        if(!user) {
            throw new AppError("User does not exists!", 401)
        }
        
        request.user = {
            id: user.id
        }
      next()    
    } catch (error) {
        throw new AppError("User does not exists!", 401)
    }
    
}