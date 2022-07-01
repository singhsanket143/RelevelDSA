function lexico_sort(str) {
    let arr = str.split('');
    arr.sort();
    return arr.join('');
}

console.log(lexico_sort("unacademy"));