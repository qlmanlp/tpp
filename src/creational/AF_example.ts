class FurnitureShop {
	furnitureFactory: FurnitureFactory;

	constructor(furnitureFactory: FurnitureFactory) {
		this.furnitureFactory = furnitureFactory;
	}

	orderFurniture() {
		console.log(this.furnitureFactory.getCabinet().name);
		console.log(this.furnitureFactory.getChair().name);
		console.log(this.furnitureFactory.getTable().name);
	}
}





interface FurnitureFactory {
	getChair(): Chair;
	getTable(): Table;
	getCabinet(): Cabinet;
}

class Chair {
	name: string;
}
class Table {
	name: string;
}
class Cabinet {
	name: string;
}

class UsualFurnitureFactory implements FurnitureFactory {
	getChair(): Chair {
		return new UsualChair;
	}
	getTable(): Table {
		return new UsualTable;
	}
	getCabinet(): Cabinet {
		return new UsualCabinet;
	}
}

class СlassicFurnitureFactory implements FurnitureFactory {
	getChair(): Chair {
		return new ClassicChair;
	}
	getTable(): Table {
		return new ClassicTable;
	}
	getCabinet(): Cabinet {
		return new ClassicCabinet;
	}
}

class ModernFurnitureFactory implements FurnitureFactory {
	getChair(): Chair {
		return new ModernChair;
	}
	getTable(): Table {
		return new ModernTable;
	}
	getCabinet(): Cabinet {
		return new ModernCabinet;
	}
}

class UsualChair extends Chair {
	name = "Usual Chair"
}
class ClassicChair extends Chair {
	name = "Classic Chair"
}
class ModernChair extends Chair {
	name = "Modern Chair"
}

class ModernTable extends Table {
	name = "Modern Table"
}

class UsualTable extends Table {
	name = "Usual Table"
}
class ClassicTable extends Table {
	name = "Classic Table"
}


class UsualCabinet extends Cabinet {
	name = "Usual Cabinet"
}
class ClassicCabinet extends Cabinet {
	name = "Classic Cabinet"
}

class ModernCabinet extends Cabinet {
	name = "Modern Cabinet"
}


const furnitureShop = new FurnitureShop(new СlassicFurnitureFactory);
furnitureShop.orderFurniture();