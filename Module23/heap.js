function swap(arr, a, b) {
    // this function will swap the elements in the array present at index a and b
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

class MinHeap {
    // implementation of min heap
    constructor() {
        this.arr = [];
    }

    upheapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx > 0) { // till the time we dont reach the root
            let pi = Math.floor((idx - 1) / 2);
            if(this.arr[pi] < this.arr[idx]) break;
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
            if(li < this.arr.length && this.arr[li] < this.arr[smallest]) {
                smallest = li;
            }
            if(ri < this.arr.length && this.arr[ri] < this.arr[smallest]) {
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

    delete(i) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        this.arr[i] = -Infinity;
        this.upheapify(i);
        this.remove();
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
}

let hp = new MinHeap();
hp.insert(7);
hp.insert(8);
hp.insert(16);
hp.insert(10);
hp.insert(9);
hp.insert(80);
hp.insert(50);
hp.insert(18);
hp.insert(12);
hp.insert(13);
hp.insert(6);
hp.display();
console.log(hp.get());
hp.remove();
hp.remove();
console.log(hp.get());
hp.delete(3)
hp.display();