// 题目描述
// 输入 m 和 n 两个数，m 和 n 表示一个 m*n 的棋盘。输入棋盘内的数据。棋盘中存在数字和"."两种字符，如果是数字表示该位置是一匹马，如果是"."表示该位置为空的，棋盘内的数字表示为该马能走的最大步数。
// 例如棋盘内某个位置一个数字为 k，表示该马只能移动 1~k 步的距离。
// 棋盘内的马移动类 似于中国象棋中的马移动，先在水平或者垂直方向上移动一格，然后再将其移动到对角线位置。
// 棋盘内的马可以移动到同一个位置，同一个位置可以有多匹马。
// 请问能否将棋盘上所有的马移动到同一个位置，若可以请输入移动的最小步数。若不可以输出 0。
// 输入描述
// 输入 m 和 n 两个数，m 和 n 表示一个 m*n 的棋盘。输入棋盘内的数据。棋盘中存在数字和"."两种字符，如果是数字表示该位置是一匹马，如果是"."表示该位置为空的，棋盘内的数字表示为该马能走的最大步数。
// 例如棋盘内某个位置一个数字为 k，表示该马只能移动 1~k 步的距离。
// 棋盘内的马移动类似于中国象棋中的马移动，先在水平或者垂直方向上移动一格，然后再将其移动到对角线位置。
// 棋盘内的马可以移动到同一个位置，同一个位置可以有多匹马。
// 请问能否将棋盘上所有的马移动到同一个位置，若可以请输入移动的最小步数。若不可以输出 0。
// 输出描述
// 能否将棋盘上所有的马移动到同一个位置，若可以请输入移动的最小步数。若不可以输出 0。
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.output
});
let linecount = 0;
let m,n;
let board = [];
rl.on("line",(line)=>{
    if(linecount === 0) [m,n] = line.split(" ").map(v=>+v);
    else{
        board[linecount-1] = line.split(" ").map(v=>v === "."?".":+v);
        if(linecount === m) rl.close();
    }
    linecount++;
});
const dir = [[-1,-2],[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1],[-2,-1]];//8个方向
function recur(point,gas,hash){
    const [x,y] = point;
    if(gas<0 || x<0 || x>=m || y<0 || y>=n) return;

    // Only continue recursion if this path reaches the cell with strictly more remaining gas
    // than any previously found path (equivalently, fewer steps taken).
    const idx = x*n + y;
    if(gas <= hash[idx]) return;
    hash[idx] = gas;
    for(let i=0;i<dir.length;++i){
        const dx = x + dir[i][0],dy = y+dir[i][1];
        gas--;
        recur([dx,dy],gas,hash);
        gas++;
    }
}
rl.on("close",()=>{
    let total = 0;
    const visit = new Array(m*n).fill(0);
    const step = new Array(m*n).fill(0);
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(board[i][j]!=="."){
                const tem = new Array(m*n).fill(-1);
                recur([i,j],board[i][j],tem);
                total++;
                tem.forEach((v,idx)=>{ if(v!==-1){ visit[idx]++; step[idx]+=board[i][j] - v;  }  })
            }
        }
    }
    let min = Infinity;
    visit.forEach((t,idx)=>{ if(t === total) min = Math.min(min,step[idx]); });
    console.log(min === Infinity?0:min);
});