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
var findNumberIn2DArray = function(matrix, target) {//二分（62.61%）
    if(!matrix.length) return false;
    let height = matrix.length,width = matrix[0].length;
    if(matrix[0][0]>target||matrix[height-1][width-1]<target) return false;//最大最小值超出了范围
    let l = 0,r = height-1;
    while(l<r){//竖列查找
        let mid = (l+r)>>1;
        if(matrix[mid][0]<target){
            l = mid+1;
        }else if(matrix[mid][0]>target){
            r = mid;
        }else{
            return matrix[mid][0]===target;
        }
    }
    //console.log(l,r);
    let x = l;
    while(x>=0 && matrix[x][width-1]>=target){
        let l = 0, r = width-1;
        while(l<=r){//竖列查找
            let mid = (l+r)>>1;
            if(matrix[x][mid]<target){
                l = mid+1;
            }else if(matrix[x][mid]>target){
                r = mid-1;
            }else{
                return matrix[x][mid]===target;
            }
        }
        //console.log(x,l,r);
        x--;
    }
    return false;
};
console.log(findNumberIn2DArray([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
],10));
console.log(findNumberIn2DArray([[]],-1));
console.log(findNumberIn2DArray([[-1,3]],3));
console.log(findNumberIn2DArray([[-1],[3]],8));
console.log(findNumberIn2DArray([
    [ 1, 2, 3, 4, 5],
    [ 6, 7, 8, 9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
],15));
console.log(findNumberIn2DArray([
    [ 1,4,5],
    [ 3,7,12],
    [ 5,7,16],
    [ 7,10,17],
    [10,11,20],
    [11,14,22]
],12));