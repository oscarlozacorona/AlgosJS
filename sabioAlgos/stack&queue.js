class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.back = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size == 0;
	}

	push(val) {
		if (this.isEmpty()) {
			this.size++;
			this.tail = this.head = new Node(val);
		} else {
			this.size++;
			this.tail.next = new Node(val);
			this.tail.next.back = this.tail;
			this.tail = this.tail.next;
		}
	}

	pop() {
		if(this.isEmpty()) {
			return null;
		} else if(this.tail === this.head) {
			this.size--;;
			const poppedNode = this.tail 
			this.head = this.tail = null;
			return poppedNode;
		} else {
			this.size--;
			const poppedNode = this.tail;
			poppedNode.back.next = null;
			this.tail = this.tail.back;
			return poppedNode;
		}
	}

	peek() {
		return this.head;
	}
}

class Stack {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// return bool if stack is empty
	empty() {
		return !this.size;
	}

	// return the size of the stack
	size() {
		return this.size;
	}

	// adds a node to the stack
	push(val) {
		if (this.empty()) {
			this.head = new Node(val);
			this.size = 1;
		} else {
			this.size += 1;
			this.head.back = new Node(val);
			this.head.back.next = this.head;
			this.head = this.head.back;
		}
	}

	// remove the top most Node
	pop() {
		if (this.empty()) {
			return null;
		} else if(this.size === 1) {
			this.size = 0;
			let poppedNode = this.head;
			this.head = null;
			return poppedNode;
		} else {
			this.size -= 1;
			let poppedNode = this.head;
			this.head = this.head.next;
			this.head.back = null;
			poppedNode.next = null;

			return poppedNode;
		}
	}

	// look at the top of the stack
	peak() {
		return this.head;
	}
}


const print = (value) => {
	console.log(value);
}

const main = () => {
	// stack = new Stack();
	
	// stack.push(24);
	// stack.push(12);
	// stack.push(48);
	// stack.push(50);
	// stack.push(48);

	// while(!stack.empty()) {
	// 	console.log(stack.pop());
	// }

	queue = new Queue();

	queue.push(20);
	console.log(queue.tail);
	queue.push(30);
	console.log(queue.tail);
	queue.push(40);
	console.log(queue.tail);
	queue.push(50);
	console.log(queue.tail);
	queue.push(60);
	console.log(queue.tail);

	while (!queue.isEmpty()) {
		console.log(queue.pop());
	}
}

main();
