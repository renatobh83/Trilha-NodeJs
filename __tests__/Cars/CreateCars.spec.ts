import { CarsRepositoryInMemory } from "../../src/modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarsUseCase } from "../../src/modules/cars/useCases/Cars/CreateCars/CreateCarsUseCase"


let createCarUseCase: CreateCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarsUseCase(carsRepositoryInMemory)
    })
    it("Should be able to create a car", async () => {
        await createCarUseCase.execute(
            {
                name: "Argo",
                description: "carro bom",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "FIAT",
                category_id: "string"
            }

        )
    })
})