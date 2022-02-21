import { Specification } from "../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./Implementations/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository{
    private specifictions: Specification[]


    constructor(){
        this.specifictions=  []
    }

    findByName(name: string): Specification {
      return null
    }
    list(): Specification[] {
       return []
    }
    create({ description, name }: ICreateSpecificationDTO): void {
        const specifiction = new Specification()

        Object.assign(specifiction,{
            name,
            description,
            created_at: new Date()
        })

        this.specifictions.push(specifiction)
    }
}




export {SpecificationRepository}