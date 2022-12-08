//764. 最大加号标志
/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
*/
var orderOfLargestPlusSign = function(n, mines){//暴力搜索
    let board = new Array(n*n).fill(1);
    mines.forEach(([x,y])=>board[x*n+y]=0);
    let max = 0;
    board.forEach((val,index)=>{
        if(val===1){//1可以扩展
            max = Math.max(max,expand(index));
        }
    });
    function expand(index){//扩展加号
        let inital,count,minCount = Infinity;
        let left = (index-(index%n)),right = Math.ceil(index/n)*n;
        count=1;inital = index;
        while(inital>=n&&board[inital-n]){inital-=n;count++}
        minCount = Math.min(minCount,count);
        count=1;inital = index;
        while(inital+1<right&&board[inital+1]){inital++;count++;}
        minCount = Math.min(minCount,count);
        count=1;inital = index;
        while(inital+n<(n*n)&&board[inital+n]){inital+=n;count++;}
        minCount = Math.min(minCount,count);
        count=1;inital = index;
        while(inital-1>=left&&board[inital-1]){inital--;count++;}
        minCount = Math.min(minCount,count);
        return minCount;
    }
    return max;
};
var orderOfLargestPlusSign = function(n, mines){//前缀和原理
    
}
console.log(orderOfLargestPlusSign(5,[[4, 2]]));