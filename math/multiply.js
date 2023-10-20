//311. 稀疏矩阵的乘法
// 给定两个 稀疏矩阵 ：大小为 m x k 的稀疏矩阵 mat1 和大小为 k x n 的稀疏矩阵 mat2 ，返回 mat1 x mat2 的结果。你可以假设乘法总是可能的。
/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
function compressMatrix(matrix){//矩阵压缩
    let comMtx = {};
    let m = matrix.length,n = matrix[0].length;
    for(let i=0;i<m;++i){
        let row=[];
        for(let j=0;j<n;++j){
           if(matrix[i][j]!==0) row.push([j,matrix[i][j]]);
        }
        if(row.length) comMtx[i] = row;
    }
    return comMtx;
}
var multiply = function(mat1, mat2) {
    let result = [];
    let mtx1 = compressMatrix(mat1),mtx2 = compressMatrix(mat2);
    console.log(mtx1,mtx2);
    for(let i in mtx1){
        result[i] = new Array(mat2[0].length).fill(0);
        for(let j=0;j<mtx1[i].length;++j){
            const [col,val] = mtx1[i][j];
            if(!mtx2[col]) continue;
            for(let k=0;k<mtx2[col].length;++k){
                const [col1,val1] = mtx2[col][k];
                result[i][col1]+=val*val1;
            }
        }
    }
    for(let i=0;i<mat1.length;++i){
        if(typeof result[i]!=='object') result[i] = new Array(mat2[0].length).fill(0);
    }
    return result;
};
// 压缩稀疏行 (CSR)
function CSR(matrix){
    const val = [],col = [],row = [0];//row保存每行第一个不为零的元素在val的下标
    let m = matrix.length,n = matrix[0].length;
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(matrix[i][j]!==0){
              val.push(matrix[i][j]);
              col.push(j);
            }
        }
        row.push(val.length);
    }
    return {val,col,row};
}
// 压缩稀疏列 (CSC)
function CSC(matrix){
    const val = [],col = [0],row = [];//row保存每行第一个不为零的元素在val的下标
    let m = matrix.length,n = matrix[0].length;
    for(let i=0;i<n;++i){
        for(let j=0;j<m;++j){
            if(matrix[j][i]!==0){
              val.push(matrix[j][i]);
              row.push(j);
            }
        }
        col.push(val.length);
    }
    return {val,col,row};
}
var multiply = function(mat1, mat2) {
    let result = [];
    let mtx1 = CSR(mat1),mtx2 = CSC(mat2);
    for(let i=0;i<mat1.length;++i){
        result[i] = new Array(mat2[0].length).fill(0);
        for(let j=0;j<mat2[0].length;++j){
            let colStart = mtx1.row[i];
            let colEnd = mtx1.row[i+1];
            let rowStart = mtx2.col[j];
            let rowEnd = mtx2.col[j+1];
            while(colStart<colEnd && rowStart<rowEnd){
                if(mtx1.col[colStart] === mtx2.row[rowStart]){
                    result[i][j]+=mtx1.val[colStart]*mtx2.val[rowStart];
                    colStart++;
                    rowStart++;
                }else if(mtx1.col[colStart] < mtx2.row[rowStart]) colStart++;
                else  rowStart++;
            }
        }
    }
    return result;
}
let m1 = [
    [1,0,0],
    [-1,0,3]
];
let m2 = [
    [7,0,0],
    [0,0,0],
    [0,0,1]
];
console.log(multiply(m1,m2));