import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../../../modules/accounts/repositories/Implementations/UsersRepository";
import auth from "../../../../config/auth";
import { UsersTokensRepository } from "../../../../modules/accounts/repositories/Implementations/UsersTokensRepository";

interface IPayload {
    sub : string
}
export async function ensureAuthenticated(request:Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization
    const userTokenRefresh = new UsersTokensRepository()

    if(!authHeader){
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const {sub:userId} = verify(token,auth.secret_refresh_token) as IPayload
      
        const usersRepository = new UsersRepository()
        const user = await userTokenRefresh.findByUserIdAndRefreshToken(userId, token)

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