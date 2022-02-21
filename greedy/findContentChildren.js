/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
*/
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let j = 0;
    let ans = 0;
    for(let i=0;i<g.length;i++){
        while(s[j]<g[i] && j<(s.length-1)) j++;
        if(j<=(s.length-1) && s[j]>=g[i]){
            ans++;
            j++;
        }
    }
    return ans;
};
console.log(findContentChildren([1,2,3],[3]));
console.log(findContentChildren([1,2,3],[1,1]));
console.log(findContentChildren([1,2],[1,2,3]));
console.log(findContentChildren([10,9,8,7],[5,6,7,8]));