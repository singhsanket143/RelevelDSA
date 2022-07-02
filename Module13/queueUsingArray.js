class Queue {
    constructor() {
        this.arr = [];
    }

    enqueue(data) {
        /**
         * Time: O(1)
         */
        this.arr.push(data);
    }

    dequeue() {
        /**
         * Time: O(n)
         */
        if(this.arr.length == 0) {
            console.log("Queue is empty, cannot delete from an empty queue");
            return;
        }
        this.arr.shift();
    }

    front() {
        /**
         * Time: O(1)
         */
        if(this.arr.length == 0) {
            console.log("No element is present as the queue is empty");
            return;
        }
        return this.arr[0];
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
