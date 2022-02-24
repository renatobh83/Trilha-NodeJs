import { User } from "../infra/typeorm/entities/User";

interface ICreateUserDTO {
    name:string
    email:string
    driver_license:string,
    password:string,
    id?: string,
    avatar?: string
}

interface IUsersRepository {
     create(data:ICreateUserDTO): Promise<void>
     findByEmail(email: string): Promise<User>
     findById(id: string): Promise<User>
}


export { IUsersRepository,ICreateUserDTO}