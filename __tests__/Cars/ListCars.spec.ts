import { CarsRepositoryInMemory } from "../../src/modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { ListCarUseCase } from "../../src/modules/cars/useCases/ListCars/ListCarsUseCase"


let listCarUseCase: ListCarUseCase
let carRespositoryInMemory: CarsRepositoryInMemory
describe("List Cars", () => {

    beforeEach(() => {
        carRespositoryInMemory = new CarsRepositoryInMemory()
        listCarUseCase = new ListCarUseCase(carRespositoryInMemory)

    })

    it("Should be able a list car all avaliable", async () => {
        const car = await carRespositoryInMemory.create({
            name: "Argo",
            description: "carro bom",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "FIAT",
            category_id: "string"
        })

        const cars = await listCarUseCase.execute({})
        expect(cars).toEqual([car])
    })
    it("Should be able a list car all avaliable by name", async () => {
        await carRespositoryInMemory.create({
            name: "Argo",
            description: "carro bom",
            daily_rate: 100,
            license_plate: "ABC-165",
            fine_amount: 60,
            brand: "Ferrari",
            category_id: "string"
        })
        await carRespositoryInMemory.create({
            name: "Argo",
            description: "carro bom",
            daily_rate: 100,
            license_plate: "ABC-542",
            fine_amount: 60,
            brand: "Fiat",
            category_id: "string"
        })
        const car = await listCarUseCase.execute({ brand: "Ferrari" })
      

    })
})