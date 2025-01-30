import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Invoice } from '../models/invoice';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl: string = environment.apiUrl;
  customersList: Customer[] = [];

  constructor(private httpClient: HttpClient) {}

  addCustomer(customer: Customer): Observable<any> {
    this.customersList.push(customer);
    return this.httpClient.post<any>(`${this.baseUrl}/customers`, customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseUrl}/customers`).pipe(
      map((customers: Customer[]) => {
        return customers.map((customer: Customer) =>
          new Customer().deserialize(customer)
        );
      })
    );
  }

  addInvoice(invoice: Invoice): Observable<Invoice> {
    return this.httpClient.post<Invoice>(`${this.baseUrl}/invoices`, invoice);
  }

  addOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.baseUrl}/orders`, order);
  }

  deleteCustomer(deletedCustomer: Customer) {
    this.customersList = this.customersList.filter(
      customer => customer.secondName !== deletedCustomer.secondName
    );
  }

  deleteEntry(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/customers/${id}`);
  }

  updateEntry(entry: any): Observable<any> {
    return this.httpClient.put<any>(
      `${this.baseUrl}/customers/${entry.customer.id}`,
      entry
    );
  }
}
