class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.table = new Array(7);
        this.hashFunction = 7;

        for (let i = 0; i < 7; i++) {
            this.table[i] = new SinglyLinkedList();
        }
    }

    insert(val) {
        let index = val % this.hashFunction
        this.table[index].append(val);
    }

    display() {
        for (let i = 0; i < 7; i++) {
            const val = this.table[i].display()
            if (val) {
                console.log(`${i}: ${val}`);
            } else {
                console.log(`${i} : Empty`);
            }
        }
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        if(!this.head) {
            this.head = new Node(val);
        } else {
            let pointer = this.head;
            while (pointer.next) {
                pointer = pointer.next;
            }
            pointer.next = new Node(val);
        }
    }

    display() {
        if(!this.head) {
            return null;
        } else {
            let pointer = this.head;
            let dispString = '';
            while (pointer.next) {
                dispString += `${pointer.val} -> `;
                pointer = pointer.next;
            }
            dispString += `${pointer.val}`;
            return dispString;
        }
    }
}

const main = () =>  {
    let table = new HashTable();

    table.insert(24);
    table.insert(2);
    table.insert(17);
    table.insert(26);
    table.insert(89);
    table.insert(70);
    table.display();
}

main();
