class Node {
    constructor(key, data) {
        this.key = key;
        this.data = data; // this parameter stores the actual data represented by the node
        this.next = null; // this parameter stores the address of the next adjacent node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // head stores the address of the first node of our linked list
    }

    insertAtHead(key, data) {
        /**
         * Time: O(1)
         */
        // data is the value to be stored in the new node
        let newNode = new Node(key, data);
        if(this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
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
}

class Hashtable {
    constructor() {
        this.loadFactor = 0; // loadfactor represents how much the table is full
        this.MAX_LOAD = 0.5; // if our current load exceed max load we do rehashing
        this.sz = 4; // size of the bucket array of the hashtable
        this.noOfElements = 0; // how many elements have been inserted
        this.bucket = new Array(this.sz); // actual bucket array
    }

    hash(str, sz) {
        /**
         * Time: O(len of str)
         * Space: O(1)
         */
        let p = 1; // some power of 31
        let result = 0;
        for(let i = 0; i < str.length; i++) {
            result = ((result%sz) + (str.charCodeAt(i)*p)%sz) % sz;
            p = (p%sz * 5381)%sz;
        }
        return result;
    }

    rehash() {
        this.sz *= 2; // double the size of hashtable
        let old = this.bucket;
        this.bucket = new Array(this.sz);
        this.noOfElements = 0;
        for(let i = 0; i < old.length; i++) {
            if(old[i] == undefined) continue;
            let temp = old[i].head;
            // console.log(temp);
            while(temp != null) {
            //     console.log("temp", temp)
                this.insert(temp.key, temp.data);
                temp = temp.next;
            }
        }
    }

    insert(key, value) {
        // console.log("called insert", key, value);
        const bucketIndex = this.hash(key, this.sz);
        if(this.bucket[bucketIndex] == undefined) {
            // till now there was no linked list on this bucket
            let ll = new LinkedList();
            ll.insertAtHead(key, value);
            this.bucket[bucketIndex] = ll;
        } else {
            let temp = this.bucket[bucketIndex].head; // temp access to the head of ll
            while(temp != null) {
                if(temp.key == key) {
                    temp.data = value;
                    return;
                }
                temp = temp.next;
            }
            this.bucket[bucketIndex].insertAtHead(key, value);
        }
        this.noOfElements++;
        this.loadFactor = this.noOfElements / this.sz;
        if(this.loadFactor > this.MAX_LOAD) {
            this.rehash();
        }
    }

    search(key) {
        let bucketIndex = this.hash(key, this.sz);
        let temp = this.bucket[bucketIndex].head;
        while(temp != null) {
            if(temp.key == key) return temp.data;
            temp = temp.next;
        }
        return undefined;
    }

    remove(key) {
        let bucketIndex = this.hash(key, this.sz);
        let temp = this.bucket[bucketIndex].head;
        // TODO
    }
}

let ht = new Hashtable();
ht.insert("india", "delhi");
ht.insert("australia", "sydney");
ht.insert("italy", "rome");
ht.insert("swiss", "zurich");
ht.insert("pakistan", "islamabad");

console.log(ht.search("germany"))