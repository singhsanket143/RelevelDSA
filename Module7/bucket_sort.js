function bucket_sort(arr) {
    /**
     * Time: O(n + k)
     * Space: O(n)
     */
    let n = arr.length;
    let buckets = Array(n);
    for(let i = 0; i < n; i++) buckets[i] = [];
    for(let i = 0; i < n; i++) {
        let bucket_index = Math.floor(arr[i]*n);
        buckets[bucket_index].push(arr[i]);
    }

    for(let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b);
    }
    // console.log(buckets)
    let output = [];
    for(let i = 0; i < buckets.length; i++) {
        for(let j = 0; j < buckets[i].length; j++) {
            output.push(buckets[i][j]);
        }
    }
    return output;
}

const arr = [0.89, 0.55, 0.65, 0.123, 0.65, 0.54];
const output = bucket_sort(arr);
console.log(output);