//308. 二维区域和检索 - 可变
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {//行或者列前缀和数组 76ms
    this.mtx = matrix;
    this.h = matrix.length;
    this.w = matrix[0].length;
    this.prefix = [];
    for(let i=0;i<this.h;++i){
        this.prefix[i] = [0];
        for(let j=0;j<this.w;++j){
           this.prefix[i].push(this.prefix[i][this.prefix[i].length-1]+this.mtx[i][j]);
        }
    }
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {//单元格的值更新
    let delt = val - this.mtx[row][col];//变化量
    this.mtx[row][col] = val;//更新矩阵
    for(let i=col;i<this.w;++i){//前缀和数组行更新
        this.prefix[row][i+1]+=delt;
    }
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
        result+= this.prefix[i][col2+1] - this.prefix[i][col1];
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