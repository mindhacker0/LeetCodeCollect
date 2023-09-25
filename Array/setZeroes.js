//面试题 01.08. 零矩阵
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
*/
var setZeroes = function(matrix) {// O(m+n)空间
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
var setZeroes = function(matrix) {// O(2)
    let m = matrix.length,n = matrix[0].length;
    let isCol0 = false,isRow0 =false;
    for(let i=0;i<m;++i){
        if(matrix[i][0] === 0) isCol0 = true;
    }
    for(let j=0;j<n;++j){
        if(matrix[0][j] === 0) isRow0 = true;
    }
    for(let i=1;i<m;++i){
        for(let j=1;j<n;++j){
            if(matrix[i][j] === 0){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    for(let i=1;i<m;++i){
        for(let j=1;j<n;++j){
            if(matrix[i][0]===0 || matrix[0][j]===0) matrix[i][j] = 0;
        }
    }
    if(isCol0){
        for(let i=0;i<m;++i) matrix[i][0] = 0;
    }
    if(isRow0){
        for(let i=0;i<n;++i) matrix[0][i] = 0;
    }
    console.log(matrix);
}
var setZeroes = function(matrix) {// O(1)
    let m = matrix.length,n = matrix[0].length;
    let isCol0 = false;
    for(let i=0;i<m;++i){
        if(matrix[i][0] === 0) isCol0 = true;
        for(let j=1;j<n;++j){
            if(matrix[i][j] === 0){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    for(let i= m-1;i>=0;--i){//防止第一行保存的信息不被覆盖为0
        for(let j=1;j<n;++j){
            if(matrix[i][0]===0 || matrix[0][j]===0) matrix[i][j] = 0;
        }
        if(isCol0) matrix[i][0] = 0;
    }
    console.log(matrix)
}
console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]));