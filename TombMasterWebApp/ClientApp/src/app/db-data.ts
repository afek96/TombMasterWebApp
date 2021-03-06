import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FontName } from './Models/font-name';
import { ProductType } from './Models/product-type';
import { Product } from './Models/product';
import { Delivery } from './Models/delivery';
import { DeliveryProduct } from './Models/delivery-product';
import { Order } from './Models/order';
import { OrderProduct } from './Models/order-product';

export class DbData implements InMemoryDbService {
  createDb() {
    const fontNames: FontName[] = [
      { id: 1, name: 'Brasil' },
      { id: 2, name: 'Romano' },
      { id: 3, name: 'Czcionka 3' },
      { id: 4, name: 'Czcionka 4' },
      { id: 5, name: 'Czcionka 5' }
    ];
    const productTypes: ProductType[] = [
      { id: 23, size: 6, fontNameId: 1, signType: 1, restockMinAmount: 20 },
      { id: 24, size: 5, fontNameId: 1, signType: 1, restockMinAmount: 20 },
      { id: 25, size: 4, fontNameId: 1, signType: 1, restockMinAmount: 20 },
      { id: 26, size: 4, fontNameId: 1, signType: 2, restockMinAmount: 20 },
      { id: 27, size: 4, fontNameId: 1, signType: 4, restockMinAmount: 20 },
      { id: 28, size: 3, fontNameId: 1, signType: 2, restockMinAmount: 20 },
      { id: 29, size: 3, fontNameId: 1, signType: 4, restockMinAmount: 20 },
      { id: 30, size: 6, fontNameId: 2, signType: 1, restockMinAmount: 10 },
      { id: 31, size: 5, fontNameId: 2, signType: 1, restockMinAmount: 15 },
      { id: 32, size: 4, fontNameId: 2, signType: 1, restockMinAmount: 15 },
      { id: 33, size: 4, fontNameId: 2, signType: 2, restockMinAmount: 20 },
      { id: 34, size: 4, fontNameId: 2, signType: 4, restockMinAmount: 20 },
      { id: 35, size: 3, fontNameId: 2, signType: 2, restockMinAmount: 20 },
      { id: 36, size: 3, fontNameId: 2, signType: 4, restockMinAmount: 20 },
      { id: 37, size: 3, fontNameId: 1, signType: 1, restockMinAmount: 5 },
    ];

    const products: Product[] = [
      { id: 7, typeId: 23, sign: 'A', quantity: 19 },
      { id: 8, typeId: 23, sign: 'Ą', quantity: 20 },
      { id: 9, typeId: 23, sign: 'B', quantity: 19 },
      { id: 10, typeId: 23, sign: 'C', quantity: 18 },
      { id: 11, typeId: 23, sign: 'Ć', quantity: 20 },
      { id: 12, typeId: 23, sign: 'D', quantity: 19 },
      { id: 13, typeId: 23, sign: 'E', quantity: 17 },
      { id: 14, typeId: 23, sign: 'Ę', quantity: 20 },
      { id: 15, typeId: 23, sign: 'F', quantity: 20 },
      { id: 16, typeId: 23, sign: 'G', quantity: 20 },
      { id: 17, typeId: 23, sign: 'H', quantity: 19 },
      { id: 18, typeId: 23, sign: 'I', quantity: 19 },
      { id: 19, typeId: 23, sign: 'J', quantity: 19 },
      { id: 20, typeId: 23, sign: 'K', quantity: 20 },
      { id: 21, typeId: 23, sign: 'L', quantity: 20 },
      { id: 22, typeId: 23, sign: 'Ł', quantity: 20 },
      { id: 23, typeId: 23, sign: 'M', quantity: 20 },
      { id: 24, typeId: 23, sign: 'N', quantity: 19 },
      { id: 25, typeId: 23, sign: 'Ń', quantity: 20 },
      { id: 26, typeId: 23, sign: 'O', quantity: 19 },
      { id: 27, typeId: 23, sign: 'Ó', quantity: 20 },
      { id: 28, typeId: 23, sign: 'P', quantity: 19 },
      { id: 29, typeId: 23, sign: 'Q', quantity: 20 },
      { id: 30, typeId: 23, sign: 'R', quantity: 19 },
      { id: 31, typeId: 23, sign: 'S', quantity: 20 },
      { id: 32, typeId: 23, sign: 'Ś', quantity: 19 },
      { id: 33, typeId: 23, sign: 'T', quantity: 20 },
      { id: 34, typeId: 23, sign: 'U', quantity: 20 },
      { id: 35, typeId: 23, sign: 'V', quantity: 20 },
      { id: 36, typeId: 23, sign: 'W', quantity: 19 },
      { id: 37, typeId: 23, sign: 'X', quantity: 20 },
      { id: 38, typeId: 23, sign: 'Y', quantity: 19 },
      { id: 39, typeId: 23, sign: 'Z', quantity: 19 },
      { id: 40, typeId: 23, sign: 'Ź', quantity: 20 },
      { id: 41, typeId: 23, sign: 'Ż', quantity: 20 },
      { id: 42, typeId: 24, sign: 'A', quantity: 20 },
      { id: 43, typeId: 24, sign: 'Ą', quantity: 20 },
      { id: 44, typeId: 24, sign: 'B', quantity: 20 },
      { id: 45, typeId: 24, sign: 'C', quantity: 20 },
      { id: 46, typeId: 24, sign: 'Ć', quantity: 20 },
      { id: 47, typeId: 24, sign: 'D', quantity: 20 },
      { id: 48, typeId: 24, sign: 'E', quantity: 20 },
      { id: 49, typeId: 24, sign: 'Ę', quantity: 20 },
      { id: 50, typeId: 24, sign: 'F', quantity: 20 },
      { id: 51, typeId: 24, sign: 'G', quantity: 20 },
      { id: 52, typeId: 24, sign: 'H', quantity: 20 },
      { id: 53, typeId: 24, sign: 'I', quantity: 20 },
      { id: 54, typeId: 24, sign: 'J', quantity: 20 },
      { id: 55, typeId: 24, sign: 'K', quantity: 20 },
      { id: 56, typeId: 24, sign: 'L', quantity: 20 },
      { id: 57, typeId: 24, sign: 'Ł', quantity: 20 },
      { id: 58, typeId: 24, sign: 'M', quantity: 20 },
      { id: 59, typeId: 24, sign: 'N', quantity: 20 },
      { id: 60, typeId: 24, sign: 'Ń', quantity: 20 },
      { id: 61, typeId: 24, sign: 'O', quantity: 20 },
      { id: 62, typeId: 24, sign: 'Ó', quantity: 20 },
      { id: 63, typeId: 24, sign: 'P', quantity: 20 },
      { id: 64, typeId: 24, sign: 'Q', quantity: 20 },
      { id: 65, typeId: 24, sign: 'R', quantity: 20 },
      { id: 66, typeId: 24, sign: 'S', quantity: 20 },
      { id: 67, typeId: 24, sign: 'Ś', quantity: 20 },
      { id: 68, typeId: 24, sign: 'T', quantity: 20 },
      { id: 69, typeId: 24, sign: 'U', quantity: 20 },
      { id: 70, typeId: 24, sign: 'V', quantity: 20 },
      { id: 71, typeId: 24, sign: 'W', quantity: 20 },
      { id: 72, typeId: 24, sign: 'X', quantity: 20 },
      { id: 73, typeId: 24, sign: 'Y', quantity: 20 },
      { id: 74, typeId: 24, sign: 'Z', quantity: 20 },
      { id: 75, typeId: 24, sign: 'Ź', quantity: 20 },
      { id: 76, typeId: 24, sign: 'Ż', quantity: 20 },
      { id: 77, typeId: 25, sign: 'A', quantity: 20 },
      { id: 78, typeId: 25, sign: 'Ą', quantity: 20 },
      { id: 79, typeId: 25, sign: 'B', quantity: 20 },
      { id: 80, typeId: 25, sign: 'C', quantity: 20 },
      { id: 81, typeId: 25, sign: 'Ć', quantity: 20 },
      { id: 82, typeId: 25, sign: 'D', quantity: 20 },
      { id: 83, typeId: 25, sign: 'E', quantity: 20 },
      { id: 84, typeId: 25, sign: 'Ę', quantity: 20 },
      { id: 85, typeId: 25, sign: 'F', quantity: 20 },
      { id: 86, typeId: 25, sign: 'G', quantity: 20 },
      { id: 87, typeId: 25, sign: 'H', quantity: 20 },
      { id: 88, typeId: 25, sign: 'I', quantity: 20 },
      { id: 89, typeId: 25, sign: 'J', quantity: 20 },
      { id: 90, typeId: 25, sign: 'K', quantity: 20 },
      { id: 91, typeId: 25, sign: 'L', quantity: 20 },
      { id: 92, typeId: 25, sign: 'Ł', quantity: 20 },
      { id: 93, typeId: 25, sign: 'M', quantity: 20 },
      { id: 94, typeId: 25, sign: 'N', quantity: 20 },
      { id: 95, typeId: 25, sign: 'Ń', quantity: 20 },
      { id: 96, typeId: 25, sign: 'O', quantity: 20 },
      { id: 97, typeId: 25, sign: 'Ó', quantity: 20 },
      { id: 98, typeId: 25, sign: 'P', quantity: 20 },
      { id: 99, typeId: 25, sign: 'Q', quantity: 20 },
      { id: 100, typeId: 25, sign: 'R', quantity: 20 },
      { id: 101, typeId: 25, sign: 'S', quantity: 20 },
      { id: 102, typeId: 25, sign: 'Ś', quantity: 20 },
      { id: 103, typeId: 25, sign: 'T', quantity: 20 },
      { id: 104, typeId: 25, sign: 'U', quantity: 20 },
      { id: 105, typeId: 25, sign: 'V', quantity: 20 },
      { id: 106, typeId: 25, sign: 'W', quantity: 20 },
      { id: 107, typeId: 25, sign: 'X', quantity: 20 },
      { id: 108, typeId: 25, sign: 'Y', quantity: 20 },
      { id: 109, typeId: 25, sign: 'Z', quantity: 20 },
      { id: 110, typeId: 25, sign: 'Ź', quantity: 20 },
      { id: 111, typeId: 25, sign: 'Ż', quantity: 20 },
      { id: 112, typeId: 26, sign: '0', quantity: 14 },
      { id: 113, typeId: 26, sign: '1', quantity: 18 },
      { id: 114, typeId: 26, sign: '2', quantity: 16 },
      { id: 115, typeId: 26, sign: '3', quantity: 20 },
      { id: 116, typeId: 26, sign: '4', quantity: 20 },
      { id: 117, typeId: 26, sign: '5', quantity: 20 },
      { id: 118, typeId: 26, sign: '6', quantity: 16 },
      { id: 119, typeId: 26, sign: '7', quantity: 20 },
      { id: 120, typeId: 26, sign: '8', quantity: 20 },
      { id: 121, typeId: 27, sign: '*', quantity: 19 },
      { id: 122, typeId: 27, sign: '†', quantity: 19 },
      { id: 123, typeId: 28, sign: '0', quantity: 20 },
      { id: 124, typeId: 28, sign: '1', quantity: 20 },
      { id: 125, typeId: 28, sign: '2', quantity: 20 },
      { id: 126, typeId: 28, sign: '3', quantity: 20 },
      { id: 127, typeId: 28, sign: '4', quantity: 20 },
      { id: 128, typeId: 28, sign: '5', quantity: 20 },
      { id: 129, typeId: 28, sign: '6', quantity: 20 },
      { id: 130, typeId: 28, sign: '7', quantity: 20 },
      { id: 131, typeId: 28, sign: '8', quantity: 20 },
      { id: 132, typeId: 29, sign: '*', quantity: 20 },
      { id: 133, typeId: 29, sign: '†', quantity: 20 },
      { id: 134, typeId: 30, sign: 'A', quantity: 0 },
      { id: 135, typeId: 30, sign: 'Ą', quantity: 0 },
      { id: 136, typeId: 30, sign: 'B', quantity: 0 },
      { id: 137, typeId: 30, sign: 'C', quantity: 0 },
      { id: 138, typeId: 30, sign: 'Ć', quantity: 0 },
      { id: 139, typeId: 30, sign: 'D', quantity: 0 },
      { id: 140, typeId: 30, sign: 'E', quantity: 0 },
      { id: 141, typeId: 30, sign: 'Ę', quantity: 0 },
      { id: 142, typeId: 30, sign: 'F', quantity: 0 },
      { id: 143, typeId: 30, sign: 'G', quantity: 0 },
      { id: 144, typeId: 30, sign: 'H', quantity: 0 },
      { id: 145, typeId: 30, sign: 'I', quantity: 0 },
      { id: 146, typeId: 30, sign: 'J', quantity: 0 },
      { id: 147, typeId: 30, sign: 'K', quantity: 0 },
      { id: 148, typeId: 30, sign: 'L', quantity: 0 },
      { id: 149, typeId: 30, sign: 'Ł', quantity: 0 },
      { id: 150, typeId: 30, sign: 'M', quantity: 0 },
      { id: 151, typeId: 30, sign: 'N', quantity: 0 },
      { id: 152, typeId: 30, sign: 'Ń', quantity: 0 },
      { id: 153, typeId: 30, sign: 'O', quantity: 0 },
      { id: 154, typeId: 30, sign: 'Ó', quantity: 0 },
      { id: 155, typeId: 30, sign: 'P', quantity: 0 },
      { id: 156, typeId: 30, sign: 'Q', quantity: 0 },
      { id: 157, typeId: 30, sign: 'R', quantity: 0 },
      { id: 158, typeId: 30, sign: 'S', quantity: 0 },
      { id: 159, typeId: 30, sign: 'Ś', quantity: 0 },
      { id: 160, typeId: 30, sign: 'T', quantity: 0 },
      { id: 161, typeId: 30, sign: 'U', quantity: 0 },
      { id: 162, typeId: 30, sign: 'V', quantity: 0 },
      { id: 163, typeId: 30, sign: 'W', quantity: 0 },
      { id: 164, typeId: 30, sign: 'X', quantity: 0 },
      { id: 165, typeId: 30, sign: 'Y', quantity: 0 },
      { id: 166, typeId: 30, sign: 'Z', quantity: 0 },
      { id: 167, typeId: 30, sign: 'Ź', quantity: 0 },
      { id: 168, typeId: 30, sign: 'Ż', quantity: 0 },
      { id: 169, typeId: 31, sign: 'A', quantity: 0 },
      { id: 170, typeId: 31, sign: 'Ą', quantity: 0 },
      { id: 171, typeId: 31, sign: 'B', quantity: 0 },
      { id: 172, typeId: 31, sign: 'C', quantity: 0 },
      { id: 173, typeId: 31, sign: 'Ć', quantity: 0 },
      { id: 174, typeId: 31, sign: 'D', quantity: 0 },
      { id: 175, typeId: 31, sign: 'E', quantity: 0 },
      { id: 176, typeId: 31, sign: 'Ę', quantity: 0 },
      { id: 177, typeId: 31, sign: 'F', quantity: 0 },
      { id: 178, typeId: 31, sign: 'G', quantity: 0 },
      { id: 179, typeId: 31, sign: 'H', quantity: 0 },
      { id: 180, typeId: 31, sign: 'I', quantity: 0 },
      { id: 181, typeId: 31, sign: 'J', quantity: 0 },
      { id: 182, typeId: 31, sign: 'K', quantity: 0 },
      { id: 183, typeId: 31, sign: 'L', quantity: 0 },
      { id: 184, typeId: 31, sign: 'Ł', quantity: 0 },
      { id: 185, typeId: 31, sign: 'M', quantity: 0 },
      { id: 186, typeId: 31, sign: 'N', quantity: 0 },
      { id: 187, typeId: 31, sign: 'Ń', quantity: 0 },
      { id: 188, typeId: 31, sign: 'O', quantity: 0 },
      { id: 189, typeId: 31, sign: 'Ó', quantity: 0 },
      { id: 190, typeId: 31, sign: 'P', quantity: 0 },
      { id: 191, typeId: 31, sign: 'Q', quantity: 0 },
      { id: 192, typeId: 31, sign: 'R', quantity: 0 },
      { id: 193, typeId: 31, sign: 'S', quantity: 0 },
      { id: 194, typeId: 31, sign: 'Ś', quantity: 0 },
      { id: 195, typeId: 31, sign: 'T', quantity: 0 },
      { id: 196, typeId: 31, sign: 'U', quantity: 0 },
      { id: 197, typeId: 31, sign: 'V', quantity: 0 },
      { id: 198, typeId: 31, sign: 'W', quantity: 0 },
      { id: 199, typeId: 31, sign: 'X', quantity: 0 },
      { id: 200, typeId: 31, sign: 'Y', quantity: 0 },
      { id: 201, typeId: 31, sign: 'Z', quantity: 0 },
      { id: 202, typeId: 31, sign: 'Ź', quantity: 0 },
      { id: 203, typeId: 31, sign: 'Ż', quantity: 0 },
      { id: 204, typeId: 32, sign: 'A', quantity: 0 },
      { id: 205, typeId: 32, sign: 'Ą', quantity: 0 },
      { id: 206, typeId: 32, sign: 'B', quantity: 0 },
      { id: 207, typeId: 32, sign: 'C', quantity: 0 },
      { id: 208, typeId: 32, sign: 'Ć', quantity: 0 },
      { id: 209, typeId: 32, sign: 'D', quantity: 0 },
      { id: 210, typeId: 32, sign: 'E', quantity: 0 },
      { id: 211, typeId: 32, sign: 'Ę', quantity: 0 },
      { id: 212, typeId: 32, sign: 'F', quantity: 0 },
      { id: 213, typeId: 32, sign: 'G', quantity: 0 },
      { id: 214, typeId: 32, sign: 'H', quantity: 0 },
      { id: 215, typeId: 32, sign: 'I', quantity: 0 },
      { id: 216, typeId: 32, sign: 'J', quantity: 0 },
      { id: 217, typeId: 32, sign: 'K', quantity: 0 },
      { id: 218, typeId: 32, sign: 'L', quantity: 0 },
      { id: 219, typeId: 32, sign: 'Ł', quantity: 0 },
      { id: 220, typeId: 32, sign: 'M', quantity: 0 },
      { id: 221, typeId: 32, sign: 'N', quantity: 0 },
      { id: 222, typeId: 32, sign: 'Ń', quantity: 0 },
      { id: 223, typeId: 32, sign: 'O', quantity: 0 },
      { id: 224, typeId: 32, sign: 'Ó', quantity: 0 },
      { id: 225, typeId: 32, sign: 'P', quantity: 0 },
      { id: 226, typeId: 32, sign: 'Q', quantity: 0 },
      { id: 227, typeId: 32, sign: 'R', quantity: 0 },
      { id: 228, typeId: 32, sign: 'S', quantity: 0 },
      { id: 229, typeId: 32, sign: 'Ś', quantity: 0 },
      { id: 230, typeId: 32, sign: 'T', quantity: 0 },
      { id: 231, typeId: 32, sign: 'U', quantity: 0 },
      { id: 232, typeId: 32, sign: 'V', quantity: 0 },
      { id: 233, typeId: 32, sign: 'W', quantity: 0 },
      { id: 234, typeId: 32, sign: 'X', quantity: 0 },
      { id: 235, typeId: 32, sign: 'Y', quantity: 0 },
      { id: 236, typeId: 32, sign: 'Z', quantity: 0 },
      { id: 237, typeId: 32, sign: 'Ź', quantity: 0 },
      { id: 238, typeId: 32, sign: 'Ż', quantity: 0 },
      { id: 239, typeId: 33, sign: '0', quantity: 0 },
      { id: 240, typeId: 33, sign: '1', quantity: 0 },
      { id: 241, typeId: 33, sign: '2', quantity: 0 },
      { id: 242, typeId: 33, sign: '3', quantity: 0 },
      { id: 243, typeId: 33, sign: '4', quantity: 0 },
      { id: 244, typeId: 33, sign: '5', quantity: 0 },
      { id: 245, typeId: 33, sign: '6', quantity: 0 },
      { id: 246, typeId: 33, sign: '7', quantity: 0 },
      { id: 247, typeId: 33, sign: '8', quantity: 0 },
      { id: 248, typeId: 34, sign: '*', quantity: 0 },
      { id: 249, typeId: 34, sign: '†', quantity: 0 },
      { id: 250, typeId: 35, sign: '0', quantity: 0 },
      { id: 251, typeId: 35, sign: '1', quantity: 0 },
      { id: 252, typeId: 35, sign: '2', quantity: 0 },
      { id: 253, typeId: 35, sign: '3', quantity: 0 },
      { id: 254, typeId: 35, sign: '4', quantity: 0 },
      { id: 255, typeId: 35, sign: '5', quantity: 0 },
      { id: 256, typeId: 35, sign: '6', quantity: 0 },
      { id: 257, typeId: 35, sign: '7', quantity: 0 },
      { id: 258, typeId: 35, sign: '8', quantity: 0 },
      { id: 259, typeId: 36, sign: '*', quantity: 0 },
      { id: 260, typeId: 36, sign: '†', quantity: 0 },
      { id: 261, typeId: 37, sign: 'A', quantity: 0 },
      { id: 262, typeId: 37, sign: 'Ą', quantity: 0 },
      { id: 263, typeId: 37, sign: 'B', quantity: 0 },
      { id: 264, typeId: 37, sign: 'C', quantity: 0 },
      { id: 265, typeId: 37, sign: 'Ć', quantity: 0 },
      { id: 266, typeId: 37, sign: 'D', quantity: 0 },
      { id: 267, typeId: 37, sign: 'E', quantity: 0 },
      { id: 268, typeId: 37, sign: 'Ę', quantity: 0 },
      { id: 269, typeId: 37, sign: 'F', quantity: 0 },
      { id: 270, typeId: 37, sign: 'G', quantity: 0 },
      { id: 271, typeId: 37, sign: 'H', quantity: 0 },
      { id: 272, typeId: 37, sign: 'I', quantity: 0 },
      { id: 273, typeId: 37, sign: 'J', quantity: 0 },
      { id: 274, typeId: 37, sign: 'K', quantity: 0 },
      { id: 275, typeId: 37, sign: 'L', quantity: 0 },
      { id: 276, typeId: 37, sign: 'Ł', quantity: 0 },
      { id: 277, typeId: 37, sign: 'M', quantity: 0 },
      { id: 278, typeId: 37, sign: 'N', quantity: 0 },
      { id: 279, typeId: 37, sign: 'Ń', quantity: 0 },
      { id: 280, typeId: 37, sign: 'O', quantity: 0 },
      { id: 281, typeId: 37, sign: 'Ó', quantity: 0 },
      { id: 282, typeId: 37, sign: 'P', quantity: 0 },
      { id: 283, typeId: 37, sign: 'Q', quantity: 0 },
      { id: 284, typeId: 37, sign: 'R', quantity: 0 },
      { id: 285, typeId: 37, sign: 'S', quantity: 0 },
      { id: 286, typeId: 37, sign: 'Ś', quantity: 0 },
      { id: 287, typeId: 37, sign: 'T', quantity: 0 },
      { id: 288, typeId: 37, sign: 'U', quantity: 0 },
      { id: 289, typeId: 37, sign: 'V', quantity: 0 },
      { id: 290, typeId: 37, sign: 'W', quantity: 0 },
      { id: 291, typeId: 37, sign: 'X', quantity: 0 },
      { id: 292, typeId: 37, sign: 'Y', quantity: 0 },
      { id: 293, typeId: 37, sign: 'Z', quantity: 0 },
      { id: 294, typeId: 37, sign: 'Ź', quantity: 0 },
      { id: 295, typeId: 37, sign: 'Ż', quantity: 0 }
    ];


    const orderproducts: OrderProduct[] = [
      { id: 1, quantity: 3, productId: 7, orderId: 1 },
      { id: 2, quantity: 1, productId: 12, orderId: 1 },
      { id: 3, quantity: 2, productId: 23, orderId: 1 },
      { id: 4, quantity: 1, productId: 21, orderId: 1 },
      { id: 5, quantity: 2, productId: 10, orderId: 1 },
      { id: 6, quantity: 1, productId: 17, orderId: 1 },
      { id: 7, quantity: 1, productId: 13, orderId: 1 },
      { id: 8, quantity: 1, productId: 30, orderId: 1 },
      { id: 9, quantity: 1, productId: 39, orderId: 1 },
      { id: 10, quantity: 1, productId: 38, orderId: 1 },
      { id: 11, quantity: 1, productId: 20, orderId: 1 },
      { id: 12, quantity: 1, productId: 32, orderId: 1 },
      { id: 13, quantity: 1, productId: 28, orderId: 1 },
      { id: 14, quantity: 5, productId: 112, orderId: 1 },
      { id: 15, quantity: 1, productId: 115, orderId: 1 },
      { id: 16, quantity: 3, productId: 113, orderId: 1 },
      { id: 17, quantity: 5, productId: 118, orderId: 1 },
      { id: 18, quantity: 2, productId: 114, orderId: 1 },
      { id: 19, quantity: 1, productId: 121, orderId: 1 },
      { id: 20, quantity: 1, productId: 122, orderId: 1 },
      { id: 21, quantity: 1, productId: 33, orderId: 2 },
      { id: 22, quantity: 1, productId: 26, orderId: 2 },
      { id: 23, quantity: 2, productId: 23, orderId: 2 },
      { id: 24, quantity: 2, productId: 7, orderId: 2 },
      { id: 25, quantity: 1, productId: 31, orderId: 2 },
      { id: 26, quantity: 2, productId: 39, orderId: 2 },
      { id: 27, quantity: 1, productId: 21, orderId: 2 },
      { id: 28, quantity: 2, productId: 10, orderId: 2 },
      { id: 29, quantity: 1, productId: 17, orderId: 2 },
      { id: 30, quantity: 1, productId: 13, orderId: 2 },
      { id: 31, quantity: 1, productId: 30, orderId: 2 },
      { id: 32, quantity: 1, productId: 38, orderId: 2 },
      { id: 33, quantity: 1, productId: 20, orderId: 2 },
      { id: 34, quantity: 1, productId: 32, orderId: 2 },
      { id: 35, quantity: 1, productId: 28, orderId: 2 },
      { id: 36, quantity: 1, productId: 115, orderId: 2 },
      { id: 37, quantity: 5, productId: 112, orderId: 2 },
      { id: 38, quantity: 2, productId: 119, orderId: 2 },
      { id: 39, quantity: 2, productId: 113, orderId: 2 },
      { id: 40, quantity: 4, productId: 118, orderId: 2 },
      { id: 41, quantity: 2, productId: 114, orderId: 2 },
      { id: 42, quantity: 1, productId: 121, orderId: 2 },
      { id: 43, quantity: 1, productId: 122, orderId: 2 },
      { id: 44, quantity: 1, productId: 36, orderId: 3 },
      { id: 45, quantity: 1, productId: 26, orderId: 3 },
      { id: 46, quantity: 1, productId: 19, orderId: 3 },
      { id: 47, quantity: 2, productId: 10, orderId: 3 },
      { id: 48, quantity: 1, productId: 18, orderId: 3 },
      { id: 49, quantity: 3, productId: 13, orderId: 3 },
      { id: 50, quantity: 1, productId: 17, orderId: 3 },
      { id: 51, quantity: 1, productId: 39, orderId: 3 },
      { id: 52, quantity: 1, productId: 7, orderId: 3 },
      { id: 53, quantity: 1, productId: 12, orderId: 3 },
      { id: 54, quantity: 1, productId: 9, orderId: 3 },
      { id: 55, quantity: 1, productId: 30, orderId: 3 },
      { id: 56, quantity: 1, productId: 24, orderId: 3 },
      { id: 57, quantity: 1, productId: 38, orderId: 3 },
      { id: 58, quantity: 1, productId: 32, orderId: 3 },
      { id: 59, quantity: 1, productId: 28, orderId: 3 },
      { id: 60, quantity: 2, productId: 113, orderId: 3 },
      { id: 61, quantity: 4, productId: 118, orderId: 3 },
      { id: 62, quantity: 6, productId: 112, orderId: 3 },
      { id: 63, quantity: 4, productId: 114, orderId: 3 },
      { id: 64, quantity: 1, productId: 121, orderId: 3 },
      { id: 65, quantity: 1, productId: 122, orderId: 3 },
      { id: 66, quantity: 2, productId: 31, orderId: 4 },
      { id: 67, quantity: 1, productId: 33, orderId: 4 },
      { id: 68, quantity: 2, productId: 13, orderId: 4 },
      { id: 69, quantity: 1, productId: 15, orderId: 4 },
      { id: 70, quantity: 1, productId: 7, orderId: 4 },
      { id: 71, quantity: 1, productId: 24, orderId: 4 },
      { id: 72, quantity: 1, productId: 9, orderId: 4 },
      { id: 73, quantity: 1, productId: 30, orderId: 4 },
      { id: 74, quantity: 5, productId: 39, orderId: 4 },
      { id: 75, quantity: 1, productId: 14, orderId: 4 },
      { id: 76, quantity: 3, productId: 10, orderId: 4 },
      { id: 77, quantity: 2, productId: 38, orderId: 4 },
      { id: 78, quantity: 1, productId: 20, orderId: 4 },
      { id: 79, quantity: 2, productId: 18, orderId: 4 },
      { id: 80, quantity: 1, productId: 36, orderId: 4 },
      { id: 81, quantity: 1, productId: 32, orderId: 4 },
      { id: 82, quantity: 1, productId: 28, orderId: 4 },
      { id: 83, quantity: 3, productId: 113, orderId: 4 },
      { id: 84, quantity: 2, productId: 119, orderId: 4 },
      { id: 85, quantity: 4, productId: 112, orderId: 4 },
      { id: 86, quantity: 5, productId: 118, orderId: 4 },
      { id: 87, quantity: 2, productId: 114, orderId: 4 },
      { id: 88, quantity: 1, productId: 121, orderId: 4 },
      { id: 89, quantity: 1, productId: 122, orderId: 4 },
    ];

    const orders: Order[] = [
      { id: 1, createdAt: new Date('2020-06-16 16:42:09.5470000'), name: 'Adam Malcherczyk', additionalText: null, birthDate: new Date('1996-01-03'), deathDate: new Date('2020-06-16'), status: 4 },
      { id: 2, createdAt: new Date('2020-06-16 17:16:07.4430000'), name: 'Tomasz Malcherczyk', additionalText: null, birthDate: new Date('1997-07-30'), deathDate: new Date('2020-06-16'), status: 4 },
      { id: 3, createdAt: new Date('2020-06-16 20:03:46.0930000'), name: 'Wojciech Zadeberny', additionalText: null, birthDate: new Date('2020-06-16'), deathDate: new Date('2020-06-16'), status: 3 },
      { id: 4, createdAt: new Date('2020-06-17 08:32:50.6300000'), name: 'Stefan Brzęczyszczykiewicz', additionalText: null, birthDate: new Date('1996-06-17'), deathDate: new Date('2020-06-17'), status: 2 },
      { id: 5, createdAt: new Date('2020-06-17 08:34:08.5670000'), name: null, additionalText: null, birthDate: new Date('2020-06-17'), deathDate: new Date('2020-06-17'), status: 2 }
    ];

    const deliveryProducts: DeliveryProduct[] = [
      { id: 1, deliveryId: 6, productId: 77, quantity: 20 },
      { id: 2, deliveryId: 6, productId: 78, quantity: 20 },
      { id: 3, deliveryId: 6, productId: 79, quantity: 20 },
      { id: 4, deliveryId: 6, productId: 80, quantity: 20 },
      { id: 5, deliveryId: 6, productId: 81, quantity: 20 },
      { id: 6, deliveryId: 6, productId: 82, quantity: 20 },
      { id: 7, deliveryId: 6, productId: 83, quantity: 20 },
      { id: 8, deliveryId: 6, productId: 84, quantity: 20 },
      { id: 9, deliveryId: 6, productId: 85, quantity: 20 },
      { id: 10, deliveryId: 6, productId: 86, quantity: 20 },
      { id: 11, deliveryId: 6, productId: 87, quantity: 20 },
      { id: 12, deliveryId: 6, productId: 88, quantity: 20 },
      { id: 13, deliveryId: 6, productId: 89, quantity: 20 },
      { id: 14, deliveryId: 6, productId: 90, quantity: 20 },
      { id: 15, deliveryId: 6, productId: 91, quantity: 20 },
      { id: 16, deliveryId: 6, productId: 92, quantity: 20 },
      { id: 17, deliveryId: 6, productId: 93, quantity: 20 },
      { id: 18, deliveryId: 6, productId: 94, quantity: 20 },
      { id: 19, deliveryId: 6, productId: 95, quantity: 20 },
      { id: 20, deliveryId: 6, productId: 96, quantity: 20 },
      { id: 21, deliveryId: 6, productId: 97, quantity: 20 },
      { id: 22, deliveryId: 6, productId: 98, quantity: 20 },
      { id: 23, deliveryId: 6, productId: 99, quantity: 20 },
      { id: 24, deliveryId: 6, productId: 100, quantity: 20 },
      { id: 25, deliveryId: 6, productId: 101, quantity: 20 },
      { id: 26, deliveryId: 6, productId: 102, quantity: 20 },
      { id: 27, deliveryId: 6, productId: 103, quantity: 20 },
      { id: 28, deliveryId: 6, productId: 104, quantity: 20 },
      { id: 29, deliveryId: 6, productId: 105, quantity: 20 },
      { id: 30, deliveryId: 6, productId: 106, quantity: 20 },
      { id: 31, deliveryId: 6, productId: 107, quantity: 20 },
      { id: 32, deliveryId: 6, productId: 108, quantity: 20 },
      { id: 33, deliveryId: 6, productId: 109, quantity: 20 },
      { id: 34, deliveryId: 6, productId: 110, quantity: 20 },
      { id: 35, deliveryId: 6, productId: 111, quantity: 20 },
      { id: 36, deliveryId: 6, productId: 112, quantity: 20 },
      { id: 37, deliveryId: 6, productId: 113, quantity: 20 },
      { id: 38, deliveryId: 6, productId: 114, quantity: 20 },
      { id: 39, deliveryId: 6, productId: 115, quantity: 20 },
      { id: 40, deliveryId: 6, productId: 116, quantity: 20 },
      { id: 41, deliveryId: 6, productId: 117, quantity: 20 },
      { id: 42, deliveryId: 6, productId: 118, quantity: 20 },
      { id: 43, deliveryId: 6, productId: 119, quantity: 20 },
      { id: 44, deliveryId: 6, productId: 120, quantity: 20 },
      { id: 45, deliveryId: 6, productId: 121, quantity: 20 },
      { id: 46, deliveryId: 6, productId: 122, quantity: 20 },
      { id: 47, deliveryId: 7, productId: 7, quantity: 20 },
      { id: 48, deliveryId: 7, productId: 8, quantity: 20 },
      { id: 49, deliveryId: 7, productId: 9, quantity: 20 },
      { id: 50, deliveryId: 7, productId: 10, quantity: 20 },
      { id: 51, deliveryId: 7, productId: 11, quantity: 20 },
      { id: 52, deliveryId: 7, productId: 12, quantity: 20 },
      { id: 53, deliveryId: 7, productId: 13, quantity: 20 },
      { id: 54, deliveryId: 7, productId: 14, quantity: 20 },
      { id: 55, deliveryId: 7, productId: 15, quantity: 20 },
      { id: 56, deliveryId: 7, productId: 16, quantity: 20 },
      { id: 57, deliveryId: 7, productId: 17, quantity: 20 },
      { id: 58, deliveryId: 7, productId: 18, quantity: 20 },
      { id: 59, deliveryId: 7, productId: 19, quantity: 20 },
      { id: 60, deliveryId: 7, productId: 20, quantity: 20 },
      { id: 61, deliveryId: 7, productId: 21, quantity: 20 },
      { id: 62, deliveryId: 7, productId: 22, quantity: 20 },
      { id: 63, deliveryId: 7, productId: 23, quantity: 20 },
      { id: 64, deliveryId: 7, productId: 24, quantity: 20 },
      { id: 65, deliveryId: 7, productId: 25, quantity: 20 },
      { id: 66, deliveryId: 7, productId: 26, quantity: 20 },
      { id: 67, deliveryId: 7, productId: 27, quantity: 20 },
      { id: 68, deliveryId: 7, productId: 28, quantity: 20 },
      { id: 69, deliveryId: 7, productId: 29, quantity: 20 },
      { id: 70, deliveryId: 7, productId: 30, quantity: 20 },
      { id: 71, deliveryId: 7, productId: 31, quantity: 20 },
      { id: 72, deliveryId: 7, productId: 32, quantity: 20 },
      { id: 73, deliveryId: 7, productId: 33, quantity: 20 },
      { id: 74, deliveryId: 7, productId: 34, quantity: 20 },
      { id: 75, deliveryId: 7, productId: 35, quantity: 20 },
      { id: 76, deliveryId: 7, productId: 36, quantity: 20 },
      { id: 77, deliveryId: 7, productId: 37, quantity: 20 },
      { id: 78, deliveryId: 7, productId: 38, quantity: 20 },
      { id: 79, deliveryId: 7, productId: 39, quantity: 20 },
      { id: 80, deliveryId: 7, productId: 40, quantity: 20 },
      { id: 81, deliveryId: 7, productId: 41, quantity: 20 },
      { id: 82, deliveryId: 8, productId: 42, quantity: 20 },
      { id: 83, deliveryId: 8, productId: 43, quantity: 20 },
      { id: 84, deliveryId: 8, productId: 44, quantity: 20 },
      { id: 85, deliveryId: 8, productId: 45, quantity: 20 },
      { id: 86, deliveryId: 8, productId: 46, quantity: 20 },
      { id: 87, deliveryId: 8, productId: 47, quantity: 20 },
      { id: 88, deliveryId: 8, productId: 48, quantity: 20 },
      { id: 89, deliveryId: 8, productId: 49, quantity: 20 },
      { id: 90, deliveryId: 8, productId: 50, quantity: 20 },
      { id: 91, deliveryId: 8, productId: 51, quantity: 20 },
      { id: 92, deliveryId: 8, productId: 52, quantity: 20 },
      { id: 93, deliveryId: 8, productId: 53, quantity: 20 },
      { id: 94, deliveryId: 8, productId: 54, quantity: 20 },
      { id: 95, deliveryId: 8, productId: 55, quantity: 20 },
      { id: 96, deliveryId: 8, productId: 56, quantity: 20 },
      { id: 97, deliveryId: 8, productId: 57, quantity: 20 },
      { id: 98, deliveryId: 8, productId: 58, quantity: 20 },
      { id: 99, deliveryId: 8, productId: 59, quantity: 20 },
      { id: 100, deliveryId: 8, productId: 60, quantity: 20 },
      { id: 101, deliveryId: 8, productId: 61, quantity: 20 },
      { id: 102, deliveryId: 8, productId: 62, quantity: 20 },
      { id: 103, deliveryId: 8, productId: 63, quantity: 20 },
      { id: 104, deliveryId: 8, productId: 64, quantity: 20 },
      { id: 105, deliveryId: 8, productId: 65, quantity: 20 },
      { id: 106, deliveryId: 8, productId: 66, quantity: 20 },
      { id: 107, deliveryId: 8, productId: 67, quantity: 20 },
      { id: 108, deliveryId: 8, productId: 68, quantity: 20 },
      { id: 109, deliveryId: 8, productId: 69, quantity: 20 },
      { id: 110, deliveryId: 8, productId: 70, quantity: 20 },
      { id: 111, deliveryId: 8, productId: 71, quantity: 20 },
      { id: 112, deliveryId: 8, productId: 72, quantity: 20 },
      { id: 113, deliveryId: 8, productId: 73, quantity: 20 },
      { id: 114, deliveryId: 8, productId: 74, quantity: 20 },
      { id: 115, deliveryId: 8, productId: 75, quantity: 20 },
      { id: 116, deliveryId: 8, productId: 76, quantity: 20 },
      { id: 117, deliveryId: 9, productId: 123, quantity: 20 },
      { id: 118, deliveryId: 9, productId: 124, quantity: 20 },
      { id: 119, deliveryId: 9, productId: 125, quantity: 20 },
      { id: 120, deliveryId: 9, productId: 126, quantity: 20 },
      { id: 121, deliveryId: 9, productId: 127, quantity: 20 },
      { id: 122, deliveryId: 9, productId: 128, quantity: 20 },
      { id: 123, deliveryId: 9, productId: 129, quantity: 20 },
      { id: 124, deliveryId: 9, productId: 130, quantity: 20 },
      { id: 125, deliveryId: 9, productId: 131, quantity: 20 },
      { id: 126, deliveryId: 9, productId: 132, quantity: 20 },
      { id: 127, deliveryId: 9, productId: 133, quantity: 20 },
      { id: 128, deliveryId: 14, productId: 7, quantity: 15 },
      { id: 129, deliveryId: 14, productId: 8, quantity: 0 },
      { id: 130, deliveryId: 14, productId: 9, quantity: 20 },
      { id: 131, deliveryId: 14, productId: 10, quantity: 20 },
      { id: 132, deliveryId: 14, productId: 11, quantity: 0 },
      { id: 133, deliveryId: 14, productId: 12, quantity: 20 },
      { id: 134, deliveryId: 14, productId: 13, quantity: 20 },
      { id: 135, deliveryId: 14, productId: 14, quantity: 0 },
      { id: 136, deliveryId: 14, productId: 15, quantity: 0 },
      { id: 137, deliveryId: 14, productId: 16, quantity: 0 },
      { id: 138, deliveryId: 14, productId: 17, quantity: 20 },
      { id: 139, deliveryId: 14, productId: 18, quantity: 20 },
      { id: 140, deliveryId: 14, productId: 19, quantity: 20 },
      { id: 141, deliveryId: 14, productId: 20, quantity: 0 },
      { id: 142, deliveryId: 14, productId: 21, quantity: 0 },
      { id: 143, deliveryId: 14, productId: 22, quantity: 0 },
      { id: 144, deliveryId: 14, productId: 23, quantity: 0 },
      { id: 145, deliveryId: 14, productId: 24, quantity: 20 },
      { id: 146, deliveryId: 14, productId: 25, quantity: 0 },
      { id: 147, deliveryId: 14, productId: 26, quantity: 20 },
      { id: 148, deliveryId: 14, productId: 27, quantity: 0 },
      { id: 149, deliveryId: 14, productId: 28, quantity: 20 },
      { id: 150, deliveryId: 14, productId: 29, quantity: 0 },
      { id: 151, deliveryId: 14, productId: 30, quantity: 20 },
      { id: 152, deliveryId: 14, productId: 31, quantity: 0 },
      { id: 153, deliveryId: 14, productId: 32, quantity: 20 },
      { id: 154, deliveryId: 14, productId: 33, quantity: 0 },
      { id: 155, deliveryId: 14, productId: 34, quantity: 0 },
      { id: 156, deliveryId: 14, productId: 35, quantity: 0 },
      { id: 157, deliveryId: 14, productId: 36, quantity: 20 },
      { id: 158, deliveryId: 14, productId: 37, quantity: 0 },
      { id: 159, deliveryId: 14, productId: 38, quantity: 20 },
      { id: 160, deliveryId: 14, productId: 39, quantity: 20 },
      { id: 161, deliveryId: 14, productId: 40, quantity: 0 },
      { id: 162, deliveryId: 14, productId: 41, quantity: 0 }
    ];

    const deliveries: Delivery[] = [
      { id: 1, createdAt: new Date('2020-06-16 18:33:23.8370000'), status: 1 },
      { id: 2, createdAt: new Date('2020-06-16 18:36:22.8870000'), status: 1 },
      { id: 3, createdAt: new Date('2020-06-16 18:38:45.6900000'), status: 1 },
      { id: 4, createdAt: new Date('2020-06-16 18:39:08.8100000'), status: 1 },
      { id: 5, createdAt: new Date('2020-06-16 18:41:28.1600000'), status: 1 },
      { id: 6, createdAt: new Date('2020-06-16 19:04:34.5400000'), status: 3 },
      { id: 7, createdAt: new Date('2020-06-16 20:01:29.6370000'), status: 3 },
      { id: 8, createdAt: new Date('2020-06-16 20:01:43.3500000'), status: 3 },
      { id: 9, createdAt: new Date('2020-06-16 20:01:54.8230000'), status: 3 },
      { id: 10, createdAt: new Date('2020-06-16 20:04:57.5570000'), status: 1 },
      { id: 11, createdAt: new Date('2020-06-17 07:56:17.4100000'), status: 1 },
      { id: 12, createdAt: new Date('2020-06-17 09:45:46.4970000'), status: 1 },
      { id: 13, createdAt: new Date('2020-06-17 09:46:07.4070000'), status: 1 },
      { id: 14, createdAt: new Date('2020-06-17 09:51:20.3300000'), status: 2 },
      { id: 15, createdAt: new Date('2020-06-21 09:02:33.1200000'), status: 1 },
      { id: 16, createdAt: new Date('2020-06-21 09:02:49.3530000'), status: 1 },
      { id: 17, createdAt: new Date('2020-07-02 12:14:29.0870000'), status: 1 },
      { id: 18, createdAt: new Date('2020-07-08 13:34:22.0170000'), status: 1 }
    ];

    return { fontNames, productTypes, products, orderproducts, orders, deliveryProducts, deliveries };
  }
}
