import Client from "./Client";

export default abstract class Account {
  protected holder: Client;
  protected numberAccount: number;
  protected balance: number;

  constructor(holder: Client, numberAccount: number, balance: number) {
    this.holder = holder;
    this.numberAccount = numberAccount;
    this.balance = balance;
  }

  protected getBalance(): number {
    return this.balance;
  }
}
