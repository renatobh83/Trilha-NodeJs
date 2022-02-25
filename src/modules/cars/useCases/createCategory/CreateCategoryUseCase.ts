
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { ICategoriesRepository } from "../../repositories/Implementations/ICategoriesRepository"

interface IRequest{
    name:string;
    description:string
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository") 
        private categoriesRepository: ICategoriesRepository
        ){}
    async execute({description,name}:IRequest): Promise<void>{    
    const categoryAlereadyExists =  await this.categoriesRepository.findByName(name)

    if(categoryAlereadyExists) 
      {
          throw new AppError("Category already Exists")
      }
    this.categoriesRepository.create({name, description})
    }


}


export {CreateCategoryUseCase}