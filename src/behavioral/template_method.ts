abstract class BuildingConstruction {
	build() {
		this.pourConcrete();
		this.buildWalls();
		this.buildRoof();
		this.connectElectricity();
		this.installDoor();
		this.installWindows();
	}

	abstract pourConcrete(): void;

	abstract buildWalls(): void;

	abstract buildRoof(): void;

	abstract installDoor(): void;

	abstract installWindows(): void;

	private connectElectricity() {
		console.log("The building is connected to electricity");
	}
}


class HouseBuilding extends BuildingConstruction {
	pourConcrete(): void {
		console.log('Concrete 300 poured');
	}
	buildWalls(): void {
		console.log('Brick-walls builded');
	}
	buildRoof(): void {
		console.log('Wooden roof builded');
	}
	installDoor(): void {
		console.log('Iron door was installed');
	}
	installWindows(): void {
		console.log('Plastic windows was installed');
	}

}

const house = new HouseBuilding();
house.build();
