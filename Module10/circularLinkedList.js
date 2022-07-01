class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        /**
         * Time: O(1)
         */
        let newNode = new Node(data);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = this.head;
    }

    insertAtTail(data) {
        /**
         * Time: O(1)
         */
        let newNode = new Node(data);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = this.head;
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
        for(let i = 0; i < idx - 1 && temp != this.tail; i++) {
            temp = temp.next;
        }
        if(temp == this.tail) {
            this.insertAtTail(data);
            return;
        }
        let newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    display() {
        /**
         * Time: O(n)
         */
        if(this.head == null) {
            console.log("Linked List is empty");
            return;
        }
        let temp = this.head;
        while(temp != this.tail) {
            console.log(temp.data);
            temp = temp.next;
        }
        console.log(temp.data);
    }
}

let ll = new CircularLinkedList();
ll.insertAtTail(10);
ll.insertAtTail(20);
ll.insertAtTail(30);
ll.insertAtTail(40);
ll.insertAt(55, 6);
ll.display();