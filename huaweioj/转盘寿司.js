// 题目描述
// 寿司店周年庆，正在举办优惠活动回馈新老客户。
// 寿司转盘上总共有 n 盘寿司，prices[i] 是第 i 盘寿司的价格，
// 如果客户选择了第 i 盘寿司，寿司店免费赠送客户距离第 i 盘寿司最近的下一盘寿司 j，前提是 prices[j] < prices[i]，如果没有满足条件的 j，则不赠送寿司。
// 每个价格的寿司都可无限供应。
// 输入描述
// 输入的每一个数字代表每盘寿司的价格，每盘寿司的价格之间使用空格分隔，例如:
// 3 15 6 14
// 表示：
// 第 0 盘寿司价格 prices[0] 为 3
// 第 1 盘寿司价格 prices[1] 为 15
// 第 2 盘寿司价格 prices[2] 为 6
// 第 3 盘寿司价格 prices[3] 为 14
// 寿司的盘数 n 范围为：1 ≤ n ≤ 500
// 每盘寿司的价格 price 范围为：1 ≤ price ≤ 1000
// 输出描述
// 输出享受优惠后的一组数据，每个值表示客户选择第 i 盘寿司时实际得到的寿司的总价格。使用空格进行分隔，例如：
// 3 21 9 17
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    let prices = line.split(" ").map(v => +v);
    let n = prices.length;
    let nextSmaller = new Array(n).fill(-1);
    let stack = [];
    
    // 使用单调栈计算下一个更小的元素（环形，从右到左）
    for (let i = 2 * n - 1; i >= 0; i--) {
        let idx = i % n;
        while (stack.length && prices[stack[stack.length - 1]] >= prices[idx]) {
            stack.pop();
        }
        if (i < n) {
            nextSmaller[idx] = stack.length ? stack[stack.length - 1] : -1;
        }
        stack.push(idx);
    }
    
    // 计算结果
    let result = [];
    for (let i = 0; i < n; i++) {
        if (nextSmaller[i] !== -1) {
            result.push(prices[i] + prices[nextSmaller[i]]);
        } else {
            result.push(prices[i]);
        }
    }
    
    // 输出结果
    console.log(result.join(' '));
    rl.close();
});