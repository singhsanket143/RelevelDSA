function tour(arr) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let start = 0, end  = 1;
    let currPetrol = arr[start][0] - arr[start][1];
    while(end != start || currPetrol < 0) {
        // either petrol becomes negative or we complete the tour, we will continue
        while(currPetrol < 0 && start != end) {
            currPetrol -= arr[start][0] - arr[start][1];
            start = (start + 1)%arr.length;
            if(start == 0) return -1;
        }
        currPetrol += arr[end][0] - arr[end][1];
        end = (end + 1)%arr.length;
    }
    return start;
}

let arr = [[4,6], [6,5], [7,3], [4,5]];
console.log(tour(arr))