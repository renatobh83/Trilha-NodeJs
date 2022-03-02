import { UserToken } from "../infra/typeorm/entities/UserToken";

interface ICreateUserTokenDTO {
    user_id:string
    expires_date:Date
    refresh_token:string
}

interface IUsersTokensRepository {
    create({expires_date, user_id, refresh_token}:ICreateUserTokenDTO): Promise<UserToken>
    findByUserIdAndRefreshToken(user_id:string, token:string): Promise<UserToken>
    deleteById(id:string): Promise<void>
    findByRefreshToken(token:string): Promise<UserToken>
}

export {IUsersTokensRepository, ICreateUserTokenDTO}