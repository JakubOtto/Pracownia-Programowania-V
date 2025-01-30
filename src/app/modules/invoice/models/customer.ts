export class Customer {
  firstName = '';
  secondName = '';
  city = '';
  email = '';
  street = '';
  houseNumber = 0;
  flatNumber = 0;
  zipCode = '';
  active = true;

  getAddress(): string {
    return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
  }

  getCustomerInfo(): string {
    return `${this.firstName} ${this.secondName}`;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
