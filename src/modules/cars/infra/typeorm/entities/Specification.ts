import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("specifications")
class Specification {
    
    @Column()
    name: string;
  
    @Column()
    description: string;
   
    @PrimaryColumn()
    id: string;
   
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Specification }