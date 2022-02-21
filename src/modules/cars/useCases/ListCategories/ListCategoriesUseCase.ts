import { Category } from "../../entity/Category";
import { ICategoriesRepository } from "../../repositories/Implementations/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute(): Category[]{
        const categories = this.categoriesRepository.list()
    
        return categories
    }
}

export {ListCategoriesUseCase}