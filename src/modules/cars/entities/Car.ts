import {v4 as uuid} from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("cars")
class Car {

    @PrimaryColumn()
    id:string

    @Column()
    name:string
    
    @Column()
    description:string
    
    @Column()
    daily_rate:number
    
    @Column()
    license_plate:string
    
    @Column()
    fine_amount:number
    
    @Column()
    brand: string

    @CreateDateColumn()
    category_id: string


    constructor(){
        if(!this.id)
        {
            this.id = uuid()
        }
    }
}

export { Car }