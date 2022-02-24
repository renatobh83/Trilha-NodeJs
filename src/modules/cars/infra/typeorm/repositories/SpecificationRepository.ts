import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../../../repositories/Implementations/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository{
    
    private repository: Repository<Specification>


    constructor(){
        this.repository = getRepository(Specification)
    }

    async findByName(name: string): Promise<Specification> {
      const specifiction = await this.repository.findOne({name})
      return specifiction
    }
    async list(): Promise<Specification[]> {
        const all  = await this.repository.find()
       return all
    }
    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specifiction = this.repository.create({
            name,description
        })

        await this.repository.save(specifiction)

    }
}




export {SpecificationRepository}