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

    getSize() {
        return this.size;
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

class StackPushEfficient {
    constructor() {
        this.qu = new Queue();
    }

    push(data) {
        /**
         * Time: O(1)
         */
        this.qu.enqueue(data);
    }

    pop() {
        /**
         * Time: O(n)
         */
        let temp = new Queue();
        while(this.qu.getSize() > 1) {
            temp.enqueue(this.qu.getFront());
            this.qu.dequeue();
        }
        this.qu.dequeue();
        // bring back everything from temp queue to primary queue
        while(!temp.isEmpty()) {
            this.qu.enqueue(temp.getFront());
            temp.dequeue();
        }
    }

    peek() {
        let temp = new Queue();
        while(this.qu.getSize() > 1) {
            temp.enqueue(this.qu.getFront());
            this.qu.dequeue();
        }
        let result = this.qu.getFront();
        temp.enqueue(this.qu.getFront());
        this.qu.dequeue();
        // bring back everything from temp queue to primary queue
        while(!temp.isEmpty()) {
            this.qu.enqueue(temp.getFront());
            temp.dequeue();
        }
        return result;
    }
}

class StackPopEfficient {
    constructor() {
        this.qu = new Queue();
    }
    push(data) {
        /**
         * Time: O(n)
         */
        let temp = new Queue();
        while(!this.qu.isEmpty()) {
            temp.enqueue(this.qu.getFront());
            this.qu.dequeue();
        }
        this.qu.enqueue(data);
        while(!temp.isEmpty()) {
            this.qu.enqueue(temp.getFront());
            temp.dequeue();
        }
    }
    pop() {
        /**
         * Time: O(1)
         */
        this.qu.dequeue();
    }
    peek() {
        /**
         * Time: O(1)
         */
        return this.qu.getFront();
    }
    display() {
        console.log(this.qu);
    }
}

let st = new StackPopEfficient();
st.push(1);
st.push(2);
st.push(3);
console.log(st.peek());
st.pop();
console.log(st.peek());
st.pop();
console.log(st.peek());