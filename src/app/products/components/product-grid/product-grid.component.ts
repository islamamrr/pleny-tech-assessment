import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { SearchFilterService } from '../../services/search-filter.service';
import { switchMap } from 'rxjs';
import { SortOption, SortOptionSlug } from '../../enums/sortOption';
import { PRODUCTS_PAGE_SIZE } from '../../constants/constants';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit
{
  sortOptions = Object.values(SortOption);
  sortOption: SortOption = SortOption.RATING;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  totalCount: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = PRODUCTS_PAGE_SIZE;

  constructor(
    private productsService: ProductsService,
    private searchFilterService: SearchFilterService
  ) { }

  ngOnInit(): void
  {
    this.getProducts()
  }

  getProducts()
  {
    const offset = (this.currentPage - 1) * PRODUCTS_PAGE_SIZE;

    this.searchFilterService.searchAndFilter$
      .pipe(
        switchMap(([searchKey, category]) => searchKey ?
          this.productsService.getSearchedProducts(searchKey, offset, SortOptionSlug[this.sortOption]) :
          (category ?
            (
              this.productsService.getFilteredProducts(category, offset, SortOptionSlug[this.sortOption])
            ) :
            this.productsService.getProducts(offset, SortOptionSlug[this.sortOption]))
        )
      )
      .subscribe({
        next: (response: any) =>
        {
          this.products = response.products;
          this.totalCount = response.total;
          this.calculateTotalPages()
        },
        error: (error) => console.error(error)
      });
  }

  nextPage() {
    if ((this.currentPage * PRODUCTS_PAGE_SIZE) < this.totalCount) {
      this.currentPage++;
      this.getProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProducts();
    }
  }

  setPage(page: number) {
    this.currentPage = page;
    this.getProducts();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalCount / PRODUCTS_PAGE_SIZE);
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
