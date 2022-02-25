import { CategoryRepositoriesInMemory } from "../src/modules/cars/repositories/in-memory/CategoryRepositoriesInMemory"
import { CreateCategoryUseCase } from "../src/modules/cars/useCases/createCategory/CreateCategoryUseCase"


let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoryRepositoriesInMemory


describe("Create a new Category", ()=>{
    
    beforeEach(()=>{
        categoriesRepositoryInMemory = new CategoryRepositoriesInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
    })
    
    it("Should be able to create new category", async ()=>{
        const category = {
            name: "Category test",
            description: "test"
        }
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })
        
        const created  = await categoriesRepositoryInMemory.findByName(category.name)
     
        expect(created).toHaveProperty("id")


    } )
})