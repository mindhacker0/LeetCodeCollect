//348. 设计井字棋
// 玩家 1 的棋子符号是 "X"，玩家 2 的棋子符号是 "O"
/**
 * @param {number} n
 */
// var TicTacToe = function(n) {
//     this.board = new Array(n).fill(0).map(()=>new Array(n).fill(0));
//     this.level = n;
// };

// /** 
//  * @param {number} row 
//  * @param {number} col 
//  * @param {number} player
//  * @return {number}
//  */
// TicTacToe.prototype.move = function(row, col, player) {//暴力
//     this.board[row][col] = ["X","O"][player-1];
//     console.log(this.board);
//     let colCheck = [...this.board[0]],trg = this.board[0][0],rtrg = this.board[0][this.level-1];
//     for(let i=0;i<this.level;++i){
//         let rowCheck = this.board[i][0];
//         for(let j=0;j<this.level;++j){
//             if(j>0 && this.board[i][j]!==this.board[i][j-1]) rowCheck = 0;
//             if(i>0 && this.board[i-1][j]!==this.board[i][j]) colCheck[j] = 0;
//             if(i>0 && i===j && this.board[i][j]!==this.board[i-1][j-1]) trg = 0;
//             if(i>0 && i===this.level-j-1 && this.board[i][j]!==this.board[i-1][j+1]) rtrg = 0;
//         }
//         if(rowCheck!==0) return ["X","O"].indexOf(rowCheck)+1;
//     }
//     for(let i=0;i<this.level;++i) if(colCheck[i]!==0) return ["X","O"].indexOf(colCheck[i])+1;
//     return ["X","O"].indexOf(trg)+1|| ["X","O"].indexOf(rtrg)+1;
// };
//向量
var TicTacToe = function(n) {
    this.board = new Array(n).fill(0).map(()=>new Array(n).fill(0));
    this.level = n;
    this.player = [];
    for(let i=0;i<2;++i){
        this.player.push([
            new Array(n).fill(0),//col
            new Array(n).fill(0),//row
            new Array(n).fill(0),//正对角
            new Array(n).fill(0)//斜对角
        ])
    }
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {//向量
    this.board[row][col] = ["X","O"][player-1];
    console.log(this.board);
    const [rows,cols,crag,acrag] = this.player[player-1];
    rows[row]++;
    if(rows[row] === this.level) return player;
    cols[col]++;
    if(cols[col] === this.level) return player;
    if(col === row) crag[col]++;
    if(col === this.level-row-1) acrag[col]++;
    console.log(acrag)
    let hascrag = true,hasacrag = true;
    for(let i=0;i<this.level;++i){
        if(crag[i]===0) hascrag = false;
        if(acrag[i]===0) hasacrag = false;
    }
    return (hascrag||hasacrag)?player:0;
};
/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
*/
let ttt;
// let func = ["TicTacToe","move","move","move","move","move","move","move"];
// let data = [[3],[0,0,1],[0,2,2],[2,2,1],[1,1,2],[2,0,1],[1,0,2],[2,1,1]];
let func = ["TicTacToe","move","move","move"];
let data = [[2],[0,1,1],[1,1,2],[1,0,1]];
let result = [];
for(var i=0;i<func.length;i++){
    if(func[i] === "TicTacToe"){
        ttt = new TicTacToe(...data[i]);
    }else{
        let res = ttt[func[i]](...data[i]);
        result.push(res);
    }
}
console.log(result);