import { ICategoriesRepository } from "../../repositories/Implementations/ICategoriesRepository"
import { ISpecificationRepository } from "../../repositories/Implementations/ISpecificationRepository"


interface IRequest{
    name:string;
    description:string
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository){
        
    }
    execute({description,name}:IRequest): void{    
    const categoryAlereadyExists = this.specificationRepository.findByName(name)

    if(categoryAlereadyExists) 
      {
          throw new Error("Category already Exists")
      }
    this.specificationRepository.create({name, description})
    }


}


export {CreateSpecificationUseCase}