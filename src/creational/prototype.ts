class Bacteria {
	name: string = "Good Bacteria"


	clone(): Bacteria {
		return this;
	}
}


const bacteria1 = new Bacteria();
const bacteria2 = bacteria1.clone();

console.log(bacteria1.name);
console.log(bacteria2.name);
