//37. 解数独
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {// 回溯
    let blockSet = new Array(9).fill(0);//块级的填写情况
    let rowSet = new Array(9).fill(0);// 各行的填写情况
    let colSet = new Array(9).fill(0);// 各列的填写情况
    let empty = new Array();
    for(let i=0;i<board.length;++i){
        for(let j=0;j<board[0].length;++j){
            if(board[i][j] === '.') empty.push(i*9+j);
            let dx = Math.floor(i/3),dy = Math.floor(j/3);
            blockSet[dx*3+dy]|= 1<<+board[i][j];
            rowSet[i]|=1<<+board[i][j];
            colSet[j]|=1<<+board[i][j];
        }
    }
    // console.log(empty,empty.length);
    function traceBack(index,arr){
        if(index === empty.length){
            empty.forEach((val,index)=>{board[Math.floor(val/9)][val%9]=arr[index]+'';});
            return;
        }
        let now = empty[index];
        let x = Math.floor(now/9),y = now%9;
        let dx = Math.floor(x/3),dy = Math.floor(y/3);
        for(let i=1;i<=9;++i){
            if((rowSet[x]&(1<<i))||(colSet[y]&(1<<i))||(blockSet[dx*3+dy]&(1<<i))) continue;
            rowSet[x]|=1<<i;
            colSet[y]|=1<<i;
            blockSet[dx*3+dy]|=1<<i;
            arr.push(i);
            traceBack(index+1,arr);
            arr.pop();
            blockSet[dx*3+dy]&=~(1<<i);
            colSet[y]&=~(1<<i);
            rowSet[x]&=~(1<<i);
        }
    }
    traceBack(0,[]);
};
console.log(solveSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]));