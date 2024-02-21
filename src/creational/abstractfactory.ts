abstract class PizzaStore {

	orderPizza(type: string): Pizza {
		const pizza = this.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

	abstract createPizza(type: string): Pizza;
}


class NYPizzaStore extends PizzaStore {

	createPizza(type: string): Pizza {
		let pizza: Pizza;
		let ingredientFactory = new NYPIzzaIngredientFactory();

		if (type === "cheese") {
			pizza = new CheesePizza(ingredientFactory);
			pizza.setName("NY Style Cheese Pizza");
		}
		else if (type === "veggie") {
			pizza = new VeggiePizza(ingredientFactory);
			pizza.setName("NY Style Veggie Pizza");
		}
		else if (type === "clam") {
			pizza = new ClamPizza(ingredientFactory);
			pizza.setName("NY Style Clam Pizza");
		}
		else {
			pizza = new PepperoniPizza(ingredientFactory);
			pizza.setName("NY Style Pepperoni Pizza");
		}

		return pizza;
	}
}

abstract class Pizza {
	name: string;
	dought: Dought;
	sauce: Sauce;
	veggies: Veggies[];
	cheese: Cheese;
	pepperoni: Pepperoni;
	clam: Clams;

	ingredientFactory: PizzaIngredientFactory;
	constructor(ingredientFactory: PizzaIngredientFactory) {
		this.ingredientFactory = ingredientFactory;
	}

	abstract prepare(): void

	bake() {
		console.log("Bake for 25 minutes at 350");
	}

	cut() {
		console.log("Cutting the pizza into diagonal slices");
	}

	box() {
		console.log("Place pizza in official PizzaStore box");
	}

	getName(): string {
		return this.name;
	}

	setName(name: string) {
		this.name = name;
	}
}

class CheesePizza extends Pizza {
	prepare(): void {
		console.log("Preparing " + this.name);
		this.dought = this.ingredientFactory.createDough();
		this.sauce = this.ingredientFactory.createSauce();
		this.cheese = this.ingredientFactory.createCheese();
	}
}

class ClamPizza extends Pizza {
	prepare(): void {
		console.log("Preparing " + this.name);
		this.dought = this.ingredientFactory.createDough();
		this.sauce = this.ingredientFactory.createSauce();
		this.cheese = this.ingredientFactory.createCheese();
		this.clam = this.ingredientFactory.createClam();
	}
}

class VeggiePizza extends Pizza {
	prepare(): void {
		console.log("Preparing " + this.name);
	}

}

class PepperoniPizza extends Pizza {
	prepare(): void {
		console.log("Preparing " + this.name);
	}
}

interface PizzaIngredientFactory {
	createDough(): Dought;
	createSauce(): Sauce;
	createCheese(): Cheese;
	createVeggies(): Veggies[];
	createPepperoni(): Pepperoni;
	createClam(): Clams;
}

abstract class Dought { };
abstract class Sauce { };
abstract class Cheese { };
abstract class Veggies { };
abstract class Pepperoni { };
abstract class Clams { };


class ThinCrustDough extends Dought { };
class MarinaraSauce extends Sauce { };
class ReggianoCheese extends Cheese { };

class Garlic extends Veggies { };
class Onion extends Veggies { };
class Mushroom extends Veggies { };
class RedPepper extends Veggies { };

class SlicedPepperoni extends Pepperoni { };
class FreshClams extends Clams { };



class NYPIzzaIngredientFactory implements PizzaIngredientFactory {
	createDough() {
		return new ThinCrustDough();
	}

	createSauce() {
		return new MarinaraSauce();
	}

	createCheese() {
		return new ReggianoCheese();
	}

	createVeggies() {
		let veggies: Veggies[] = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
		return veggies;
	}

	createPepperoni() {
		return new SlicedPepperoni();
	}

	createClam() {
		return new FreshClams();
	}
}

const nyPizzaStore = new NYPizzaStore();
nyPizzaStore.orderPizza("cheese");

console.log("/////////////////////////////////")

// const chicagoPizzaStore = new ChicagoSPizzaStore();
// chicagoPizzaStore.orderPizza("cheese");