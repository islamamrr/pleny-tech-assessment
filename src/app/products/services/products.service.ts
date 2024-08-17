import { Injectable } from '@angular/core';
import { ApiClientService } from 'src/app/core/services/api-client.service';
import { ProductClass } from '../models/product';

const categoriesToFetch = Object.keys(new ProductClass())
  .filter((key) => key !== "previousPrice")
  .join(',');

@Injectable({
  providedIn: 'root'
})
export class ProductsService
{

  constructor(private apiService: ApiClientService)
  {
  }

  getProducts()
  {
    return this.apiService.get(`products?select=${categoriesToFetch}`);
  }

  getProductsCategories()
  {
    return this.apiService.get(`products/categories`);
  }

  getSearchedProducts(searchKey: string) {
    return this.apiService.get(`products/search?q=${searchKey}`);
  }
  
  getFilteredProducts(category: string) {
    category = category.toLowerCase().replace(" ", "-")
    return this.apiService.get(`products/category/${category}`);
  }
}
