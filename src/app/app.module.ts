import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { SingleProductCardComponent } from './products/components/single-product-card/single-product-card.component';
import { FilterProductsComponent } from './products/components/filter-products/filter-products.component';
import { PageFooterComponent } from './core/components/page-footer/page-footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ProductGridComponent } from './products/components/product-grid/product-grid.component';
import { BreadcrumbComponent } from './core/components/breadcrumb/breadcrumb.component';
import { IconComponent } from './core/components/icon/icon.component';
import { HttpClientModule } from '@angular/common/http';

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
    IconComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
