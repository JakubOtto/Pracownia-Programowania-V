import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponentComponent } from './components/customer-list-component/customer-list-component.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  { path: 'customer-list', component: CustomerListComponentComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'invoice-form', component: InvoiceFormComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
