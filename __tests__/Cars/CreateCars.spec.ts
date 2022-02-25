import { AppError } from "../../src/shared/errors/AppError"
import { CarsRepositoryInMemory } from "../../src/modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarsUseCase } from "../../src/modules/cars/useCases/CreateCars/CreateCarsUseCase"


let createCarUseCase: CreateCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarsUseCase(carsRepositoryInMemory)
    })
    it("Should be able to create a car", async () => {
      const car  =  await createCarUseCase.execute( { 
        name: "Argo",
        description: "carro bom",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "FIAT",
        category_id: "string"})
       
     
       expect(car).toHaveProperty("id")
    })

    it("should be able to create a car with exists licente plate",()=>{
        expect(async()=>{
            await createCarUseCase.execute({
                
                    name: "Argo",
                    description: "carro bom",
                    daily_rate: 100,
                    license_plate: "ABC-1234",
                    fine_amount: 60,
                    brand: "FIAT",
                    category_id: "string"}
            )
            await createCarUseCase.execute({
                
                name: "Argo 1.3",
                description: "carro bom",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "FIAT",
                category_id: "string"}
        )
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should be able to create a car with avaliable to defaul",async()=>{
     const car  = await createCarUseCase.execute({          
        name: "Argo 1.3",
        description: "carro bom",
        daily_rate: 100,
        license_plate: "ABC-12334",
        fine_amount: 60,
        brand: "FIAT",
        category_id: "string"})
       expect(car.available).toBe(true)
    })
   
})