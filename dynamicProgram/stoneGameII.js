//1140. 石子游戏 II
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    let len = piles.length,ans = 0;
    function search(index,m,total,role){
        if(index>=len) return;
        role && console.log(index,total);
        for(let x=1;x<=2*m;++x){
            if(role){
                total+=piles[index+x-1];
            }
            search(index+x,Math.max(x,m),total,role^1);
        }
    }
    search(0,1,0,true);
};
console.log(stoneGameII([2,7,9,4,4]));
// console.log(stoneGameII([1,2,3,4,5,100]));