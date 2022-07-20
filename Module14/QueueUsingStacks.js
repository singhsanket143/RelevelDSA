class Stack {
    #data; // this data property will be accessible only inside the stack class not outside, this array stores the actual data
    #top; // this parameter is also private and the value denotes the index of the top most element in the array
    constructor() {
        this.#data = [];
        this.#top = -1;
    }

    isEmpty() {
        return this.#top == -1;
    }

    peek() {
        /**
         * Time: O(1)
         */
        // this function returns the topmost element
        if(this.isEmpty()) {
            console.log("Stack is empty, cannot retrive an element");
            return;
        }
        return this.#data[this.#top];
    }

    push(element) {
        /**
         * Time: O(1)
         */
        // this function actually helps to insert a new element in the stack
        this.#top += 1;
        this.#data[this.#top] = element;
    }

    pop() {
        /**
         * Time: O(1)
         */
        // this function removes an element from the Stack
        // we are not going to literally remove an element but just reduce the access to it
        if(this.isEmpty()) {
            console.log("Stack is empty, cannot remove an element");
            return;
        }
        this.#data[this.#top] = undefined;
        this.#top -= 1;
    }

    display() {
        console.log(this.#data);
    }
 
}

class QueueEnqueueEfficient {
    constructor() {
        this.st = new Stack();
    }

    enqeue(data) {
        /**
         * Time: O(1)
         */
        this.st.push(data);
    }

    dequeue() {
        /**
         * Time: O(n)
         */
        let temp = new Stack();
        while(!this.st.isEmpty()) {
            temp.push(this.st.peek());
            this.st.pop();
        }
        temp.pop(); // rmeoved the element added first
        while(!temp.isEmpty()) {
            this.st.push(temp.peek());
            temp.pop();
        }
    }

    getFront() {
        /**
         * Time: O(n)
         */
        let temp = new Stack();
        while(!this.st.isEmpty()) {
            temp.push(this.st.peek());
            this.st.pop();
        }
        let result = temp.peek(); // rmeoved the element added first
        while(!temp.isEmpty()) {
            this.st.push(temp.peek());
            temp.pop();
        }
        return result;
    }
}

class QueueDequeuEfficient {
    constructor() {
        this.st = new Stack();
    }

    enqeue(data) {
        /**
         * Time: O(n)
         */
        let temp = new Stack();
        while(!this.st.isEmpty()) {
            temp.push(this.st.peek());
            this.st.pop();
        }
        this.st.push(data);
        while(!temp.isEmpty()) {
            this.st.push(temp.peek());
            temp.pop();
        }

    }

    dequeue() {
        /**
         * Time: O(1)
         */
        this.st.pop();
    }

    getFront() {
        /**
         * Time: O(1)
         */
        return this.st.peek();
    }
}

let qu = new QueueDequeuEfficient();
qu.enqeue(10);
qu.enqeue(20);
qu.enqeue(30);
qu.enqeue(40);
console.log(qu.getFront());
qu.dequeue();
console.log(qu.getFront());
qu.dequeue();
console.log(qu.getFront());
qu.dequeue();
console.log(qu.getFront());
qu.dequeue();