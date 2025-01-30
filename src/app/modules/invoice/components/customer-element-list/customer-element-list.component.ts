import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-element-list',
  standalone: false,
  templateUrl: './customer-element-list.component.html',
  styleUrl: './customer-element-list.component.scss',
})
export class CustomerElementListComponent {
  @Input()
  customer: Customer = new Customer();

  @Output()
  deletedCustomerEvent = new EventEmitter<Customer>();

  deleteCustomer(customer: Customer) {
    this.deletedCustomerEvent.emit(this.customer);
    console.log('kasuje');
  }
}
