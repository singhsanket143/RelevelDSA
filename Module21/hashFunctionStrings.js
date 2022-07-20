function hash(str, sz) {
    /**
     * Time: O(len of str)
     * Space: O(1)
     */
    let p = 1; // some power of 31
    let result = 0;
    for(let i = 0; i < str.length; i++) {
        result = ((result%sz) + (str.charCodeAt(i)*p)%sz) % sz;
        p = (p%sz * 31)%sz;
    }
    return result;
}

console.log(hash("relevel", 16))