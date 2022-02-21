class NumMatrix{
    constructor(matrix) {
        this.matrix = matrix;
        this.prevSumMatrix = this.calcSumMatrix(matrix);
    }
    /** 
     * @param {number} row1 
     * @param {number} col1 
     * @param {number} row2 
     * @param {number} col2
     * @return {number}
     */
    sumRegion = function(row1, col1, row2, col2) {
        return this.prevSumMatrix[row2][col2] + ((row1>=1&&col1>=1)?this.prevSumMatrix[row1-1][col1-1]:0) -(row1>=1?this.prevSumMatrix[row1-1][col2]:0) - (col1>=1?this.prevSumMatrix[row2][col1-1]:0);
    }
    calcSumMatrix(matrix){//计算前缀矩阵
        let arr =[];
        for(let i=0;i<matrix.length;i++){
            arr[i] = [];
            for(let j=0;j<matrix[i].length;j++){
                if(i===0&&j===0){
                    arr[i][j] = matrix[i][j];
                }else{
                    arr[i][j] = (i>=1?arr[i-1][j]:0) + (j>=1?arr[i][j-1]:0) - ((i>=1&&j>=1)?arr[i-1][j-1]:0) + matrix[i][j];
                }
            }
        }
        for(let i =0;i<arr.length;i++){
            console.log(arr[i]);
        }
        return arr;
    }
};

let matrix;
let func = ["NumMatrix","sumRegion","sumRegion","sumRegion"]
let data = [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
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