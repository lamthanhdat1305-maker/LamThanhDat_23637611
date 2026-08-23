class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}

const user = new User("John");

console.log(user.getName());

user.setName("Peter");

console.log(user.getName());
