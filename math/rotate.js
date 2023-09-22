//48. 旋转图像
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {//辅助数组
  let level = matrix.length;
  let visit = new Map;
  for(let i=0;i<level;++i){
    for(let j=0;j<level;++j){
        visit.set(i*level+j,matrix[i][j]);
        let k = visit.get((-j+level-1)*level+i);
        if(typeof k === "undefined") k = matrix[-j+level-1][i];
        matrix[i][j] = k;
       // console.log(`[${i},${level-1-j}]=>[${j},${i}]`)
    }
  }
};
var rotate = function(matrix) {//原地交换
    let level = matrix.length;
    for(let i=0;i<level>>1;++i){
      for(let j=0;j<(level+1)>>1;++j){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[-j+level-1][i];
        matrix[-j+level-1][i] = matrix[-i+level-1][-j+level-1];
        matrix[-i+level-1][-j+level-1] = matrix[j][-i+level-1];
        matrix[j][-i+level-1] = temp;
        // console.log(`[${i},${j}]=>[${-j+level-1},${i}]=>[${-i+level-1},${-j+level-1}]=>[${j},${-i+level-1}]`)
        // console.log(matrix)
       }
    }
};
console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));
// 0 1 0 * x    y
//-1 0 0   y    -x
// 0 0 1   1    1
//平移变化
// 1 0 1 *x   x+1
// 0 1 1  y   y+1
// 0 0 1  1   1
