class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    work(): void {
        console.log(`${this.name} is working`);
    }
}

class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} is managing the team`);
    }
}

class Developer extends Employee {
    code(): void {
        console.log(`${this.name} is writing code`);
    }
}

const manager = new Manager("John");
const developer = new Developer("Peter");

manager.work();
manager.manage();

developer.work();
developer.code();
