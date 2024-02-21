

class Component {
	dialog: Mediator

	constructor(mediator: Mediator) {
		this.dialog = mediator;
	}
}


class Input extends Component {
	isValid: boolean;

	submit() {
		this.dialog.notify(this, "inputSubmit");
	}
}

class Button extends Component {
	isEnabled: boolean;

	click() {
		this.dialog.notify(this, "onClick")
	}
}

interface Mediator {
	notify(sender: Component, message: string): void;
}

class Authorization implements Mediator {
	private email: Input;
	private password: Input;

	private submit: Button;

	constructor() {
		this.email = new Input(this);
		this.password = new Input(this);
		this.submit = new Button(this);
	}

	notify(sender: Component, message: string) {
		if (sender instanceof Input && sender.isValid)
			this.submit.isEnabled = true;
		if (sender instanceof Button && sender.isEnabled)
			this.submit.click();
	}
}