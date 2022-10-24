//1640. 能否连接形成数组
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
*/
var canFormArray = function(arr, pieces) {//arr 中的整数 互不相同
    let orderMap = new Map;
    for(let i=0;i<arr.length;i++){
        orderMap.set(arr[i],i);
    }
    pieces.sort((a,b)=>orderMap.get(a[0])-orderMap.get(b[0]));
    console.log(pieces);
    let index = 0;
    for(let i=0;i<pieces.length;i++){
        for(let j=0;j<pieces[i].length;j++){
            if(pieces[i][j]===arr[index]) index++;
            else return false;
        }
    }
    return true;
};
console.log(canFormArray([15,88],[[88],[15]]));