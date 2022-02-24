import {v4 as uuid} from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm"
import { Category } from "./Category";

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

    @Column()
    available: boolean

    @CreateDateColumn()
    created_at: Date
    
    @ManyToOne(()=> Category)
    @JoinColumn({name: "category_id"})
    category: Category

    @Column()
    category_id: string


    constructor(){
        if(!this.id)
        {
            this.id = uuid()
            this.available = true
        }
    }
}

export { Car }