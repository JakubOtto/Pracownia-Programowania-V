import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'invoice-app';
}
