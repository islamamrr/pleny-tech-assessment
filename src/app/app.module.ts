import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SingleProductCardComponent } from './components/single-product-card/single-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductsListComponent,
    PageHeaderComponent,
    SingleProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
