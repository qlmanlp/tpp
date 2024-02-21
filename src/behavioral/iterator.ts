class BinaryTreeNode {
	itemValue: number
	left: BinaryTreeNode;
	right: BinaryTreeNode;
	visited: boolean = false;

	constructor(value: number) {
		this.itemValue = value;
	}
}


class BinaryTree {
	public root: BinaryTreeNode;

	constructor() {
	}

	insertItem(newNode: BinaryTreeNode) {
		if (!this.root) {
			this.setRootItem(newNode);
		}
		else {
			this.insertNewNode(this.root, newNode);
		}
	}

	private setRootItem(newNode: BinaryTreeNode) {
		this.root = newNode;
	}

	private insertNewNode(currentNode: BinaryTreeNode, newNode: BinaryTreeNode) {
		if (newNode.itemValue > currentNode.itemValue) {
			this.insertNode(currentNode, newNode, "right");
		}
		else {
			this.insertNode(currentNode, newNode, "left");
		}
	}

	private insertNode(currentNode: BinaryTreeNode, newNode: BinaryTreeNode, direction: "left" | "right") {
		if (!currentNode[direction]) {
			currentNode[direction] = newNode;
		}
		else {
			this.insertNewNode(currentNode[direction], newNode);
		}
	}

	public DepthFirstTraversal() {
		this.DepthFirst(this.root);
	}

	private DepthFirst(currentNode: BinaryTreeNode) {
		if (!currentNode) {
			return;
		}


		console.log(currentNode.itemValue);

		this.DepthFirst(currentNode.left);
		this.DepthFirst(currentNode.right);

	}


}

interface MyIterator {
	hasNext(): boolean;
	next(): number;
}


class PreOrderIterator implements MyIterator {
	private stack: BinaryTreeNode[] = [];
	private currentNode: BinaryTreeNode | null = null;

	constructor(root: BinaryTreeNode) {
		this.stack.push(root);
	}

	hasNext(): boolean {
		return this.stack.length > 0;
	}

	next(): number {
		if (!this.hasNext()) {
			throw new Error('No more elements in the iterator');
		}

		this.currentNode = this.stack.pop()!;

		if (this.currentNode.right) {
			this.stack.push(this.currentNode.right);
		}
		if (this.currentNode.left) {
			this.stack.push(this.currentNode.left);
		}

		return this.currentNode.itemValue;
	}
}

class InOrderIterator implements MyIterator {
	private stack: BinaryTreeNode[] = [];

	constructor(root: BinaryTreeNode) {
		this.pushLeft(root);
	}

	hasNext(): boolean {
		return this.stack.length > 0;
	}

	next(): number {
		if (!this.hasNext()) {
			throw new Error('No more elements in the iterator');
		}

		let currentItem = this.stack.shift()!;

		if (currentItem.right) {
			this.pushLeft(currentItem.right);
		}

		return currentItem.itemValue;
	}

	private pushLeft(node: BinaryTreeNode) {
		while (node) {
			this.stack.unshift(node);
			node = node.left;
		}
	}
}

class PostOrderIterator implements MyIterator {
	private stack: BinaryTreeNode[] = [];

	constructor(root: BinaryTreeNode) {
		this.pushLeft(root);
	}

	hasNext(): boolean {
		return this.stack.length > 0;
	}

	next(): number {
		if (!this.hasNext()) {
			throw new Error('No more elements in the iterator');
		}

		let currentItem = this.stack.shift()!;

		return currentItem.itemValue;

	}

	private pushLeft(node: BinaryTreeNode) {
		while (node) {
			this.stack.unshift(node);

			if (node.right)
				this.pushLeft(node.right);

			node = node.left;
		}

		console.table(this.stack);
	}

}



// Client part 

const node1 = new BinaryTreeNode(7);
const node2 = new BinaryTreeNode(3);
const node3 = new BinaryTreeNode(12);
const node4 = new BinaryTreeNode(1);
const node5 = new BinaryTreeNode(6);
const node6 = new BinaryTreeNode(9);
const node7 = new BinaryTreeNode(13);
const node8 = new BinaryTreeNode(4);

const nodes: BinaryTreeNode[] = [node1, node2, node3, node4, node5, node6, node7, node8];

const binaryTree = new BinaryTree();

for (let i = 0; i < nodes.length; i++) {
	binaryTree.insertItem(nodes[i]);
}

const iterator1 = new PreOrderIterator(binaryTree.root);
const iterator2 = new InOrderIterator(binaryTree.root);
const iterator3 = new PostOrderIterator(binaryTree.root);

while (iterator1.hasNext()) {
	const item = iterator1.next();
	console.log(item);
}

console.log("/////////////////////");

while (iterator2.hasNext()) {
	const item = iterator2.next();
	console.log(item);
}

console.log("/////////////////////");

while (iterator3.hasNext()) {
	const item = iterator3.next();
	console.log(item);
}