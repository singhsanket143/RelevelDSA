function shiftNegative1(arr) {
    /**
     * Time: O(nlogn)
     * Space: O(logn) // depends on nature of sorting algorithm
     */
    arr.sort((a, b) => b - a); // sorting the array in descending order
    return arr;
}

function shiftNegative2(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let temp = [];
    for(let i = 0; i < arr.length; i++) {
        // this loop will filter all the positive elements
        if(arr[i] >= 0) temp.push(arr[i]);
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) temp.push(arr[i]);
    }
    for(let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }
    return arr;

}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function shiftNegative3(arr) {
    /**
     * Time: O(n)
     * SPace: O(1)
     */
    let i = 0; 
    let j = arr.length - 1;
    while(i <= j) {
        if(arr[i] >= 0 && arr[j] >= 0) {
            i++;
        } else if (arr[i] < 0 && arr[j] < 0) {
            j--;
        } else if (arr[i] >= 0 && arr[j] < 0) {
            j--;
        } else if(arr[i] < 0 && arr[j] >= 0) {
            swap(arr, i, j);
            j--;
        }
    }
    return arr;
}

console.log(shiftNegative3([7,8,-1,9,-6,3,2,11,2,-54,-4,2]));