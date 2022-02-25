import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { Specification } from "../../infra/typeorm/entities/Specification"
import { ISpecificationRepository } from "../../repositories/Implementations/ISpecificationRepository"


interface IRequest{
    name:string;
    description:string
}
@injectable()
class CreateSpecificationUseCase {
    constructor(@inject("SpecificationRepository") private specificationRepository: ISpecificationRepository){
        
    }
    async execute({description,name}:IRequest): Promise<Specification>{    
    const specificationAlereadyExists = await this.specificationRepository.findByName(name)

    if(specificationAlereadyExists) 
      {
          throw new AppError("Specification already Exists")
      }
    const specification =   await this.specificationRepository.create({name, description})

    return specification
    }


}


export {CreateSpecificationUseCase}