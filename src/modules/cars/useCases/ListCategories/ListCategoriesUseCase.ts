import { inject, injectable } from "tsyringe";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../../repositories/Implementations/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(@inject("CategoryRepository")
        private categoriesRepository: ICategoriesRepository){}

   async execute(): Promise<Category[]>{
        const categories = await this.categoriesRepository.list()
    
        return categories
    }
}

export {ListCategoriesUseCase}