class Animal {
    protected makeSound(): void {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof woof");
    }

    showSound(): void {
        this.makeSound();
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow meow");
    }

    showSound(): void {
        this.makeSound();
    }
}

const dog = new Dog();
const cat = new Cat();

dog.showSound();
cat.showSound();
