import { ICategoriesRepository } from "../repositories/ICategoriesRepository"
import { ISpecificationRepository } from "../repositories/ISpecificationRepository"


interface IRequest{
    name:string;
    description:string
}

class CreateSpecificationService {
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


export {CreateSpecificationService}