import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list-component',
  standalone: false,
  templateUrl: './customer-list-component.component.html',
  styleUrl: './customer-list-component.component.scss',
})
export class CustomerListComponentComponent implements OnInit, OnDestroy {
  customersList: Customer[] = [];
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customersList = data;
    });
  }
  ngOnDestroy() {
    console.log('zamykam komponent');
  }

  redirectToForm() {
    this.router.navigate(['/invoice/customer-form']);
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer);
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customersList = data;
    });
  }
}
