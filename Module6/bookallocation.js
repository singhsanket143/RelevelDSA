function canAllocate(books, mid, s) {
    /**
     * books -> sorted array that represents no of pages per book
     * mid -> candidate number of pages that can be allocated atmost to a student
     * s ->  no of students
     * Time: O(n)
     * Space: O(!)
     */
    let studentCount = 1;
    let currpages = 0;
    for(let i = 0; i < books.length; i++) { // we will one by one go to all books and try allocation
        if(currpages + books[i] > mid) {
            // we cannot allocate books[i] to the current student, so we hop to the next student
            studentCount++;
            currpages = arr[i]; // because this new book will be given to new student
            if(studentCount > s) {
                // the number of students required to read all books is more than the current student
                return false;
            }
        } else {
            currpages += arr[i]; // if the new book is within the limit allocate this one as well
        }
    }
    return true;
}

let arr = [12,34,67,90];
let students = 2;
let lo = arr[0];
let hi = 0;
let ans = -1;
for(let i = 0; i < arr.length; i++) {
    hi += arr[i];
}
while(lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if(canAllocate(arr, mid, students)) {
        ans = mid;
        hi  =mid - 1;
    } else {
        lo = mid + 1;
    }
}

console.log(ans);

/**
 * Time: O(nlognsum(ai))
 * Space: O(1)
 */