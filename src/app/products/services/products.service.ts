import { Injectable } from '@angular/core';
import { ApiClientService } from 'src/app/core/services/api-client.service';
import { ProductClass } from '../models/product';
import { PRODUCTS_PAGE_SIZE } from '../constants/constants';

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

  getProducts(offset?: number, sortOption?: string)
  {
    return this.apiService.get(`products?select=${categoriesToFetch}&limit=${PRODUCTS_PAGE_SIZE}&skip=${offset}&sortBy=${sortOption}&order=desc`);
  }

  getProductsCategories()
  {
    return this.apiService.get(`products/categories`);
  }

  getSearchedProducts(searchKey: string, offset?: number, sortOption?: string) {
    return this.apiService.get(`products/search?q=${searchKey}&limit=${PRODUCTS_PAGE_SIZE}&skip=${offset}&sortBy=${sortOption}&order=desc`);
  }
  
  getFilteredProducts(category: string, offset?: number, sortOption?: string) {
    category = category.toLowerCase().replace(" ", "-")
    return this.apiService.get(`products/category/${category}?limit=${PRODUCTS_PAGE_SIZE}&skip=${offset}&sortBy=${sortOption}&order=desc`);
  }
}
