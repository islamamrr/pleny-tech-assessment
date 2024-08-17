import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {
  
  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();
  
  private filterSubject = new BehaviorSubject<string>('');
  filter$ = this.filterSubject.asObservable();

  searchAndFilter$ = combineLatest([this.search$, this.filter$]);
  
  setSearchKey(value: string) {
    this.searchSubject.next(value);
  }

  setFilterCategory(value: string) {
    this.filterSubject.next(value);
  }

}
