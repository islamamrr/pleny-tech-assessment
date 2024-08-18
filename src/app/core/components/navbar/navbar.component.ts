import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchFilterService } from 'src/app/products/services/search-filter.service';
import { selectQuantity } from 'src/app/products/store/cart.selectors';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  lastSubmittedSearch: string = '';
  quantity$?: Observable<number>;
  storedQuantity = 0;

  constructor(
    private searchFilterService: SearchFilterService,
    private store: Store<{ quantity: { quantity: number } }>
  )
  {
  }

  ngOnInit(): void
  {
    this.calculateStoredCartQuantity();
  }

  calculateStoredCartQuantity()
  {
    this.quantity$ = this.store.pipe(select(selectQuantity));
    const storedQuantities = JSON.parse(localStorage.getItem("cart") || "{}");

    this.quantity$.subscribe(quantity =>
    {
      this.storedQuantity = quantity + this.sumValues(storedQuantities)
    });
  }

  sumValues(obj: Record<string, number>): number
  {
    console.log('Object values:', Object.values(obj));
    return Object.values(obj).reduce((acc, value) => acc + value, 0);
  }

  onSearch(searchKey: string)
  {
    if (searchKey != this.lastSubmittedSearch)
    {
      this.searchFilterService.setSearchKey(searchKey);
    }

    this.lastSubmittedSearch = searchKey;
  }

  clearSearch(input: HTMLInputElement)
  {
    input.value = '';

    if (this.lastSubmittedSearch != "")
    {
      this.searchFilterService.setSearchKey("");
    }

    this.lastSubmittedSearch = "";
  }
}
