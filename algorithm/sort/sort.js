const source_arr = [35,99,18,12,18,76];
function sort() {
    const arr = [];
    const a = [];
    for(let i = 0; i < 100; i ++) {
        a[i] = 0;
    }
    for(let i = 0; i < source_arr.length; i ++) {
        const item = source_arr[i]
        a[item] += 1;
    }
    for(let i = 0; i < a.length; i ++) {
        if(a[i] >= 1) {
            for(let j = 0; j < a[i]; j ++){
                arr.push(i);
            }
            
        }
    }
    return arr;
}
const sorted_arr = sort();
console.log(sorted_arr);