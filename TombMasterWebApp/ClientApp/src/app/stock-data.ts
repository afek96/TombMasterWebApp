import { Product } from './Models/product';

export class StockData {
    constructor(public product: Product, public minimumStockQuantity: number = 0, public deliveryQuantity: number = 0) { }
}
