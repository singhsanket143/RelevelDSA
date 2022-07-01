function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function permutation(arr, i) {
    // base case
    if(i == arr.length - 1) {
        console.log(arr);
        return;
    }
    let visited = {};
    for(let idx = i; idx < arr.length; idx++) {
        if(!visited[arr[idx]]) {
            visited[arr[idx]] = arr[i];
            swap(arr, i, idx);
            permutation(arr, i+1);
            swap(arr, i, idx); // backtrack
        }
    }
} 

permutation(['a', 'b', 'a'], 0);