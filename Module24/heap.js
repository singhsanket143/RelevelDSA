function swap(arr, a, b) {
    // this function will swap the elements in the array present at index a and b
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
class Heap {
    // implementation of min heap
    constructor(comp) {
        this.arr = []; // this array will store triplet <value, row_num, index>
        this.comp = comp; // this will be callback function
    }

    upheapify(idx) {
        /**
         * Time: O(logn)
         * Space: O(1)
         */
        while(idx > 0) { // till the time we dont reach the root
            let pi = Math.floor((idx - 1) / 2);
            if(this.comp(this.arr[pi], this.arr[idx])) break;
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
            if(li < this.arr.length && this.comp(this.arr[li], this.arr[smallest])) {
                smallest = li;
            }
            if(ri < this.arr.length && this.comp(this.arr[ri], this.arr[smallest])) {
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

const hp = new Heap((a, b) => {
    return a > b;
});

hp.insert(10);
hp.insert(20);
hp.insert(30);
console.log(hp.arr);
console.log(hp.get());