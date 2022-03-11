//773. 滑动谜题
/**
 * @param {number[][]} board
 * @return {number}
*/
var slidingPuzzle = function(board) {
    let stack = [];
    let map = {};
    let m = board.length;
    let n = board[0].length;
    let [sx,sy] = findZero(board);
    stack.push([sx,sy,board,0]);
    let mintime = -1;
    while(stack.length){
        let [x,y,arr,times] = stack.shift();
        expand(x,y,arr,times);
    }
    function zipBoard(board){//压缩状态
        let str = "";
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                str+=board[i][j];
            }
        }
        return str;
    }
    function findZero(board){//寻找0的位置
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(board[i][j] === 0) return [i,j];
            }
        }
    }
    function swap(board,[x,y],[x1,y1]){
        let arr = [];
        for(let i=0;i<m;i++){
            arr[i] = [];
            for(let j=0;j<n;j++){
                arr[i][j] = board[i][j];
            }
        }
        arr[x][y]^= arr[x1][y1];
        arr[x1][y1]^= arr[x][y];
        arr[x][y]^= arr[x1][y1];
        return arr;
    }
    function expand(x,y,board,times){
        if(x<0 || x>=m || y<0 || y>=n || map[`${x}_${y}`]) return;
        let nextboard = swap(board,[x,y],findZero(board));
        let zip = zipBoard(nextboard);
        if(zip === "123450"){
            //console.log("find",times);
            if(mintime === -1) mintime = times;
            else mintime = Math.min(mintime,times);
        }
        if(map[zip]) return;
        map[zip] = true;
        stack.push([x+1,y,nextboard,times+1]);
        stack.push([x,y+1,nextboard,times+1]);
        stack.push([x-1,y,nextboard,times+1]);
        stack.push([x,y-1,nextboard,times+1]);
    }
    return mintime;
};
console.log(slidingPuzzle([[4,1,2],[5,0,3]]));