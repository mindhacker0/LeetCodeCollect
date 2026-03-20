// 题目描述
// Wonderland是小王居住地一家很受欢迎的游乐园。
// Wonderland目前有4种售票方式，分别为
// 一日票（1天）、
// 三日票（3天）、
// 周票（7天）
// 月票（30天）。
// 每种售票方式的价格由一个数组给出，每种票据在票面时限内可以无限制地进行游玩。例如：
// 小王在第10日买了一张三日票，小王可以在第10日、第11日和第12日进行无限制地游玩。
// 小王计划在接下来一年多次游玩该游乐园。小王计划地游玩日期将由一个数组给出。
// 现在，请您根据给出地售票价格数组和小王计划游玩日期数组，返回游玩计划所需要地最低消费。
// 输入描述
// 输入为2个数组：
// 售票价格数组为costs，costs.length = 4，默认顺序为一日票、三日票、周票和月票。
// 小王计划游玩日期数组为days，1 ≤ days.length ≤ 365，1 ≤ days[i] ≤ 365，默认顺序为升序。
// 输出描述
// 完成游玩计划的最低消费。
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let linecount = 0;
let price;
let date;
rl.on("line",(line)=>{
    if(linecount === 0) price = line.split(" ").map(v=>+v);
    else{
        date = line.split(" ").map(v=>+v);
        
        rl.close();
    }
    linecount++;
});

rl.on("close",()=>{
    // 使用记忆化搜索求解最低消费
    // costs[0]: 1日票, costs[1]: 3日票, costs[2]: 7日票, costs[3]: 30日票
    const memo = {};
    
    function dfs(index) {
        // index表示当前要覆盖第date[index]天
        if(index === date.length) return 0;
        
        if(memo[index] !== undefined) return memo[index];
        
        const currentDay = date[index];
        
        // 选项1：买1日票，只覆盖当前天
        let result = price[0] + dfs(index + 1);
        
        // 选项2：买3日票，覆盖当前天及后续3天内的所有计划天
        let nextIndex = index;
        while(nextIndex < date.length && date[nextIndex] < currentDay + 3) {
            nextIndex++;
        }
        result = Math.min(result, price[1] + dfs(nextIndex));
        
        // 选项3：买7日票，覆盖当前天及后续7天内的所有计划天
        nextIndex = index;
        while(nextIndex < date.length && date[nextIndex] < currentDay + 7) {
            nextIndex++;
        }
        result = Math.min(result, price[2] + dfs(nextIndex));
        
        // 选项4：买30日票，覆盖当前天及后续30天内的所有计划天
        nextIndex = index;
        while(nextIndex < date.length && date[nextIndex] < currentDay + 30) {
            nextIndex++;
        }
        result = Math.min(result, price[3] + dfs(nextIndex));
        
        memo[index] = result;
        return result;
    }
    
    console.log(dfs(0));
});