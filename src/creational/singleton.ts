class DatabaseConnectionSingleton {
	private static instance: DatabaseConnectionSingleton;
	connectionString: string = "https://mongo.com";

	private constructor() { }

	static getInstance() {
		if (!this.instance) {
			this.instance = new DatabaseConnectionSingleton();
		}

		return this.instance;
	}
}

const db = DatabaseConnectionSingleton.getInstance();
console.log(db.connectionString);