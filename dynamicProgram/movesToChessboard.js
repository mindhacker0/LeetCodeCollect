//782. 变为棋盘
/**
 * @param {number[][]} board
 * @return {number}
*/
var movesToChessboard = function(board){//穷举，每行移动或不移动，每列移动或不移动
    let height = board.length,width = board[0].length;
    let minStep = Infinity;
    function swapRow(arr,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function swapCol(arr,i,j){
        for(let k=0;k<arr.length;k++){
            swapRow(arr[k],i,j);
        }
    }
    function isChess(board){
        for(let i=0;i<height;i++){
            for(let j=0;j<width;j++){
                if(j>0 && board[i][j]^board[i][j-1]===0) return false;
                if(i>0 && board[i][j]^board[i-1][j]===0) return false;
            }
        }
        return true;
    }
    function traceRow(board,index,step){
        if(step>=minStep) return;
        if(index>=height-1){
            if(isChess(board)){
                //console.log(board,step);
                minStep = Math.min(step,minStep);
            }else{
                traceCol(board,0,step);
            }
            return;
        }
        for(let i=index;i<height;i++){
            swapRow(board,index,i);
            traceRow(board,index+1,i===index?step:step+1);
            swapRow(board,index,i);
        }
    }
    traceRow(board,0,0);
    function traceCol(board,index,step){
        if(step>=minStep) return;
        if(index>=width-1){
            if(isChess(board)){
                //console.log(board,step);
                minStep = Math.min(step,minStep);
            }
            return;
        }
        for(let i=index;i<width;i++){
            swapCol(board,index,i);
            traceCol(board,index+1,i===index?step:step+1);
            swapCol(board,index,i);
        }
    }
    return minStep===Infinity?-1:minStep;
};
var movesToChessboard = function(board){
    let height = board.length,width = board[0].length;
    let rSet = new Set,cSet = new Set;
    for(let i=0;i<height;i++){
        let a = 0,b = 0;
        for(let j=0;j<width;j++){
            if(board[i][j]===1) a|=(1<<j);
            if(board[j][i]===1) b|=(1<<j);
        }
        rSet.add(a);

    }
}
console.log(movesToChessboard([[1,0,0,1,0,0,1,1],[1,0,0,1,0,0,1,1],[1,0,0,1,0,0,1,1],[0,1,1,0,1,1,0,0],[0,1,1,0,1,1,0,0],[1,0,0,1,0,0,1,1],[0,1,1,0,1,1,0,0],[0,1,1,0,1,1,0,0]]));
// console.log(movesToChessboard([[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]));