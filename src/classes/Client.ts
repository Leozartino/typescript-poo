export default class Client {
  private name: string;
  private cpf: string;
  private adress: string;
  private age: number;

  constructor(name: string, cpf: string, adress: string, age: number) {
    this.name = name;
    this.cpf = cpf;
    this.adress = adress;
    this.age = age;
  }

  public ofAge(): boolean {
    if (this.age >= 18) {
      return true;
    } else {
      return false;
    }
  }
}
