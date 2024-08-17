import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit
{
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void
  {
    this.getAllProducts()
  }

  getAllProducts()
  {
    this.productsService.getProducts().subscribe(
      (response: any) =>
      {
        this.products = response.products;
      },
    );
  }
}
