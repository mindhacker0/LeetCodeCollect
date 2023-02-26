//1663. 具有给定数值的最小字符串
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {//贪心
    let ans = "";
    while(n>0){
        let avg = k/(n-1);
        if(avg<26){
            ans+="a";
            --k;
        }else{
           let min = k - (n-1)*26;
           if(min<=0) min = 1;
           ans+=String.fromCharCode(min+96);
           k-=min;
           console.log(min)
        }
        n--;
    }
    return ans;
};
console.log(getSmallestString(5,73));
console.log(getSmallestString(3,27));