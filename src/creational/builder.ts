class CarBuilder {
	private car: Car;

	constructor() {
		this.car = new Car();
	}

	setColor(color: string): CarBuilder {
		this.car.color = color;
		return this;
	}

	setEngine(engine: string): CarBuilder {
		this.car.engine = engine;
		return this;
	}

	setCarBody(carBody: string): CarBuilder {
		this.car.carBody = carBody;
		return this;
	}

	setSeats(seats: number): CarBuilder {
		this.car.seats = seats;
		return this;
	}

	build(): Car {
		return this.car;
	}
}

class Car {
	color: string;
	engine: string;
	carBody: string;
	seats: number;
}

const car = new CarBuilder()
	.setColor('Grey')
	.setCarBody('Sedan')
	.setEngine('V8')
	.setSeats(6)
	.build();

console.log(car);
