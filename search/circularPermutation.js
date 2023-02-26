//1238. 循环码排列
/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {//5%
    let visit = new Set,ans = [],count=0;
    visit.add(start);
    function search(num,arr){
        if(ans.length) return;
        if(arr.length === 1<<n){
            let ex =arr[arr.length-1]^start;
            ex-=(ex&-ex);
            if(ex === 0) ans = [...arr];
            ++count;
            return;
        }
        for(let i=0;i<n;++i){
            if(visit.has(num^(1<<i))) continue;
            num^=(1<<i);
            visit.add(num);
            arr.push(num);
            search(num,arr);
            arr.pop();
            visit.delete(num);
            num^=(1<<i);
        }
    }
    search(start,[start]);
    return ans;
};
//console.log(circularPermutation(2,3));
console.log(circularPermutation(5,14));