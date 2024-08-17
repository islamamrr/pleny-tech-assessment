import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { SearchFilterService } from '../../services/search-filter.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit
{

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private searchFilterService: SearchFilterService
  ) { }

  ngOnInit(): void
  {
    this.getProducts()
    // this.fetchFilteredProducts()
  }

  getProducts()
  {
    this.searchFilterService.searchAndFilter$
      .pipe(
        switchMap(([searchKey, category]) => searchKey ?
          this.productsService.getSearchedProducts(searchKey) :
          (category ? 
            (
              this.productsService.getFilteredProducts(category)
               ):
            this.productsService.getProducts())
        )
      )
      .subscribe({
        next: (response: any) => this.products = response.products,
        error: (error) => console.error(error)
      });
  }

  // fetchFilteredProducts()
  // {
  //   this.searchFilterService.filter$.subscribe(
  //     (response: any) =>
  //     {
  //       this.productsService.getFilteredProducts(response).subscribe({
  //         next: (response: any) => this.products = response.products
  //       })
  //     },
  //   );
  // }
}
