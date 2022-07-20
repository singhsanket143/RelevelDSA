function detectDistinct(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let mp = {}; // this will be our hashmap/object which will store the frequency of the given elements.
    for(let i = 0; i < arr.length; i++) {
        // we will one by one go to all the elements and then store them in the map if they were never encountered/
        // else if u encounter an already seen entry then we can just check if we prev made the entry or not
        if(!mp[arr[i]]) {
            // element not present in the map
            mp[arr[i]] = 1;
        } else {
            return true; // we encountered a repeition
        }
    }
    return false;
}

console.log(detectDistinct([-1,0,1,2,3]));