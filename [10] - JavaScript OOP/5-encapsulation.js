/*
Encapsulation:
- process of bundling related properties(information/data)
  and methods(functionalities) in a single unit called object.
- protect properties.
*/

class BankAccount {
  // Private Property
  #balance;
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      // this.#balance = this.#balance + amount;
      this.#balance += amount;
      console.log(`Deposited ${amount}. New Balance: ${this.#balance}`);
    } else {
      console.log("Invalid deposit amount. Amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New Balance: ${this.#balance}`);
    } else {
      console.log("Insufficient funds.");
    }
  }
}

const account = new BankAccount("918-273-645", 2000);

// Update the balance (Don't allow the user of the object to update it.)
// account.balance = 10000;
// console.log("Balance:", account.getBalance());

console.log("Account #:", account.accountNumber);
// console.log("Balance:", account.balance); This will not work.
console.log("Balance:", account.getBalance());
account.deposit(500);
account.withdraw(1000);
