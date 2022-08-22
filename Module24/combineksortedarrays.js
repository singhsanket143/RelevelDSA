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

const input = [[1,4,6,8], [2,3,9,10,11,12], [6,8,13,13,14]];

function combineKSortedArrays(input) {
    // Time: O(nklogk)
    // Space: O(k)
    let hp = new MinHeap();
    for(let i = 0; i < input.length; i++) {
        hp.insert([input[i][0], i, 0]);
    }
    // console.log(hp)
    let output = [];
    while(!hp.isEmpty()) {
        let el = hp.get();
        // console.log(el);
        output.push(el[0]);
        // console.log(output)
        hp.remove();
        if(el[2]+1 < input[el[1]].length)
            hp.insert([input[el[1]][el[2]+1], el[1], el[2] + 1]);
        
    }
    return output;
}

console.log(combineKSortedArrays(input));