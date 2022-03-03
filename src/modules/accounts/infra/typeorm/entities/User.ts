import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {Expose} from "class-transformer"
import {v4 as uuid} from "uuid"

@Entity("users")
class User{

    @PrimaryColumn()
    id: string
   
    @Column()
    name: string
   

    @Column()
    email:string
   
    @Column()
    password: string
  
    @Column()
    driver_license: string
   
    @Column({default: false})
    isAdmin: boolean

    @Column()
    avatar: string
   
   
    @CreateDateColumn()
    created_at:Date

    @Expose({ name: "avatar_ulr"})
    avatar_url():string{
        return `http://localhost:3333/avatar/${this.avatar}`
    }
    constructor(){
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export {User}