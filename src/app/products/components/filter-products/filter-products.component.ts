import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit
{
  productCategories = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void
  {
    this.fetchProductCategories();
  }
  
  fetchProductCategories()
  {
    this.productsService.getProductsCategories().subscribe((categories: any) =>
      {
        this.productCategories = categories.map((category: any) => {
          return category.name;
        })
      });
  }

}
