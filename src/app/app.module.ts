import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { SingleProductCardComponent } from './components/single-product-card/single-product-card.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    SingleProductCardComponent,
    FilterProductsComponent,
    PageFooterComponent,
    NavbarComponent,
    ProductGridComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
