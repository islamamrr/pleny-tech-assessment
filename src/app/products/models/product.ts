export class ProductClass {
    title: string = '';
    description: string = '';
    images: [] = [];
    discountPercentage: number = 0;
    price: number = 0;
    previousPrice: number = 0;
    rating: number = 0;
    brand: string = '';
    stock: number = 0;
    category: string = '';
    reviews: [] = [];
}

export interface Product extends ProductClass {};