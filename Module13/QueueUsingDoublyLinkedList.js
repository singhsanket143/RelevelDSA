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
        // inside the temp we have tail node
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
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
            this.tail = null;
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
            this.tail = null;
            return;
        }
        let newTail = this.tail.prev;
        newTail.next = null;
        this.tail.prev = null;
        this.tail = newTail;
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

    getTail() {
        if(this.head == null) {
            console.log("LL is empty");
            return;
        }
        return this.tail.data;
    }
}

class Queue {
    constructor() {
        this.ll = new DoublyLL();
    }

    enqueue(data) {
        /**
         * Time: O(1)
         */
        this.ll.insertAtHead(data);
    }

    dequeue() {
        /**
         * Time: O(1)
         */
        this.ll.deleteAtTail();
    }

    getFront() {
        /**
         * Time: O(1)
         */
        return this.ll.getTail();
    }
}

let qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);
console.log(qu.getFront());
qu.dequeue();
console.log(qu.getFront());
qu.dequeue();
console.log(qu.getFront());
