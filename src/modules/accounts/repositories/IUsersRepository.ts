interface ICreateUserDTO {
    name:string

    email:string
    driver_license:string,
    password:string
}

interface IUsersRepository {
     create(data:ICreateUserDTO): Promise<void>
}


export { IUsersRepository,ICreateUserDTO}