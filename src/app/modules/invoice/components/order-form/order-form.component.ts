import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-order-form',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  order: Order = new Order();

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
    console.log(this.order);
    this.customerService.addOrder(this.order).subscribe(
      () => {
        console.log('Dane zamówienia zapisane');
        this.router.navigate(['/invoice/summary']); // Przekierowanie do strony podsumowania
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
