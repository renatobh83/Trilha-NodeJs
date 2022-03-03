import { getRepository, Repository } from "typeorm";
import { User } from "../../infra/typeorm/entities/User";

import {hash} from "bcryptjs"
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";
class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }
  
  
    async create({name,driver_license,email,password ,avatar,id}: ICreateUserDTO): Promise<void> {

        const passwordHash = await hash(password,8)
     
        const user = this.repository.create({
            driver_license,
            email,
            name,
            password: passwordHash,
            avatar,
            id
     
        })
        await this.repository.save(user)
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email})
        return user
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)
        return user
    }
}

export {UsersRepository}