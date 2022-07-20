function arrange(arr) {
    /**
     * Time: O(nlogn)
     * Space: O(n)
     */
    let evenElements = [];
    let oddElements = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]%2 == 0) evenElements.push(arr[i]);
        else oddElements.push(arr[i]);
    }
    evenElements.sort((a, b) => a - b);
    oddElements.sort((a, b) => b - a);
    return evenElements.concat(oddElements);
}

console.log(arrange([0,1,2,3,4,5,6,7]));