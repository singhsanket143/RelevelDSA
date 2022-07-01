class Node {
    constructor(data) {
        this.data = data; // this parameter stores the actual data represented by the node
        this.next = null; // this parameter stores the address of the next adjacent node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // head stores the address of the first node of our linked list
    }

    insertAtHead(data) {
        /**
         * Time: O(1)
         */
        // data is the value to be stored in the new node
        let newNode = new Node(data);
        if(this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    deleteFromHead() {
        /**
         * Time: O(1)
         */
        if(this.head == null) {
            console.log("Cannot add data to empty structure");
            return;
        }
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        return;
    }

   getHead() {
        return this.head.data;
   }   
}

class Stack {
    constructor() {
        this.ll = new LinkedList();
    }

    push(data) {
        /**
         * Time: O(1)
         */
        this.ll.insertAtHead(data);
    }

    pop() {
        /**
         * Time: O(1)
         */
        this.ll.deleteFromHead();
    }

    peek() {
        /**
         * Time: O(1)
         */
        return this.ll.getHead();
    }
}


let st = new Stack();
st.push(10);
st.push(20);
st.push(30);
console.log(st.peek());
st.pop();
console.log(st.peek());