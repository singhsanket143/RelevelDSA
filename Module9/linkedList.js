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

    insertAtTail(data) {
        /**
         * Time: O(n)
         */
        let newNode = new Node(data);
        if(this.head == null) {
            // if the linked list is empty, head is the 
            this.head = newNode;
        }
        // if the linked list is not empty, iterate towards the tail node and then add
        let temp = this.head;
        while(temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode; // add a new node after tail, makes the new node as a new tail node
    }

    insertAt(data, idx) {
        /**
         * Time: O(n)
         */
        if(idx == 0) {
            this.insertAtHead(data);
            return;
        }
        let temp = this.head;
        for(let i = 0; i < idx - 1 && temp != null; i++) {
            temp = temp.next;
        }
        if(temp == null) {
            console.log("Cannot add a node at this index");
            return;
        }
        let newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    deleteFromHead() {
        /**
         * Time: O(1)
         */
        if(this.head == null) {
            console.log("Cannot remove a node from an empty linked list");
            return;
        }
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        return;
    }

    deleteFromTail() {
        /**
         * Time: O(n)
         */
        if(this.head == null) {
            console.log("Cannot remove a node from an empty linked list");
            return;
        }
        if(this.head.next == null) {
            // the head node is the tail node also;
            this.head = null;
            return;
        }
        let temp = this.head;
        while(temp.next.next != null) {
            temp = temp.next;
        }
        // now we have access to the second last node
        temp.next = null;
    }

    deleteAt(idx) {
        /**
         * Time: O(n)
         */
        if(idx == 0) {
            this.deleteFromHead();
            return;
        }
        let temp = this.head;
        for(let i = 0; i < idx - 1 && temp != null; i++) {
            temp = temp.next;
        }
        if(temp == null) {
            console.log("Cannot remove an element at this position");
            return;
        }
        let toBeDeleted = temp.next;
        temp.next = toBeDeleted.next;
        toBeDeleted.next = null;
    }

    display() {
        /**
         * Time: O(n)
         */
        let temp = this.head;
        while(temp != null) {
            // we loop until we surpass the tail
            console.log(temp.data);
            temp = temp.next;
        }
    }

    getAt(idx) {
        /**
         * Time: O(n)
         */
        let temp = this.head;
        for(let i = 0; i < idx && temp != null; i++) {
            temp = temp.next;
        }
        if(temp == null) {
            console.log("Cannot retrieve data of the node present at this index");
            return;
        }
        return temp.data;
    }
}

let ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.display();
console.log("***");
console.log(ll.getAt(1));
