import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SearchFilterService } from '../../services/search-filter.service';

@Component({
  selector: 'filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit
{
  productCategories: string[] = [];
  selectedCategory: string = 'All';

  constructor(
    private productsService: ProductsService,
    private searchFilterService: SearchFilterService,
  ) { }

  ngOnInit(): void
  {
    this.fetchProductCategories();
  }

  fetchProductCategories()
  {
    this.productsService.getProductsCategories().subscribe((categories: any) =>
    {
      this.productCategories.push('All');
      (categories.map((category: any) =>
      {
        this.productCategories.push(category.name);
      }))
    });
  }

  onSelect()
  {
    this.searchFilterService.setFilterCategory(this.selectedCategory);
  }
}
