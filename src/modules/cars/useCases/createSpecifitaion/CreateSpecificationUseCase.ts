import { inject, injectable } from "tsyringe"
import { ISpecificationRepository } from "../../repositories/Implementations/ISpecificationRepository"


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
          throw new Error("Category already Exists")
      }
    await this.specificationRepository.create({name, description})
    }


}


export {CreateSpecificationUseCase}