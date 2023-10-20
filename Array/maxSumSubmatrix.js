//363. 矩形区域不超过 K 的最大数值和
// 给你一个 m x n 的矩阵 matrix 和一个整数 k ，找出并返回矩阵内部矩形区域的不超过 k 的最大数值和。
// 题目数据保证总会存在一个数值和不超过 k 的矩形区域。
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {//以i j个元素为左上角往下探
    let m = matrix.length,n = matrix[0].length;
    let ans = -Infinity;
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(matrix[i][j]>k) continue;
            traceback([i,j],0,0,matrix[i][j]);
        }
    }
    function traceback(start,h,w,sum){//回溯，找到小于K的所有可能
        const [x,y] = start;
        ans = Math.max(ans,sum);
        if(y+w+1<n){
            let deltax = sum;
            for(let i=0;i<=h;++i) deltax+=matrix[x+i][y+w+1];
            if(deltax<=k) traceback(start,h,w+1,deltax);
        }
        if(x+h+1<m){
            let deltay = sum;
            for(let i=0;i<=w;++i) deltay+=matrix[x+h+1][y+i];
            if(deltay<=k) traceback(start,h+1,w,deltay);
        }
    }
    return ans
};
console.log(maxSumSubmatrix([[1,0,1],[0,-2,3]],2));