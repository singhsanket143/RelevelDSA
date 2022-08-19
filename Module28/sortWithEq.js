function evaluate(A, B, C, x) {
    return A*x*x + B*x + C;
}

function sortWithEq(arr, A, B, C) {
    /**
     * Time: O(nlogn)
     * Space: O(n)
     */
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let y = evaluate(A, B, C, arr[i]);
        newArr.push(y);
    }
    newArr.sort((a, b) => a - b);
    return newArr
}
let arr = [1,2,3,4,5,6,7];
let A = -1, B = -2, C = 3;
let newArr = sortWithEq(arr, A, B, C);
console.log(newArr);