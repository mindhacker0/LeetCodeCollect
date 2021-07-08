/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(!matrix.length)  return false;
    let height = matrix.length,width = matrix[0].length;
    //首先判断数字是否在超过矩阵最大或最小的范围
    if(target < matrix[0][0] || target > matrix[height-1][width-1]) return false;
    let i =0,j =width-1;
    while(i<height && j >=0){
        if(target > matrix[i][j]){
            i++;
        }else if(target < matrix[i][j]){
            j--;
        }else{
            return  true;
        }
    }
    return false;
};
// console.log(findNumberIn2DArray([
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
//   ],20));
  console.log(findNumberIn2DArray([[-1,3]],3));