import { User } from "../infra/typeorm/entities/User";
import { classToPlain } from "class-transformer"


interface IUserResponseDTO {
    email: string, name: string, avatar: string, driver_license: string, id: string,avatar_url():string
}


class UserMap {

    static toDTO({ email, name, avatar, driver_license, id,avatar_url }: User): IUserResponseDTO {
        const user = classToPlain({ email, name, avatar, driver_license, id,avatar_url })
        return user
    }

}

export { UserMap,IUserResponseDTO}