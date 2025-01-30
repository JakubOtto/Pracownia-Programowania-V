import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent {
  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  onSubmitForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(this.customer);
    this.customerService.addCustomer(this.customer).subscribe(
      (data: Customer) => {
        console.log(data);
        alert('Zapisano klienta');
        this.router.navigate(['/invoice/invoice-form']); // Przekierowanie do formularza faktury
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
