//74. 搜索二维矩阵
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
*/
function search(nums,target){//折半查找
    let left = 0,right = nums.length-1;
    let middle;
    while (left<=right){
        middle =left +  ~~((right-left)/2);
        if(nums[middle] == target){
            return middle;
        }else if(nums[middle] <= target){
            left = middle+1;
        }else{
            right = middle-1;
        }
    }
    return -1;
}
var searchMatrix = function(matrix, target) {
    if(matrix.length===0) return false;
    let start = 0,end = matrix[0].length-1,depth = 0;
    for(;;){
        if(matrix[depth][start]<= target && target <= matrix[depth][end]){//定位到矩阵某一层
            return !!~search(matrix[depth],target);
        }else{
            depth++;
            if(depth === matrix.length) break;//没找到
        }
    }
    return false;
};
let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 3;
console.log(searchMatrix(matrix,target));
console.log(search([1,3,5,7],3));