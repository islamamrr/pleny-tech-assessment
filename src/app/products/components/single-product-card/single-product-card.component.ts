import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductClass } from '../../models/product';

@Component({
  selector: 'single-product-card',
  templateUrl: './single-product-card.component.html',
  styleUrls: ['./single-product-card.component.scss']
})
export class SingleProductCardComponent implements OnInit
{
  count = 0;
  cart = JSON.parse(localStorage.getItem('cart') || '{}');

  @Input()
  product?: ProductClass;

  constructor() { }

  ngOnInit(): void
  {
    this.calculatePreviousPrice();
  }

  calculatePreviousPrice()
  {
    if (this.product?.discountPercentage)
    {
      this.product.previousPrice = this.product.price * (1 + this.product.discountPercentage / 100);
    }
  }

  fixCategoryName()
  {
    return this.product?.category.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  incrementCount()
  {
    this.count += 1;
    this.cart[this.product!.id] = this.count;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decrementCount()
  {
    this.count -= 1;
    if (this.count)
    {
      this.cart[this.product!.id] = this.count;
    } else
    {
      delete this.cart[this.product!.id];
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
