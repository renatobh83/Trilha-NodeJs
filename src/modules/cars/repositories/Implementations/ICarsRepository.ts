interface ICarsDTO{
    name:string
    description:string
    daily_rate:number
    license_plate:string
    fine_amount:number
    brand: string
    category_id: string
}

interface ICarRepository {
     create(data:ICarsDTO): Promise<void>
}

export { ICarRepository, ICarsDTO}