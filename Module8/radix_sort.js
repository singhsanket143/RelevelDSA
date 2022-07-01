function count_sort(arr, place) {
    let n = arr.length;
    let freq = Array(10).fill(0);
    for(let i = 0; i < n; i++) { // we will iterate on every single element
        // extract the digit at given place of the number and increase the frequency
        let digit = Math.floor(arr[i]/place) % 10; // arr[i] = 984, place = 10, 984/10 -> 98 % 10 -> 8
        freq[digit]++; 
    }
    // prepare prefix sum array
    for(let i = 1; i < 10; i++) {
        freq[i] += freq[i-1];
    }
    let output = Array(n);
    for(let i = n-1; i >= 0; i--) {
        let digit = Math.floor(arr[i]/place) % 10;
        output[freq[digit] - 1] = arr[i];
        freq[digit]--;
    }
    // copy the output in the arr, so that we can ruse the same array
    for(let i = 0; i < n; i++) arr[i] = output[i];
}

function radix_sort(arr) {
    let max_el = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        // calculating the maximum element, to get the max digits reqd
        if(arr[i] > max_el) {
            max_el = arr[i];
        } 
    }
    for(let place = 1; Math.floor(max_el/place) > 0; place *= 10) {
        // call counting sort for every place
        count_sort(arr, place);
    }
}

const arr = [129, 431, 234, 653, 232, 824, 2, 921, 54];
radix_sort(arr);
console.log(arr);