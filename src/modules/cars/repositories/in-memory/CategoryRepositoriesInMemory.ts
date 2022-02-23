import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../Implementations/ICategoriesRepository";

class CategoryRepositoriesInMemory implements ICategoriesRepository {

     categories: Category[] = []


    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(category => category.name === name)
        return category
    }
    async list(): Promise<Category[]> {
        const all = this.categories
        return all
    }
    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        const category = new Category()

        Object.assign(category,{
            name,
            description
        })
        this.categories.push(category)
    }
}

export {CategoryRepositoriesInMemory}