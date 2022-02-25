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
    async findByIds(ids:string[]): Promise<Specification[]> {
        const all  = await this.repository.findByIds(ids)
       return all
    }
    async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
        const specifiction = this.repository.create({
            name,description
        })

        await this.repository.save(specifiction)
        return specifiction
    }
}




export {SpecificationRepository}