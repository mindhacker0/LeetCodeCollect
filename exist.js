/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    if(board.length === 0) return false;
    let stack = [[0,0,0,false]];
    let height = board.length;
    let width = board[0].length;
    let map = new Map;
    let hasFind = false;
    function findPath(x,y,findIndex,hasRight){
        if(x<0||x>=height||y<0||y>=width) return;
        if(!map.get(`${x},${y}`) || hasRight){
            if(x===1 && y===0){console.log(board[x][y],findIndex)}
            if(board[x][y] === word[findIndex]){//找到匹配的了
                findIndex++;
                if(findIndex === word.length){
                    hasFind = true;
                    console.log("find");
                }
                hasRight = true;
            }else{
                hasRight = false;
                findIndex = 0;
            }
            stack.push([x+1,y,findIndex,hasRight]);
            stack.push([x,y+1,findIndex,hasRight]);
            stack.push([x-1,y,findIndex,hasRight]);
            stack.push([x,y-1,findIndex,hasRight]);
            map.set(`${x},${y}`,true);
        }
    }
    while(stack.length>0){
        let [x,y,findIndex,hasRight] = stack.shift();
        findPath(x,y,findIndex,hasRight);
    }
    return hasFind;
};
//console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"));
//console.log(exist([['A']],"A"));
//console.log(exist([["a","a"]],"aaa"));
console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]],"AAB"));