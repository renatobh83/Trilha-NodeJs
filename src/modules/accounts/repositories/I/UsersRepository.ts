import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }
    async create({name,driver_license,email,password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            driver_license,
            email,
            name,
            password,
     
        })
        await this.repository.save(user)
    }
}

export {UsersRepository}