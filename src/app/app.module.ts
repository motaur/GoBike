
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { GoogleChartsModule } from 'angular-google-charts';

//components
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProdComponent } from './components/cart-prod/cart-prod.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlertComponent } from './directives/alert.component';
import { AboutComponent } from './components/about/about.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
//services
import { AuthenticationService } from './services/authentication.service';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { AlertService } from './services/alert.service';
//helpers
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app.routing';
import { HoverDirective } from './hover.directive';
import { SearchPipe } from './search.pipe';

@NgModule({
   declarations: [
      AppComponent,
      HoverDirective,
      SearchPipe,
      HomePageComponent,
      ProductsComponent,
      ProductComponent,
      CartComponent,
      CartProdComponent,
      LoginComponent,
      RegisterComponent,
      ProfileComponent,
      LoginComponent,
      RegisterComponent,
      AlertComponent,
      AboutComponent,
      ForbiddenComponent,
      
      
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule
      //GoogleChartsModule 
      
      
   ],
   providers: [
      AlertService,
      AuthGuard,
      ProductService,
      AuthenticationService,
      CartService,
      UserService,
      //for intercept requests
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
      
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
