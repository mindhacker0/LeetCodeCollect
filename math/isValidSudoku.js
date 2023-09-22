//36. 有效的数独
// 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let blocks = new Array(9).fill(0).map(()=>new Set);
    let colums = new Array(9).fill(0).map(()=>new Set);
    for(let i=0;i<board.length;++i){
        let row = 0;
        for(let j=0;j<board[i].length;++j){
            if(board[i][j] === ".") continue;
            let vect = 1<<+board[i][j];
            if(row&vect) return false;
            row|=vect;
            let col = colums[j];
            if(col.has(board[i][j])) return false;
            col.add(board[i][j]);
            let index = Math.floor(i/3)*3+Math.floor(j/3);
            let block = blocks[index];
            if(block.has(board[i][j])) return false;
            block.add(board[i][j]);
        }
    }
    return true;
};
console.log(isValidSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]));
console.log(isValidSudoku([
    ["7",".",".",".","4",".",".",".","."],
    [".",".",".","8","6","5",".",".","."],
    [".","1",".","2",".",".",".",".","."],
    [".",".",".",".",".","9",".",".","."],
    [".",".",".",".","5",".","5",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]
]))