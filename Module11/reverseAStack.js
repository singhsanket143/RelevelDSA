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

function insertAtBottom(st, data) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let secondary = new Stack();
    // remove all the eements from the original stack and add then in the secondary stack
    while(!st.isEmpty()) {
        let currentTop = st.peek();
        secondary.push(currentTop);
        st.pop();
    }
    st.push(data); // here we added the new data at the last
    while(!secondary.isEmpty()) {
        let currentTop = secondary.peek();
        st.push(currentTop);
        secondary.pop();
    }
}

function insertAtBottomRecursive(st, data) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    if(st.isEmpty()) {
        st.push(data);
        return;
    }
    let top = st.peek();
    st.pop();
    insertAtBottomRecursive(st, data);
    st.push(top);
}

function reverse(st) {
    /**
     * Time: O(n^2)
     * Space: O(n)
     */
    if(st.isEmpty()) {
        return;
    }
    let top = st.peek();
    st.pop();
    reverse(st); // recursively anyhow reverse the remaining stack
    insertAtBottomRecursive(st, top);
}

let st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.display();
console.log("***");
reverse(st);
st.display();
console.log(st.peek());