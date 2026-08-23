class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient balance");
        }
    }
}

const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(300);

console.log("Balance:", account.balance);
