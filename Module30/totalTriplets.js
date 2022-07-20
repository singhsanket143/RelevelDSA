function targetSumPair(lo, hi, arr, k) {
    while(lo <= hi) {
        if(arr[lo] + arr[hi] == k) {
            // if both of them are equal
            let count = 0;
            if(arr[lo] == arr[hi]) {
                let freq = 1;
                let j = lo+1;
                while(arr[j] == arr[lo] && j <= hi) {
                    j++;
                    freq++;
                }
                lo = j;
                if(freq != 1) {
                    count = Math.floor(((freq)*(freq-1))/2);
                    for(let i = 0; i < count; i++) {
                        console.log([-k, arr[hi], arr[hi]]);
                    }
                } 
            } else {
                let lo_freq = 1;
                lo++;
                while(arr[lo] == arr[lo-1]) {
                    lo_freq++;
                    lo++;
                }
                let hi_freq = 1;
                hi--;
                while(arr[hi] == arr[hi+1]) {
                    hi--;
                    hi_freq++;
                }
                let count = lo_freq*hi_freq;
                for(let i = 0; i < count; i++) {
                    console.log([-k, arr[hi+1], arr[lo-1]]);
                }
            }
        }
        if(arr[lo] + arr[hi] > k) {
            hi--;
        } else if(arr[lo] + arr[hi] < k) {
            lo++;
        }
    }
}
function total(arr) {
    // sort the array
    arr.sort((a, b) => a-b);
    // fix one element
    for(let i = 0; i < arr.length; i++) {
        let a = arr[i];
        // console.log(a);
        targetSumPair(i+1, arr.length - 1, arr, -a);
    }
}

total([-1,-1,-1,1,2,2,3,3,3,4,4,4,6,6]);