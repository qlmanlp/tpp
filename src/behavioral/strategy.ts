class Order {
	products = [
		{ title: "pillow", price: 10 },
		{ title: "flashlight", price: 20 },
	]

	delivery: DeliveryStrategy;

	constructor(delivery: DeliveryStrategy) {
		this.delivery = delivery;
	}


	setDelivery(delivery: DeliveryStrategy) {
		this.delivery = delivery;
	}

	total() {
		return this.delivery.countPrice() * this.products.length;
	}


}

interface DeliveryStrategy {
	rate: number;
	countPrice(): number;
}


class DhlStrategy implements DeliveryStrategy {
	rate = 50;
	days = 1;

	countPrice(): number {
		return this.rate * this.days;
	}
}


class UpsStrategy implements DeliveryStrategy {
	days = 3;
	rate = 20;
	countPrice(): number {
		return this.rate * this.days;
	}
}

class himselfStrategy implements DeliveryStrategy {
	rate = 0;
	days = 7;

	countPrice(): number {
		return this.rate * this.days;
	}


}


const order = new Order(new DhlStrategy);

console.dir(order.total());

order.setDelivery(new himselfStrategy);

console.dir(order.total());
