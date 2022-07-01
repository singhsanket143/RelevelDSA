function count_sort(arr) {
    /**
     * Time: O(n+k)
     * Space: O(n+k)
     */
    let min_el = Infinity;
    let max_el = -Infinity;
    for(let i = 0; i < arr.length; i++) { // n
        if(arr[i] < min_el) {
            // if we found an element which is lesser than the current minimum element, we update it
            min_el = arr[i];
        }
        if(arr[i] > max_el) {
            // if we found an element which is greater than the current maximum element, we update it
            max_el = arr[i];
        }
    }
    // range = max - min + 1
    let frequency = Array(max_el + 1).fill(0); // this array will store the frequency
    for(let i = 0; i < arr.length; i++) { // n
        let curr_element = arr[i];
        frequency[curr_element]++; // incrememnt the frequency of the current element in the frequency array
    }
    let output = [];
    for(let i = 0; i < frequency.length; i++) { // k
        while(frequency[i] > 0) { // n
            output.push(i);
            frequency[i]--;
        }
    }
    return output;
}

const arr = [3,1,2,3,4,9,1,6];
const output = count_sort(arr);
console.log(output);