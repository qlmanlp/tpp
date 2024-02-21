class TextEditor {

	private text: string = "";
	private history: TextMemento[] = [];
	private currentIndex: number = -1;
	private currentLength: number = this.history.length;

	setText(text: string) {
		this.text = text;
	}

	getText() {
		return this.text;
	}

	save() {
		if (this.currentLength < this.history.length) {
			this.history = this.history.slice(0, this.currentLength);
			this.currentLength = this.history.length;
		}
		else {
			this.history.push(new TextMemento(this.text));
			this.currentIndex++;
			this.currentLength++;
		}
	}

	undo() {
		if (this.currentIndex != 0) {
			this.currentIndex--;
			this.currentLength--;
			this.text = this.history[this.currentIndex].getState();
		}
	}

	redo() {
		if (this.currentLength < this.history.length) {
			this.currentIndex++;
			this.currentLength++;
		}

		this.text = this.history[this.currentIndex].getState();
	}
}



class TextMemento {
	private state: string;

	constructor(text: string) {
		this.state = text;
	}

	getState(): string {
		return this.state;
	}
}


const textEditor = new TextEditor();

textEditor.setText("11111");
textEditor.save();
textEditor.setText("22222");
textEditor.save();
textEditor.setText("33333");
textEditor.save();

textEditor.undo();
console.log(textEditor.getText());
textEditor.redo();
console.log(textEditor.getText());
textEditor.undo();
console.log(textEditor.getText());
textEditor.undo();
console.log(textEditor.getText());
textEditor.save();
console.log(textEditor.getText());
textEditor.setText("New Text 2");
textEditor.save();
console.log(textEditor.getText());
textEditor.undo();
console.log(textEditor.getText());

