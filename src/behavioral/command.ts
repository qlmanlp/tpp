class RemoteController {
	command: Command[] = [];

	setCommand(command: Command) {
		this.command.push(command);
	}

	pushButton(number: number) {
		if (number >= 0 && number < this.command.length)
			this.command[number].execute();
	}
}

interface Command {
	execute(): void;
}


class TV {

	turnOn() {
		console.log("TV has switched on");
	}

	turnOff() {
		console.log("TV has switched off");
	}

}


class onTV implements Command {

	private television: TV;

	constructor(tv: TV) {
		this.television = tv;
	}

	execute(): void {
		this.television.turnOn();
	}
}

class offTV implements Command {
	private television: TV;

	constructor(tv: TV) {
		this.television = tv;
	}

	execute(): void {
		this.television.turnOff();
	}
}


const tv = new TV();
const remoteController = new RemoteController();

const onTvCommand = new onTV(tv);
const offTvCommand = new offTV(tv);

remoteController.setCommand(onTvCommand);
remoteController.setCommand(offTvCommand);

remoteController.pushButton(0);
remoteController.pushButton(1);
remoteController.pushButton(0);




