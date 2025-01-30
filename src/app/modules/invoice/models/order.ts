export class Order {
  orderNumber = '';
  customerName = '';
  orderDate = '';
  shippingAddress = '';
  totalAmount = 0;
  status = '';
  priority = false;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
