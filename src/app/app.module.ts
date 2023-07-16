import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NgOptimizedImage } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { MenuCarritoComponent } from './menu-carrito/menu-carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CarritoComponent,
    MenuCarritoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
