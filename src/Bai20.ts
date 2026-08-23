interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car started");
    }

    stop(): void {
        console.log("Car stopped");
    }
}

class Bike implements Vehicle {
    start(): void {
        console.log("Bike started");
    }

    stop(): void {
        console.log("Bike stopped");
    }
}

const car = new Car();
const bike = new Bike();

car.start();
car.stop();

bike.start();
bike.stop();
