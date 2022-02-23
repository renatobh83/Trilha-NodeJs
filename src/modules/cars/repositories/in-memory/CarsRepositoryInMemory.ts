import { ICarRepository,ICarsDTO } from "../Implementations/ICarsRepository";


class CarsRepositoryInMemory implements ICarRepository {
    create(data: ICarsDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export {CarsRepositoryInMemory}