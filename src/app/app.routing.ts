import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: { route: ['profile']} },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule', canActivate: [AuthGuard], data: { route: ['admin'] }},
    { path: 'products', component: ProductsComponent}, 
    { path: 'cart', component: CartComponent},
    { path: 'forbidden', component: ForbiddenComponent},
    
    // otherwise redirect to profile
     { path: '**', redirectTo: 'forbidden' }
];


@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } 
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
