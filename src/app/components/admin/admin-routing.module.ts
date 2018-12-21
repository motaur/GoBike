import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';



const adminRoutes: Routes = [
  { path: '', component: AdminComponent,

        children: 
        [
          {
            path: '',
            /*canActivate: [AuthGuard], data: { route: ['admin'],*/
            children: 
            [
              { path: 'add-product', component: AddProductComponent },
              { path: 'user-list', component: UserListComponent },
              { path: '', component: DashboardComponent },
              { path: 'orders', component: OrdersComponent }
            ]
          }
        ] 
    },

    

    // otherwise redirect to profile
    //  { path: '**', redirectTo: '/' }
];


@NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AdminRoutingModule {}