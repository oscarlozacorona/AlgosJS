class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingualyLinkedList  {
    constructor(value = null) {
        this.head = null;
        if (value) {
            this.head = new Node(value);
        }
    }

    append(value) {
        if(!this.head) {
            this.head = new Node(value);
        } else {
            let pointer = this.head
            while (pointer.next) {
                pointer = pointer.next;
            }
            pointer.next = new Node(value);
        }
    }

    display() {
        if (!this.head){
            console.log("Empty List");
        } else {
            let pointer = this.head;
            let myString = "";
            while (pointer.next) {
                myString +=  pointer.next +  " => ";
                pointer = pointer.next;
            }

            myString += pointer.value;
            console.log(myString);
        }
    }

    insert(value) {
        if(!this.head) {
            this.head = new Node(value);
        } else {
            if(this.head.value > value) {
                let newNode = new Node(value);
                newNode.next = this.head;
                this.head = newNode;
            } else {
                pointer = this.head;
                while(pointer.next && (pointer.next.value < value)) {
                    pointer = pointer.next;
                }

                let newNode = new Node(value);
                newNode.next = pointer.next;
                pointer.next = newNode;
            }
        }

    }

    remove(value) {
        if(this.head.value === value) {
            this.head = this.head.next;
        } else {
            let pointer = this.head;
            while( pointer.next && (pointer.next.value !== value)) {
                pointer = pointer.next;
            }

            pointer.next = pointer.next.next;
        }
    }
}

const main = () => {
    myLL = new SingualyLinkedList(24);
    myLL.append(32);
    myLL.append(40);
    myLL.append(50);

    console.log(myLL);
}

main();
