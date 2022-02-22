import { ICategoriesRepository } from "../../repositories/Implementations/ICategoriesRepository"


interface IRequest{
    name:string;
    description:string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){
        
    }
    async execute({description,name}:IRequest): Promise<void>{    
    const categoryAlereadyExists =  await this.categoriesRepository.findByName(name)

    if(categoryAlereadyExists) 
      {
          throw new Error("Category already Exists")
      }
    this.categoriesRepository.create({name, description})
    }


}


export {CreateCategoryUseCase}