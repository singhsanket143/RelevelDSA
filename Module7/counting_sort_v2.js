function count_sort(arr) {
    /**
     * Time: O(n + k)
     * Space: O(n + k)
     * Stable implementation
     */
    let max_el = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max_el) {
            max_el = arr[i];
        }
    }
    let freq = Array(max_el + 1).fill(0);
    // prepare the frequencies 
    for(let i = 0; i < arr.length; i++) {
        let curr_element = arr[i];
        freq[curr_element]++;
    }
    // prepare the prefix sum
    for(let i = 1; i < freq.length; i++) {
        freq[i] += freq[i-1];
    }
    let output = Array(arr.length);
    for(let i = arr.length - 1; i >= 0; i--) {
        let index_of_last_occ = freq[arr[i]] - 1; // converting from 1 based to 0 based index
        let element = arr[i];
        output[index_of_last_occ] = element;
        freq[arr[i]]--; // reduce the freq for the next prev element
    }
    return output;
}

const arr = [2,5,2,1,6,3,1,2,9,5];
const output = count_sort(arr);
console.log(output);