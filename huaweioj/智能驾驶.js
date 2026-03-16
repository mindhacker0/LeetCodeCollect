// 题目描述
// 有一辆汽车需要从 m * n 的地图左上角（起点）开往地图的右下角（终点），去往每一个地区都需要消耗一定的油量，加油站可进行加油。
// 请你计算汽车确保从从起点到达终点时所需的最少初始油量。
// 说明：
// 智能汽车可以上下左右四个方向移动
// 地图上的数字取值是 0 或 -1 或 正整数：
// -1 ：表示加油站，可以加满油，汽车的油箱容量最大为100；
// 0 ：表示这个地区是障碍物，汽车不能通过
// 正整数：表示汽车走过这个地区的耗油量
// 如果汽车无论如何都无法到达终点，则返回 -1
// 输入描述
// 第一行为两个数字，M，N，表示地图的大小为 M * N
// 0 < M,N ≤ 200
// 后面一个 M * N 的矩阵，其中的值是 0 或 -1 或正整数，加油站的总数不超过 200 个
// 输出描述
// 如果汽车无论如何都无法到达终点，则返回 -1
// 如果汽车可以到达终点，则返回最少的初始油量

//递归前不要滥用布尔运算
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let linecount = 0;
let m,n;
let board = [];
rl.on("line",(line)=>{
    if(linecount === 0){
        [m,n] = line.split(",").map(v=>+v);
    }else{
        board[linecount-1] = line.split(",").map(v=>+v);
        if(linecount === m){
            rl.close();
        }
    }
    linecount++;
});
const dir = [[1,0],[0,1],[-1,0],[0,-1]];
let ans = 100;
function recur(point,gas,visit,count){
    const [x,y] = point;
    if(gas < 0) return false;
    if(x === m-1 && y === n-1){//到达终点
        if(count === 0) ans = Math.min(ans,100 - gas);
        return true;
    }
    let res = false;
    for(let i=0;i<4;++i){
        const dx = x + dir[i][0],dy = y + dir[i][1];
        if(dx < 0 || dx >= m || dy < 0 || dy >=n || board[dx][dy] === 0 || visit[dx*n+dy] === 1) continue;
        if(board[dx][dy]!==-1){
            gas-=board[dx][dy];
            visit[dx*n+dy] = 1;
            if(recur([dx,dy],gas,visit,count)) res = true;
            visit[dx*n+dy] = 0;
            gas+=board[dx][dy];
        }else{
            if(count === 0) ans = 100 - gas;
            let k = gas;
            gas = 100;
            visit[dx*n+dy] = 1;
            count++;
            if(recur([dx,dy],gas,visit,count)) res = true;
            count--;
            visit[dx*n+dy] = 0;
            gas = k;
        }
    }
    return res;
}
rl.on("close",()=>{
    //console.log(m,n,board)
    const reach = recur([0,-1],100,new Array(m*n).fill(0),0);
    console.log(reach?ans:-1);
});