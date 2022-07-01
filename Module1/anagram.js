function rearrageAnagramBunch(arr) {
    let temp = [];
    for(let i = 0; i < arr.length; i++) {
        temp.push({str: arr[i], idx: i});
    }
    for(let i = 0; i < temp.length; i++) {
        temp[i].str = temp[i].str.split('').sort().join('');
    }
    temp.sort((a, b) => {
        return a.str.localeCompare(b.str);
    })
    let output = [];
    for(let i = 0; i < temp.length; i++) {
        output.push(arr[temp[i].idx])
    }
    return output
}

function rearrageAnagramBunch1(arr) {
    let mp = {};
    for(let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        curr = curr.split('').sort().join('');
        if(!mp[curr]) {
            mp[curr] = [arr[i]];
        } else {
            mp[curr].push(arr[i]);
        }
    }
    let result = [];
    // console.log(Object.values(mp));
    Object.values(mp).forEach(val => {
        result = result.concat(val);
    })
    return result;
}

const input = ["data", "atad", "number", "tada", "adat", "bernum"];
console.log(rearrageAnagramBunch1(input));