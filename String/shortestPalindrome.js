//214. 最短回文串
/**
 * @param {string} s
 * @return {string}
*/
//求最大扩展半径
function expand(str,left,right){
    while(left>=0 && right<str.length && str[left]===str[right]){left--;right++;}
    return (right-left-2)/2;
}
var shortestPalindrome = function(s) {//manacher
    let ans = s;
    let len = s.length;
    //分隔处理
    let arr = [],index = 0;
    arr[index++] = "#";
    for(let i=0;i<len;i++){
        arr[index++] = s[i];
        arr[index++] = "#";
    }
    console.log(arr);
    //求P数组
    let p = [],center = 0,maxR = 0;
    let potential=0;
    for(let i=0;i<arr.length;i++){
        let mirror_i = 2*center - i;
        if(i<maxR){//在已计算的范围可以通过回文对称得到答案
            p[i] = Math.min(maxR-i,p[mirror_i]);
        }else{
            p[i] = 1;
        }
        let r = expand(arr,i-p[i],i+p[i]);
        if(r>p[i]) p[i] = r;
        if(i+p[i]>maxR){
            maxR = i+p[i];
            center = i;
        }
        if(p[i]-i>=0&&i!==0) potential=i;//0不可能，最差可以由第一个字母作为中心轴
    }
    if(potential%2){//是奇数轴
        let mid = (potential-1)/2;
        let right = (mid+1)*2-1;
        while(right<len){ans=s[right++]+ans;}
    }else{//是偶数轴
        let mid = potential/2;
        let right = mid*2;
        while(right<len){ans=s[right++]+ans;}
    }
    console.log(p,potential);
    return ans;
};
// console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("daacddfsa"));