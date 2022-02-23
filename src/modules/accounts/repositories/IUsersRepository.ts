import { User } from "../entities/User";

interface ICreateUserDTO {
    name:string
    email:string
    driver_license:string,
    password:string
}

interface IUsersRepository {
     create(data:ICreateUserDTO): Promise<void>
     findByEmail(email: string): Promise<User>
     findById(id: string): Promise<User>
}


export { IUsersRepository,ICreateUserDTO}