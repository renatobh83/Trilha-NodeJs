import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"



@Entity("categories")
class Category{

    @Column()
    name: string;
    @Column()
    description: string;

    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { Category}