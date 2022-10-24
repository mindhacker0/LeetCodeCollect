//74. 搜索二维矩阵
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
*/
var searchMatrix = function(matrix, target) {
    let height = matrix.length,width = matrix[0].length;
    let xin = 0,xax = height-1;
    while(xin<=xax){
        let mid = (xin+xax)>>1;
        if(matrix[mid][0]>target){
            xax = mid-1;
        }else if(matrix[mid][0]<target){
            xin = mid+1;
        }else{
            xin = xax = mid;
            break;
        }
    }
    console.log(xax);
    if(xax<0) return false;
    let yin = 0,yax = width-1;
    while(yin<=yax){
        let mid = (yin+yax)>>1;
        if(matrix[xax][mid]>target){
            yax = mid-1;
        }else if(matrix[xax][mid]<target){
            yin = mid+1;
        }else{
            yin = yax = mid;
            break;
        }
    }
    console.log(yax);
    return matrix[xax][yax] === target;
};
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));
console.log(searchMatrix([[1]],1));