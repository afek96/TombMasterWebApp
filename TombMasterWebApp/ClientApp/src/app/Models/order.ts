export class Order {
    constructor(public id: number = 0, public createdAt: Date = new Date(), public name: string = '', public additionalText: string = '', public birthDate: Date = new Date(), public deathDate: Date = new Date(), public status: Number = 0) { }
}
