export class Invoice {
  invoiceNumber = '';
  date = '';
  customerName = '';
  amount = 0;
  taxRate = 0;
  paymentMethod = '';
  paid = false;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
