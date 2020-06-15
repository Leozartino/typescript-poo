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

  public abstract withdraw(value: number): void;

  public abstract cashDeposit(value: number): void;

  public withdrawMoney(value: number): boolean {
    if (this.balance < value) {
      return false;
    }
    this.balance -= value;
    return true;
  }

  public cashTransfer(value: number, account: Account) {
    if (this.withdrawMoney(value)) {
      account.balance += value;
    }
  }
}
