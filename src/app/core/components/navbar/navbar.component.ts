import { Component, OnInit } from '@angular/core';
import { SearchFilterService } from 'src/app/products/services/search-filter.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lastSubmittedSearch: string = '';

  constructor(private searchFilterService: SearchFilterService) { }

  ngOnInit(): void {
  }

  onSearch(searchKey: string) {    
    if (searchKey != this.lastSubmittedSearch) {
      this.searchFilterService.setSearchKey(searchKey);
    }
    
    this.lastSubmittedSearch = searchKey;
  }

  clearSearch(input: HTMLInputElement) {
    input.value = '';

    if (this.lastSubmittedSearch != "") {
      this.searchFilterService.setSearchKey("");
    }
    
    this.lastSubmittedSearch = "";
  }
}
