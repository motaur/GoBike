import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent,

        children: 
        [
          {
            path: '',
            children: 
            [
              
              { path: 'user-list', component: UserListComponent },
              { path: '', component: DashboardComponent },
              { path: 'orders', component: OrdersComponent }
            ]
          }
        ] 
    },
   
    { path: '**', redirectTo: '/forbidden' }
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