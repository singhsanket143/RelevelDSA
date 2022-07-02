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
            this.tail.next = this.head;
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
            this.tail.next = this.head;
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

    deleteAtHead() {
        /**
         * Time: O(1);
         */
        if(this.head == null) {
            console.log("Cannot delete from an empty linked list");
            return;
        }
        if(this.head.next == this.head) {
            this.head = null;
            this.tail = null;
            return;
        }
        let newHead = this.head.next;
        this.head.next = null;
        this.tail.next = newHead;
        this.head = newHead;
    }

    deleteAtTail() {
        /**
         * Time: O(n)
         */
        if(this.head == null) {
            console.log("Cannot delete from an empty linked list");
            return;
        }
        if(this.head.next == this.head) {
            this.head = null;
            this.tail = null;
            return;
        } 
        let temp = this.head;
        // iterate on the linked list to get the second last node
        while(temp.next != this.tail) {
            temp = temp.next;
        }
        temp.next = this.head;
        this.tail.next = null;
        this.tail = temp;
    }

    deleteAt(idx) {
        /**
         * Time: O(n)
         */
        if(idx == 0) {
            this.deleteAtHead();
            return;
        }
        let temp = this.head;
        for(let i = 0; i < idx - 1 && temp != this.tail; i++) {
            temp = temp.next;
        }
        // console.log(temp.data)
        if(temp.next == this.tail) {
            this.deleteAtTail();
            return;
        }
        if(temp == this.tail) {
            console.log("Index passed is out of bound");
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
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.display();
console.log("***");
ll.deleteAt(3);
ll.display();