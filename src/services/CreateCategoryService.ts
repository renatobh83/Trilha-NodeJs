import { CategoryRepository } from "../repositories/CategoryRepository"


interface IRequest{
    name:string;
    description:string
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoryRepository){
        
    }
    execute({description,name}:IRequest){    
    const categoryAlereadyExists = this.categoriesRepository.findByName(name)

    if(categoryAlereadyExists) 
      {
          throw new Error("Category already Exists")
      }
    this.categoriesRepository.create({name, description})
    }


}


export {CreateCategoryService}