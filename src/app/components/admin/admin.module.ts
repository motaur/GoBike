import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule }   from '@angular/common';


@NgModule({
   declarations: 
   [
    AdminComponent,
    UserListComponent,
    DashboardComponent,
    OrdersComponent
   ],
   imports: 
   [
    CommonModule,
    AdminRoutingModule,  
    RouterModule,
    ReactiveFormsModule
   ], 
   providers: 
   [
          
   ]
   
})
export class AdminModule { }
