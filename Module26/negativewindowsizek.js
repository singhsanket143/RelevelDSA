class Queue {
    constructor() {
        this.maxSize = 4; // total capacity of the queue
        this.size = 0; // how many elements are there
        this.arr = Array(this.maxSize);
        this.front = 0;
        this.rear = this.maxSize - 1;
    }

    isFull() {
        /**
         * Time: O(1)
         */
        return this.size == this.maxSize;
    }

    isEmpty() {
        /**
         * Time: O(1)
         */
        return this.size == 0;
    }

    enqueue(data) {
        /**
         * Time: O(1)
         */
        if(!this.isFull()) {
            this.rear = (this.rear+1) % this.maxSize;
            this.arr[this.rear] = data;
            this.size++;
            return;
        }
        this.maxSize*=2;
        let temp = Array(this.maxSize);
        let i = 0;
        let newSize = 0;
        while(!this.isEmpty()) {
            temp[i] = this.getFront();
            this.dequeue();
            newSize++;
            i++;
        }
        temp[i] = data;
        newSize++;
        this.arr = temp;
        this.size = newSize;
        this.front = 0;
        this.rear = newSize-1;
    }

    dequeue() {
        /**
         * Time: O(1)
         */
        if(!this.isEmpty()) {
            this.size--;
            this.front = (this.front+1)%this.maxSize;
            return;
        }
        console.log("Cannot remove from an empty queue");
    }

    getFront() {
        /**
         * Time: O(1)
         */
        if(!this.isEmpty()) {
            return this.arr[this.front];
        }
        console.log("Queue is empty");
    }
    display() {
        console.log(this.arr);
    }
}

function getNegatives(arr, k) {
    /**
     * Time: O(n)
     * Space: O(k)
     */
    let qu = new Queue();
    for(let i = 0; i < k; i++) {
        if(arr[i] < 0) qu.enqueue(i);
    }
    
    for(let i = k; i < arr.length; i++) {
        if(!qu.isEmpty()) {
            console.log(arr[qu.getFront()]);
        } else {
            console.log(undefined);
        }
        let elementIndexToBeRemoved = i - k;
        if(!qu.isEmpty() && qu.getFront() == elementIndexToBeRemoved) {
            qu.dequeue();
        }
        if(arr[i] < 0) qu.enqueue(i);
    }
    if(!qu.isEmpty()) {
        console.log(arr[qu.getFront()]);
    } else {
        console.log(undefined);
    }
}

getNegatives([5,1,-3,6,-2,-2,-3,1,-6],3);