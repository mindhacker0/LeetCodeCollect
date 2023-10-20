//308. 二维区域和检索 - 可变
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {//暴力 击败 100.00% 无语 88ms
    this.mtx = matrix;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {//单元格的值更新
    this.mtx[row][col] = val;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {//计算范围内的矩阵和
    let result = 0;
    for(let i=row1;i<=row2;++i){
        for(let j=col1;j<=col2;++j){
            result+=this.mtx[i][j];
        }
    }
    return result;
};

let matrix;
let func = ["NumMatrix", "sumRegion", "update", "sumRegion"];
let data = [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [3, 2, 2], [2, 1, 4, 3]];
let result = [];
for(var i=0;i<func.length;i++){
    if(func[i] === "NumMatrix"){
        matrix = new NumMatrix(data[i][0]);
    }else{
        let res = matrix[func[i]](...data[i]);
        result.push(res);
        //console.log(func[i],data[i]);
    }
}
console.log(result);