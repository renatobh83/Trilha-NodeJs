import { getRepository, Repository } from "typeorm";
import { UserToken } from "../../infra/typeorm/entities/UserToken";
import { IUsersTokensRepository, ICreateUserTokenDTO } from "../IUsersTokens Repository";


class UsersTokensRepository implements IUsersTokensRepository {
    private repository: Repository<UserToken>


    constructor() {
        this.repository = getRepository(UserToken)
    }


    async create({ expires_date, user_id, refresh_token }: ICreateUserTokenDTO): Promise<UserToken> {
        const userToken = this.repository.create({
            expires_date, user_id, refresh_token
        })

        await this.repository.save(userToken)

        return userToken
    }
    async findByUserIdAndRefreshToken(user_id: string, token: string): Promise<UserToken> {
        const user_tokens = await this.repository.findOne({ user_id, refresh_token: token })

        return user_tokens
    }
    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)
    }
    async findByRefreshToken(token: string): Promise<UserToken> {
        
        const userToken = await this.repository.findOne({refresh_token: token})

        return userToken
    }

}

export { UsersTokensRepository }