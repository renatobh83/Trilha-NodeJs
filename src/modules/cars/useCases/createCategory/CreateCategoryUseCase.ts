import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"


interface IRequest{
    name:string;
    description:string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){
        
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


export {CreateCategoryUseCase}