import { Component } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-invoice-form',
  standalone: false,
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent {
  invoice: Invoice = new Invoice();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  onSubmitForm(form: NgForm) {
    if (form.invalid) {
      console.log('Formularz jest niepoprawny');
      return;
    }
    console.log('Formularz jest poprawny');
    console.log(this.invoice);
    this.customerService.addInvoice(this.invoice).subscribe(
      () => {
        console.log('Dane faktury zapisane');
        this.router.navigate(['/invoice/order-form']); // Przekierowanie do formularza zamówienia
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
