import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductClass } from '../../models/product';

@Component({
  selector: 'single-product-card',
  templateUrl: './single-product-card.component.html',
  styleUrls: ['./single-product-card.component.scss']
})
export class SingleProductCardComponent implements OnInit
{

  @Input()
  product?: ProductClass;

  constructor() { }

  ngOnInit(): void
  {
    this.calculatePreviousPrice();
  }

  calculatePreviousPrice(): void
  {
    if (this.product?.discountPercentage)
    {
      this.product.previousPrice = this.product.price * (1 + this.product.discountPercentage / 100);
    }
  }
}
