abstract class Handler {
	nextHandler: Handler;

	setNext(handler: Handler): Handler {
		this.nextHandler = handler;
		return this.nextHandler;
	}


	handle(request: string): void {
		if (this.nextHandler != null) {
			this.nextHandler.handle(request);
		}
	}
}


class SpamHandle extends Handler {
	handle(request: string) {
		if (request === "spam") {
			console.log("Spam processed!");
		}
		else if (this.nextHandler) {
			this.nextHandler.handle(request)
		}
		else {
			console.log("Request isn`t processed")
		}

	}
};

class SupportHandle extends Handler {
	handle(request: string) {
		if (request === "trouble") {
			console.log("Trouble processed!");
		}
		else if (this.nextHandler) {
			this.nextHandler.handle(request)
		}
		else {
			console.log("Request isn`t processed")
		}
	}
};
class EngineerHandle extends Handler {
	handle(request: string) {
		if (request === "breaking") {
			console.log("breaking processed!");
		}
		else if (this.nextHandler) {
			this.nextHandler.handle(request)
		}
		else {
			console.log("Request isn`t processed")
		}
	}
};
class DirectorHandle extends Handler {
	handle(request: string) {
		if (request === "conflict") {
			console.log("conflict processed!");
		}
		else if (this.nextHandler) {
			this.nextHandler.handle(request)
		}
		else {
			console.log("Request isn`t processed")
		}
	}
};


const spamFilter = new SpamHandle();
const supportTeam = new SupportHandle();
const engineerTeam = new EngineerHandle();
const director = new DirectorHandle();


spamFilter
	.setNext(supportTeam)
	.setNext(engineerTeam)
	.setNext(director)


const request: string[] = ["spam", "spam", "spam", "conflict", "trouble", "spam", "breaking", "pizza"];

request.forEach(item => {
	spamFilter.handle(item);
})