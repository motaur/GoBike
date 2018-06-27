import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherComponent } from './weather/weather.component';
import { environment } from './../environments/environment';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartProdComponent } from './cart-prod/cart-prod.component';
import { LoginComponent } from './login/login.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'products', component: ProductsComponent}, 
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent}

]

@NgModule({
  declarations: 
  [
    AppComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    WeatherComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    CartProdComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
