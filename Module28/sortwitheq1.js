function reverse(arr, st, end) {
    let lo = st;
    let hi = end;
    while(lo <= hi) {
        let temp = arr[lo];
        arr[lo] = arr[hi];
        arr[hi] = temp;
        lo++;
        hi--;
    }
}

function merge(arr, s1, e1, s2, e2) {
    let output = [];
    let i = s1, j = s2;
    while(i <= e1 && j <= e2) {
        if(arr[i] < arr[j]) {
            output.push(arr[i]);
            i++;
        } else {
            output.push(arr[j]);
            j++;
        }
    }
    while(i <= e1) {
        output.push(arr[i]);
        i++;
    }
    while(j <= e2) {
        output.push(arr[j]);
        j++;
    }
    return output;
}

function compute(A, B, C, x) {
    return A*x*x + B*x + C;
}

function sortWithEq(arr, A, B, C) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    for(let i = 0; i < arr.length; i++) {
        arr[i] = compute(A, B, C, arr[i]);
    }
    if(A > 0) {
        // positive 
        let min = Math.min(...arr);
        let minIdx = arr.indexOf(min);
        reverse(arr, 0, minIdx-1);
        let output = merge(arr, 0, minIdx-1, minIdx+1, arr.length - 1);
        output.splice(0, 0, min);
        return output;
    } else {
        let max = Math.max(...arr);
        let maxIdx = arr.indexOf(max);
        reverse(arr, maxIdx+1, arr.length-1);
        let output = merge(arr, 0, maxIdx-1, maxIdx+1, arr.length - 1);
        output.push(max);
        return output;
    }

}

let arr = [-3,-2,-1,1,2,3,4 ]
let A = 2, B = 3, C = 1;
let ans = sortWithEq(arr, A, B, C);
console.log(ans);