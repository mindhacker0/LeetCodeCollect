//面试题 01.08. 零矩阵
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
*/
var setZeroes = function(matrix) {
    let delRow = new Set,delCol = new Set;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0){
                delRow.add(i);
                delCol.add(j);
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(delRow.has(i)||delCol.has(j)) matrix[i][j] = 0;
        }
    }
    return matrix;
};
console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]));