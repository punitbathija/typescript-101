import { hasFormatter } from "../interfaces/hasFormatter";

class Payment implements hasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
  }
}

export default Payment;
