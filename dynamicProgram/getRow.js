//119. 杨辉三角 II
/**
 * @param {number} rowIndex
 * @return {number[]}
*/
var getRow = function(rowIndex) {
    let arr = [1];
    let next = [1,1];
    if(rowIndex===0) return arr;
    if(rowIndex===1) return next;
    for(let i=2;i<=rowIndex;i++){
        arr = new Array(i);
        arr[0] = 1,arr.push(1);
        for(let j=1;j<i;j++) arr[j] = next[j]+next[j-1];
        next = arr;
    }
    return next;
};
console.log(getRow(3))