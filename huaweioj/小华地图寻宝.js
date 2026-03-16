// 题目描述
// 小华按照地图去寻宝，地图上被划分成 m 行和 n 列的方格，横纵坐标范围分别是 [0, n-1] 和 [0, m-1]。
// 在横坐标和纵坐标的数位之和不大于 k 的方格中存在黄金（每个方格中仅存在一克黄金），但横坐标和纵坐标数位之和大于 k 的方格存在危险不可进入。小华从入口 (0,0) 进入，任何时候只能向左，右，上，下四个方向移动一格。
// 请问小华最多能获得多少克黄金？
// 输入描述
// 坐标取值范围如下：
// 0 ≤ m ≤ 50
// 0 ≤ n ≤ 50
// k 的取值范围如下：
// 0 ≤ k ≤ 100
// 输入中包含3个字数，分别是m, n, k
// 输出描述
// 输出小华最多能获得多少克黄金
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let m,n,k;
rl.on("line",(line)=>{
   [m,n,k] = line.split(" ").map(v=>+v);
   console.log(m,n,k)
   console.log(recur([0,0],new Array(m*n).fill(0)));
   rl.close();
});
const dir = [[1,0],[0,1],[-1,0],[0,-1]];
function recur(point,visit){
    const [x,y] = point;
    if(x<0||x>=m||y<0||y>=n||visit[x*n+y] === 1||sumdigit(x)+sumdigit(y)>k) return 0;
    visit[x*n+y] = 1;
    let ans = 0;
    for(let i=0;i<4;++i){
        const dx = x + dir[i][0],dy = y + dir[i][1];
        ans += recur([dx,dy],visit);
    }
    return ans+1;
}
function sumdigit(num){
    let sum = 0;
    while(num){
        sum+=num%10;
        num = Math.floor(num/10);
    }
    return sum;
}