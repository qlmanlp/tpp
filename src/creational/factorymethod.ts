// // abstract class PizzaStore {

// orderPizza(type: string): Pizza {
// 	const pizza = this.createPizza(type);

// 	pizza.prepare();
// 	pizza.bake();
// 	pizza.cut();
// 	pizza.box();

// 	return pizza;
// }

// 	abstract createPizza(type: string): Pizza;
// }


// class NYStylePizzaStore extends PizzaStore {
// 	createPizza(type: string): Pizza {
// 		let pizza;

// 		if (type === "cheese")
// 			pizza = new NYStyleCheesePizza();
// 		else if (type === "pepperoni")
// 			pizza = new NYStylePepperoniPizza();
// 		else
// 			pizza = new NYStyleVeggiePizza();

// 		return pizza;
// 	}
// }

// class ChicagoStylePizzaStore extends PizzaStore {
// 	createPizza(type: string): Pizza {
// 		let pizza;

// 		if (type === "cheese")
// 			pizza = new ChicagoStyleCheesePizza();
// 		else if (type === "pepperoni")
// 			pizza = new ChicagoStyleNYStylePepperoniPizza();
// 		else
// 			pizza = new ChicagoStyleNYStyleVeggiePizza();

// 		return pizza;
// 	}
// }

// abstract class Pizza {
// 	name: string;
// 	dough: string;
// 	sauce: string;
// 	toppings: string[] = [];


// 	prepare(): void {
// 		console.log("Preparing " + this.name);
// 		console.log("Tossing dough ...");
// 		console.log("Adding sauce...");
// 		console.log("Adding toppings: ")
// 		this.toppings.forEach((topping) => {
// 			console.log(" " + topping);
// 		})

// 	}

// 	bake() {
// 		console.log("Bake for 25 minutes at 350");
// 	}

// 	cut() {
// 		console.log("Cutting the pizza into diagonal slices");
// 	}

// 	box() {
// 		console.log("Place pizza in official PizzaStore box");
// 	}

// 	getName(): string {
// 		return this.name;
// 	}
// }

// class NYStyleCheesePizza extends Pizza {
// 	constructor() {
// 		super();
// 		this.name = "NY Style Sauce and Cheese Pizza";
// 		this.dough = "Thin Crust Dough";
// 		this.sauce = "Marinara Sauce";

// 		this.toppings.push("Grated Regiano Cheese");
// 	}
// }
// class NYStylePepperoniPizza extends Pizza { }
// class NYStyleVeggiePizza extends Pizza { }

// class ChicagoStyleCheesePizza extends Pizza {

// 	constructor() {
// 		super();
// 		this.name = "Chicago Style Deep Dish Cheese Pizza";
// 		this.dough = "Extra Thick Crust Dough";
// 		this.sauce = "Plum Tomato Sauce";

// 		this.toppings.push("Shredded Mozzarella Cheese");
// 	}

// 	cut() {
// 		console.log("Cutting the pizza into square slices");
// 	}
// }
// class ChicagoStyleNYStylePepperoniPizza extends Pizza { }
// class ChicagoStyleNYStyleVeggiePizza extends Pizza { }


// const nyPizzaStore = new NYStylePizzaStore();
// nyPizzaStore.orderPizza("cheese");

// console.log("/////////////////////////////////")

// const chicagoPizzaStore = new ChicagoStylePizzaStore();
// chicagoPizzaStore.orderPizza("cheese");