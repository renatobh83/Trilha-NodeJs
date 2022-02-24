import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../../shared/errors/AppError"
import { ISpecificationRepository } from "../../../repositories/Implementations/ISpecificationRepository"


interface IRequest{
    name:string;
    description:string
}
@injectable()
class CreateSpecificationUseCase {
    constructor(@inject("SpecificationRepository") private specificationRepository: ISpecificationRepository){
        
    }
    async execute({description,name}:IRequest): Promise<void>{    
    const categoryAlereadyExists = await this.specificationRepository.findByName(name)

    if(categoryAlereadyExists) 
      {
          throw new AppError("Category already Exists")
      }
    await this.specificationRepository.create({name, description})
    }


}


export {CreateSpecificationUseCase}