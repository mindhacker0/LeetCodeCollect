//118. 杨辉三角
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr = [];
  arr.push([1]);
  if(numRows===1) return arr;
  for(let i=1;i<numRows;i++){
    arr[i] = new Array(i);
    arr[i][0] = 1;arr[i].push(1);
    for(let j=1;j<i;j++){
        arr[i][j] = arr[i-1][j-1]+arr[i-1][j];
    }
  }
  return arr;
};
console.log(generate(5))