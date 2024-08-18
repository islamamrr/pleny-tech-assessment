import { Component, Input, OnInit } from '@angular/core';
import { ProductClass } from '../../models/product';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementQuantity, incrementQuantity } from '../../store/cart.actions';

@Component({
  selector: 'single-product-card',
  templateUrl: './single-product-card.component.html',
  styleUrls: ['./single-product-card.component.scss']
})
export class SingleProductCardComponent implements OnInit
{
  count: number = 0;

  @Input()
  cart: any = {};
  @Input()
  product?: ProductClass;

  constructor(private store: Store)
  {
  }

  ngOnInit(): void
  {
    this.calculatePreviousPrice();
    this.count = this.cart[this.product!.id]
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
    this.count = this.count ?? 0;
    this.count++;
    this.cart[this.product!.id] = this.count;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.store.dispatch(incrementQuantity());
  }

  decrementCount()
  {
    this.count -= 1;
    if (this.count < 0)
    {
      this.count = 0;
    }
    if (this.count)
    {
      this.cart[this.product!.id] = this.count;
    } else
    {
      delete this.cart[this.product!.id];
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.store.dispatch(decrementQuantity());
  }
}
