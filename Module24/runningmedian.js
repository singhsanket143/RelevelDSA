function swap(arr, a, b) {
    // this function will swap the elements in the array present at index a and b
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

class MinHeap {
    // implementation of min heap
    constructor() {
        this.arr = []; // this array will store triplet <value, row_num, index>
    }

    upheapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx > 0) { // till the time we dont reach the root
            let pi = Math.floor((idx - 1) / 2);
            if(this.arr[pi][0] < this.arr[idx][0]) break;
            swap(this.arr, idx, pi);
            idx = pi;
        }
    }

    insert(x) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        this.arr.push(x);
        this.upheapify(this.arr.length - 1);
    }

    downHeapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx < this.arr.length) {
            let li = 2 * idx + 1;
            let ri = 2 * idx + 2;
            let smallest = idx;
            if(li < this.arr.length && this.arr[li][0] < this.arr[smallest][0]) {
                smallest = li;
            }
            if(ri < this.arr.length && this.arr[ri][0] < this.arr[smallest][0]) {
                smallest  = ri;
            }
            if(smallest == idx) {
                break;
            } else {
                swap(this.arr, idx, smallest);
                idx = smallest;
            }
        }
    }

    remove() {
        /**
         * Time: O(n)
         * Space: O(1)
         */
        swap(this.arr, 0, this.arr.length - 1);
        this.arr.pop();
        this.downHeapify(0);
    }

    get() {
        /**
         * Time: O(1)
         * Space: O(1)
         */
        if(this.arr.length == 0) {
            console.log("heap is empty");
            return;
        }
        return this.arr[0];
    }

    display() {
        console.log(this.arr);
    }

    isEmpty() {
        return this.arr.length == 0;
    }
}

class MaxHeap {
    // implementation of min heap
    constructor() {
        this.arr = []; // this array will store triplet <value, row_num, index>
    }

    upheapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx > 0) { // till the time we dont reach the root
            let pi = Math.floor((idx - 1) / 2);
            if(this.arr[pi][0] > this.arr[idx][0]) break;
            swap(this.arr, idx, pi);
            idx = pi;
        }
    }

    sz() {
        return this.arr.length;
    }

    insert(x) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        this.arr.push(x);
        this.upheapify(this.arr.length - 1);
    }

    downHeapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx < this.arr.length) {
            let li = 2 * idx + 1;
            let ri = 2 * idx + 2;
            let largest = idx;
            if(li < this.arr.length && this.arr[li][0] > this.arr[largest][0]) {
                largest = li;
            }
            if(ri < this.arr.length && this.arr[ri][0] > this.arr[largest][0]) {
                largest  = ri;
            }
            if(largest == idx) {
                break;
            } else {
                swap(this.arr, idx, largest);
                idx = largest;
            }
        }
    }

    remove() {
        /**
         * Time: O(n)
         * Space: O(1)
         */
        swap(this.arr, 0, this.arr.length - 1);
        this.arr.pop();
        this.downHeapify(0);
    }

    get() {
        /**
         * Time: O(1)
         * Space: O(1)
         */
        if(this.arr.length == 0) {
            console.log("heap is empty");
            return;
        }
        return this.arr[0];
    }

    display() {
        console.log(this.arr);
    }

    isEmpty() {
        return this.arr.length == 0;
    }

    sz() {
        return this.arr.length;
    }
}

function runningMedian(arr) {
    let minHp = new MinHeap();
    let maxHp = new MaxHeap();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) break;
        if(arr[i] == -1) {
            console.log(maxHp.get());
            maxHp.remove();
            if(maxHp.sz() != minHp.sz()) {
                let el = minHp.get();
                minHp.remove();
                maxHp.insert(el);
            }
            continue;
        }
        if(maxHp.sz() == 0) {
            maxHp.insert(arr[i]);
            continue;
        }
        if(minHp.sz() == maxHp.sz()) {
            if(arr[i] <= maxHp.get()) {
                maxHp.insert(arr[i]);
            } else {
                minHp.insert(arr[i]);
                let el = minHp.get();
                minHp.remove();
                maxHp.insert(el);
            }
        } else {
            if(arr[i] <= maxHp.get()) {
                maxHp.insert(arr[i]);
                let el = maxHp.get();
                maxHp.remove();
                minHp.insert(el);
            } else {
                minHp.insert();
            }
        }
    }
}