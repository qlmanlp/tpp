abstract class Beverage {
	private description: string;

	constructor(description: string) {
		this.description = description;
	}

	public getDescription() {
		return this.description;
	}

	public abstract cost(): number;
}


class Tea extends Beverage {
	cost(): number {
		return 40;
	}

	constructor() {
		super("Good tea");
	}
}

class Coffee extends Beverage {
	cost(): number {
		return 60;
	}

	constructor() {
		super("Perfect coffee");
	}
}

class hotChocolate extends Beverage {
	cost(): number {
		return 50;
	}

	constructor() {
		super("Gentle hot chocolate");
	}
}


abstract class ExtrasDecorator extends Beverage {
	beverage: Beverage;

	constructor(beverage: Beverage) {
		super("")
		this.beverage = beverage;
	}

	public abstract getDescription(): string;
	public abstract cost(): number;
}


class Sugar extends ExtrasDecorator {
	public getDescription(): string {
		return this.beverage.getDescription() + ", Sugar"
	}
	public cost(): number {
		return 5 + this.beverage.cost();
	}
}

class Milk extends ExtrasDecorator {
	public getDescription(): string {
		return this.beverage.getDescription() + ", Milk"
	}
	public cost(): number {
		return 20 + this.beverage.cost();
	}
}

class Whip extends ExtrasDecorator {
	public getDescription(): string {
		return this.beverage.getDescription() + ", Whip"
	}
	public cost(): number {
		return 15 + this.beverage.cost();
	}
}

let tea = new Tea();
tea = new Whip(tea);
tea = new Sugar(tea);

console.log(tea.getDescription());
console.log(tea.cost());
