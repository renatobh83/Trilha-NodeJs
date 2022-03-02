import { inject, injectable } from "tsyringe";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class CreateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute({driver_license,name,email,password}: ICreateUserDTO): Promise<void>{
        await this.userRepository.create({driver_license,name,email,password})

    }
}

export {CreateUserUseCase}