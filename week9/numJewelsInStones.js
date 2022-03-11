//771. 宝石与石头
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
*/
var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    for(let i of jewels){
        map.set(i,true);
    }
    let ans = 0;
    for(let i of stones){
        if(map.get(i)) ans++;
    }
    return ans;
};
console.log(numJewelsInStones("aA","aAAbbbb"));