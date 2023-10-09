//289. 生命游戏
// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {//额外空间
    let m = board.length,n = board[0].length;
    let count = [];
    const dir = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];//八个方向
    for(let i=0;i<m;++i){
        count[i]=[];
        for(let j=0;j<n;++j){
            let live  = 0;
            for(let k=0;k<dir.length;++k){
                let dx = i +dir[k][0],dy = j+dir[k][1];
                if(dx<0||dx>=m||dy<0||dy>=n) continue;
                live+=board[dx][dy];
            }
            count[i][j] = live;
        }
    }
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(count[i][j]<2||count[i][j]>3) board[i][j] = 0;
            if(count[i][j] === 3) board[i][j] = 1;
        }
    }
    console.log(board);
};
var gameOfLife = function(board) {//原地 数位倒数第一原状态，倒数第二位更新后的状态
    let m = board.length,n = board[0].length;
    const dir = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];//八个方向
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            let live = 0;
            for(let k=0;k<dir.length;++k){
                let dx = i +dir[k][0],dy = j+dir[k][1];
                if(dx<0||dx>=m||dy<0||dy>=n) continue;
                live+=board[dx][dy]&1;
            }
            if(board[i][j]&1){
                if(live<2||live>3) board[i][j] = 0b01;//活细胞死亡
                else board[i][j] = 0b11;//活细胞仍然存活
            }else{
                if(live===3) board[i][j] = 0b10;//死细胞复活
            }
        }
    }
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            board[i][j]>>=1;
        }
    }
    console.log(board);
};
console.log(gameOfLife([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
]));