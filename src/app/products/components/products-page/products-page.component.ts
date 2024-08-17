import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void {}

}
