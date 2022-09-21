//5. 最长回文子串
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {//主要考虑回文串的轴心,向两边扩展
    let len = s.length;
    let ans = [];
    for(let i=0;i<len-1;i++){
        let left = i-1,right = i+1;
        let arr = [];
        if(left>=0 && right <=len-1 && s[left] === s[right]){//中心是单个的
            arr = [s[i]];
            while(left>=0 && right <=len-1 && s[left] === s[right]){
                arr.unshift(s[left]);
                arr.push(s[right]);
                left--;
                right++;
            }
            if(arr.length>ans.length) ans = arr;
        }
        left = i;right = i+1;
        if(left>=0 && right <=len-1 && s[left] === s[right]){//中心有两个
            arr = [];
            while(left>=0 && right <=len-1 && s[left] === s[right]){
                arr.unshift(s[left]);
                arr.push(s[right]);
                left--;
                right++;
            }
            if(arr.length>ans.length) ans = arr;
        }
    }
    if(ans.length === 0) ans.push(s[0]);
    return ans.join("");
};
var longestPalindrome = function(s){//manacher
    let len = s.length;
    let index = 0;
    let arr = [];
    // 处理字符串，使用符号隔开
    arr[index++]="#";
    for(let i=0;i<len;i++){
        arr[index++] = s[i];
        arr[index++] = "#";
    }
    console.log(arr);
    len = arr.length;
    function expand(left,right){//左右扩展的函数
        while(left>=0 && right<len && arr[left]===arr[right]){
            left--;
            right++;
        }
        return (right-left-2)/2;
    }
    //计算P数组
    let max = 0,center = 0,p = [];
    let maxP = 0,ans="";
    for(let i=0;i<len;i++){
        let i_mirror = 2*center - i;
        if(i<max){
           p[i] = Math.min(max-i,p[i_mirror]);//防止i+p[mirror]超过了向右拓展的边界，超过的部分无法判断，需要尝试拓展
        }else{//设置默认值
           p[i] = 0;
        }
        let r = expand(i-p[i],i+p[i]);//拓展半径
        if(r>maxP){
            maxP = r;
            ans = arr.slice(i-r,i+r);
        }
        if(r>p[i]) p[i] = r;
        if(i+r>max){//拓展范围大于当前范围，更新
           center = i;
           max = i+r;
        }
    }
    console.log(p,ans);
    return ans.join("").replace(/#/g,"");
}
// console.log(longestPalindrome("a"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("babad"));