class Youtuber {
	newVideo: boolean = false;
	subscribers: Subscriber[] = [];

	constructor() { }

	makeNewVideoAndNotify() {
		this.newVideo = true;
		this.notifySubscribers();
	}

	notifySubscribers() {
		this.subscribers.forEach((subscriber) => {
			subscriber.notify(this);
		});
	}


	subscribe(user: Subscriber) {
		this.subscribers.push(user);
		console.log("Пользователь подписался");
	}

	unsubscribe(user: Subscriber) {
		const index = this.findSubscriber(user);

		if (index !== -1) {
			this.subscribers.splice(index, 1);
			console.log("Пользователь отписался");
		}
	}

	findSubscriber(user: Subscriber): number {
		const index = this.subscribers.findIndex((subscriber) => subscriber === user);
		return index;
	}

	showSubscribers() {
		this.subscribers.forEach((user) => {
			console.log(user);
		})
	}


}

interface Subscriber {
	notify(youtuber: Youtuber): void;
}

class Qlmanlp implements Subscriber {
	notify(youtuber: Youtuber) {
		console.log(" НОВЫЙ ВИДОС ОТ " + youtuber.constructor.name + " УРА");
	}

}

class Antoha166 implements Subscriber {
	notify(youtuber: Youtuber) {
		console.log("Какой то странный этот чувак " + youtuber.constructor.name + " лучше отпишусь от него");
	}
}


const PhantomLord = new Youtuber();
const user1 = new Qlmanlp();
const user2 = new Antoha166();

PhantomLord.subscribe(user1);
PhantomLord.subscribe(user2);
PhantomLord.showSubscribers();
PhantomLord.makeNewVideoAndNotify();
PhantomLord.unsubscribe(user2);
PhantomLord.showSubscribers();
