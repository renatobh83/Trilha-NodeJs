import { inject, injectable } from "tsyringe";
import { User } from "../../infra/typeorm/entities/User";
import { IUserResponseDTO, UserMap } from "../../mapper/UserMap";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ProfileUserUseCase{
    constructor(
        @inject("UsersRepository")
        private usersRepository:IUsersRepository
    ){}
    async execute(user_id:string):Promise<IUserResponseDTO>{
        const user = await this.usersRepository.findById(user_id)


        return UserMap.toDTO(user)

    }
}


export {ProfileUserUseCase}