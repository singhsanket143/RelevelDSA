class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL {
    constructor() {
        this.head = null;
    }

    insertAtHead(data) {
        /**
         * Time: O(1)
         */
        let newNode = new Node(data);
        if(this.head == null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAtTail(data) {
        /**
         * Time: O(n)
         */
        if(this.head == null) {
            this.insertAtHead(data);
        }
        let newNode = new Node(data);
        let temp = this.head;
        while(temp.next != null) {
            temp = temp.next;
        }
        // inside the temp we have tail node
        temp.next = newNode;
        newNode.prev = temp;
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
            console.log("Cannot add the value at this index");
            return;
        }
        if(temp.next == null) {
            this.insertAtTail(data);
            return;
        }
        let newNode = new Node(data);
        newNode.next = temp.next;
        newNode.prev = temp;
        temp.next = newNode;
        newNode.next.prev = newNode;
    }

    deleteAtHead() {
        /**
         * Time: O(1)
         */
        if(this.head == null) {
            console.log("Cannot delete form an empty linked list");
            return;
        }
        if(this.head.next == null) {
            // single node
            this.head = null;
            return;
        }
        let newHead = this.head.next;
        this.head.next = null;
        newHead.prev = null;
        this.head = newHead;
    }

    deleteAtTail() {
        /**
         * Time: O(n)
         */
        if(this.head == null) {
            console.log("Cannot delete form an empty LL");
            return;
        }
        if(this.head.next == null) {
            this.head = null;
            return;
        }
        let temp = this.head;
        while(temp.next.next != null) {
            temp = temp.next;
        }
        let tail = temp.next;
        tail.prev = null;
        temp.next = null;
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
        for(let i = 0; i < idx - 1 && temp != null; i++) {
            temp = temp.next;
        }
        if(temp == null || temp.next == null) {
            console.log("Cannot delete at the given index");
            return;
        }
        if(temp.next.next == null) {
            this.deleteAtTail();
            return;
        }
        let toBeDeleted = temp.next;
        let x = toBeDeleted.next;
        temp.next = x;
        x.prev = temp;
        toBeDeleted.next = toBeDeleted.prev = null;
    }

    display() {
        /**
         * Time O(n)
         */
        let temp = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let ll = new DoublyLL();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.display();
console.log("***");
ll.deleteAt(3);
ll.display();
