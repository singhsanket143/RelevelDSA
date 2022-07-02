class Queue {
    constructor() {
        this.arr = [];
        this.fr = 0;
    }

    isEmpty() {
        return this.fr == this.arr.length;
    }

    enqueue(data) {
        /**
         * Time: O(1)
         */
        this.arr.push(data);
    }

    dequeue() {
        /**
         * Time: O(1)
         */
        if(this.isEmpty()) {
            console.log("Queue is empty, cannot delete from an empty queue");
            return;
        }
        this.fr++;
    }

    front() {
        /**
         * Time: O(1)
         */
        if(this.arr.length == 0) {
            console.log("No element is present as the queue is empty");
            return;
        }
        return this.arr[this.fr];
    }
}

let qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);
console.log(qu.front());
qu.dequeue();
console.log(qu.front());
qu.dequeue();
console.log(qu.front());
