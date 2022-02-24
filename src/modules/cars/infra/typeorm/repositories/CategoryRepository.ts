import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../../../repositories/Implementations/ICategoriesRepository";


class CategoryRepository implements ICategoriesRepository {


    private category: Repository<Category>

    // private static INSTANCE: CategoryRepository

     constructor() {
        this.category = getRepository(Category)
    }

    // public static getIntance(): CategoryRepository {
    //     if (!CategoryRepository.INSTANCE) {
    //         CategoryRepository.INSTANCE = new CategoryRepository()
    //     }
    //     return CategoryRepository.INSTANCE
    // }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {

        const category = this.category.create({ name, description })

        await this.category.save(category)
    }

    async list(): Promise<Category[]> {
        const all = await this.category.find()
        return all
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.category.findOne({ name })
        return category
    }
}

export { CategoryRepository }