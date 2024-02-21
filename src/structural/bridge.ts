abstract class Transport {
	abstract engine: Engine;
}

abstract class Engine {
	name: string;
	power: number;

	constructor(name: string, power: number) {
		this.name = name;
		this.power = power;
	}

	abstract getInfo(): void;
}


class GasolineEngine extends Engine {
	gasType: string;

	constructor(name: string, power: number, gasType: string) {
		super(name, power);
		this.gasType = gasType;
	}

	getInfo(): void {
		console.log("===== GASOLINE ENGINE =====");
		console.log("Name " + this.name);
		console.log("Power " + this.power);
		console.log("GasType " + this.gasType);
	}
}

class ElectricalEngine extends Engine {
	voltage: number;

	constructor(name: string, power: number, voltage: number) {
		super(name, power);
		this.voltage = voltage;
	}

	getInfo(): void {
		console.log("===== ELECTRICAL ENGINE =====");
		console.log("Name " + this.name);
		console.log("Power " + this.power);
		console.log("Voltage " + this.voltage);
	}
}


class Plane extends Transport {
	engine: Engine;
}


class Bus extends Transport {
	engine: Engine;
}


const privateBus = new Bus();
const publicBus = new Bus();
const gasEngineV12 = new GasolineEngine("V12", 150, "95");
const electicalEngineTeslaX = new ElectricalEngine("Tesla Model X", 450, 220);



const privatePlane = new Plane();
const publicPlane = new Plane();
const gasEngineW12 = new GasolineEngine("W12", 300, "100");
const electicalEngineFord = new ElectricalEngine("Ford", 100, 380);



publicBus.engine = gasEngineV12;
privateBus.engine = electicalEngineTeslaX;

privatePlane.engine = gasEngineW12;
publicPlane.engine = electicalEngineFord;


privateBus.engine.getInfo();
publicBus.engine.getInfo();
privatePlane.engine.getInfo();
publicPlane.engine.getInfo();



