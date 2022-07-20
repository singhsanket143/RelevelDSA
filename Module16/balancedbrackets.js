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

function checkBalanced(str) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let st = new Stack();
    for(let i = 0; i < str.length; i++) {
        // we will go to every character of the string
        if(str[i] == '(' || str[i] == '{' || str[i] == '[') {
            st.push(str[i]);
        } else {
            // st.display();
            if(str[i] == ')' && st.peek() == '(') {
                st.pop();
            } else if(str[i] == '}' && st.peek() == '{') {
                st.pop();
            } else if(str[i] == ']' && st.peek() =='[') {
                st.pop();
            } else {
                return false;
            }
        }
    }
    return st.isEmpty();
}

console.log(checkBalanced("([((((("))