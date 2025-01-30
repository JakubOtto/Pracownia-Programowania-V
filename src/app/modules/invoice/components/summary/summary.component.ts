import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { Invoice } from '../../models/invoice';
import { Order } from '../../models/order';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  entries: any[] = [];


  constructor(private http: HttpClient, private customerService: CustomerService) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/customers').subscribe(data => {
      this.entries = data.map(entry => ({
        customer: new Customer().deserialize(entry),
        invoice: entry.invoice ? new Invoice().deserialize(entry.invoice) : null,
        order: entry.order ? new Order().deserialize(entry.order) : null
      }));
    });
  }

  deleteEntry(id: number) {
    this.customerService.deleteEntry(id).subscribe(() => {
      this.entries = this.entries.filter(entry => entry.customer.id !== id);
    });
  }
  
}