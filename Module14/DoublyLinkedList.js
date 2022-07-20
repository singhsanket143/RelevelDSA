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
            return newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return newNode;

    }

    insertAtTail(data) {
        /**
         * Time: O(n)
         */
        if(this.head == null) {
            let res = this.insertAtHead(data);
            return res;
        }
        let newNode = new Node(data);
        // inside the temp we have tail node
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        return newNode;
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

    moveToLast(node) {
        /**
         * Time: O(1)
         */
        if(node == this.tail) {
            return;
        }
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
        node.next = null;
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
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

class LRUCache {
    constructor(sz) {
        this.dll = new DoublyLL();
        this.mp = {};
        this.maxSize = sz;
        this.currSize = 0;
    }

    put(x) {
        if(!this.mp[x]) {
            // this is the first time we are adding the element
            if(this.currSize == this.maxSize) {
                this.dll.deleteAtHead();
                this.currSize--;
            }
            let node = this.dll.insertAtTail(x);
            this.currSize++;
            this.mp[x] = node;
        } else {
            console.log("element already present");
            return;
        }
    }

    get(x) {
        if(!this.mp[x]) {
            console.log("no such element in the cache");
            return;
        }
        let node = this.mp[x];
        this.dll.moveToLast(node);
        return x;
    }

    remove(x) {
        this.dll.deleteAtHead();
        delete mp[x];
    }

    display() {
        this.dll.display();
        console.log(this.mp);
        console.log("***");
    }
}

let lru = new LRUCache(4);
lru.put(1);
// lru.display();
lru.put(2);
lru.put(3);
lru.put(4);
lru.display();
lru.get(3);
lru.get(3);
lru.get(2);
lru.display();
lru.put(7);
lru.put(9);
lru.display();