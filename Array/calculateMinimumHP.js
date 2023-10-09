//174. 地下城游戏
//寻找从左上角到右下角和始终大于零并且和最大的路径
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {//回溯
    let m = dungeon.length,n = dungeon[0].length;
    let dir = [[0,1],[1,0]];
    let ans = Infinity;
    function traceback(pos,hp,minHp){
        const [x,y] = pos;
        if(x === m-1 && y===n-1){
            // console.log(pos,hp,minHp);
            let need = hp<=0?Math.max(-minHp+1,-hp+1):-minHp+1;//过程所需的最小血量
            ans = Math.min(ans,need);
            return;
        }
        for(let i=0;i<dir.length;++i){
            let dx = x+dir[i][0],dy = y+dir[i][1];
            if(dx>=m||dy>=n) continue;
            traceback([dx,dy],hp+dungeon[dx][dy], Math.min(minHp,hp));
        }
    }
    traceback([0,0],dungeon[0][0],0);
    return ans;
};
var calculateMinimumHP = function(dungeon) {//动态规划
    let m = dungeon.length,n = dungeon[0].length;

}
console.log(calculateMinimumHP([
    [-2,-3,3],
    [-5,-10,1],
    [10,30,-5]
]));//7
console.log(calculateMinimumHP([[100]]));//1
console.log(calculateMinimumHP([[-3,5]]));//4