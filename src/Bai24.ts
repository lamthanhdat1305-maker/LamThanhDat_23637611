abstract class Appliance {
    abstract turnOn(): void;
}

class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan is turned on");
    }
}

class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Air conditioner is turned on");
    }
}

const fan = new Fan();
const airConditioner = new AirConditioner();

fan.turnOn();
airConditioner.turnOn();
