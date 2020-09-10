class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor(){
		this.root = null;
	}

	addNode(value) {
		if(!this.root) {
			this.root = new Node(value)
		}
		else {
			let pointer = this.root;
			let notInserted = true;

			while(notInserted) {
				if(value === pointer.value) {
					notInserted = true;
				}
				if(value < pointer.value && pointer.left) {
					pointer = pointer.left;
				}
				else if(value < pointer.value) {
					pointer.left = new Node(value);
					notInserted = false;
				}
				else if( value > pointer.value && pointer.right) {
					pointer = pointer.right;
				}
				else if (value > pointer.value) {
					pointer.right = new Node(value);
					notInserted = false;
				}
				else {
					break;
				}
			}
		}
    }
    
    printTreeInOrder(node = this.root) {
        if (node.left) {
            this.printTreeInOrder(node.left);
        }
        console.log(node.value);
        if (node.right) {
            this.printTreeInOrder(node.right);
        }
    }

    findNode(value) {
        let pointer = this.root;

        while (pointer && pointer.value !== value) {
            if (value < pointer.value) {
                pointer = pointer.left;
            }
            else {
                pointer = pointer.right;
            }
        }

        return pointer;
    }

    removeNodeHelper(root, value) {
        if (root === null) {
            return false;
        }

        if (value < root.value) {
            root.left = this.removeNodeHelper(root.left, value);
            return root;
        } 
        else if (value > root.value) {
            root.right = this.removeNodeHelper(root.right, value);
            return root;
        } 
        else {
            // No children
            //case 1 - a leaf node
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }
            // Single Child cases
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;
        
            // Both children, so need to find successor
            let currNode = root.right;
            while (currNode.left !== null) {
                currNode = currNode.left;
            }
            root.data = currNode.data;
            // Delete the value from right subtree.
            root.right = this.removeNodeHelper(root.right, currNode.value);
            return root;
        }
    }

    removeNode(value) {
        return !(this.removeNodeHelper(this.root, value) === false);
    }


}

function main() {
	myTree = new BinarySearchTree();
    myTree.addNode(24);
    myTree.addNode(30);
    myTree.addNode(32);
    myTree.addNode(20);
    myTree.addNode(2);
    myTree.addNode(4);
    myTree.addNode(1);
    myTree.addNode(22);
    myTree.removeNode(4);
	myTree.printTreeInOrder();
}

main();
