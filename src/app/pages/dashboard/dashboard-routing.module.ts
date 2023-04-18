import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InformationComponent } from 'src/app/components/information/information.component';
import { OrdersComponent } from 'src/app/components/orders/orders.component';
import { PaymentsComponent } from 'src/app/components/payments/payments.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, 
    children: [
      { path: "information", component: InformationComponent },
      { path: "orders", component: OrdersComponent },
      { path: "payments", component: PaymentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
