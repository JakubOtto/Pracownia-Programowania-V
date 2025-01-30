import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponentComponent } from './components/customer-list-component/customer-list-component.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerElementListComponent } from './components/customer-element-list/customer-element-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponentComponent,
    CustomerElementListComponent,
    InvoiceFormComponent,
    OrderFormComponent,
    SummaryComponent,
  ],
  imports: [CommonModule, InvoiceRoutingModule, FormsModule, HttpClientModule],
  providers: [CustomerService],
  exports: [CustomerFormComponent, CustomerListComponentComponent],
})
export class InvoiceModule {}
