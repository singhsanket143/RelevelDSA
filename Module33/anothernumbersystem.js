function convertToDecimal(str) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let result = 0;
    let powOf26 = 1;
    for(let i = str.length - 1; i >= 0; i--) {
        result += (str.charCodeAt(i) - 64)*powOf26;
        powOf26 *= 26;
    }
    return result;
}

console.log(convertToDecimal("AA"))