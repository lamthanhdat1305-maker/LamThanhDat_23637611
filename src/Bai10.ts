class Account {
    public accountNumber: string;
    private balance: number;
    readonly bankName: string;

    constructor(accountNumber: string, balance: number, bankName: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.bankName = bankName;
    }

    showInfo(): void {
        console.log("Account Number:", this.accountNumber);
        console.log("Balance:", this.balance);
        console.log("Bank:", this.bankName);
    }
}

const account = new Account("123456", 5000, "ABC Bank");

account.showInfo();
