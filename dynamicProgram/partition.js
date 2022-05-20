//131. 分割回文串
/**
 * @param {string} s
 * @return {string[][]}
*/
var isPalindrome = function(s) {
    let token = s.split("");
    if(token.length === 0) return true;
    let i = 0,j = token.length-1;
    while(j>i){
        if(token[i] === token[j]){
            i++;j--;
        }else{
            return false;
        }
    }
    return true;
};
var partition = function(s) {//动态规划
    let len = s.length;
    let dp = [];//dp[i][j]表示i开始j结束的回文子串长度
    for(let i=0;i<len;i++){
        dp[i] = [];
        for(let j=0;j<len;j++){
            if(i>j) dp[i][j] = 0;
            else if(i===j) dp[i][j] = 1;
            else{

            }
        }
    }
    let ans = [];
    return ans;
};
// else{//转移
//     console.log(i,j);
//     if(s[i]===s[j]){
//         if(isPalindrome(s.slice(i,j))){
//             dp[i][j] = 
//         }else{

//         }
//     }
//     else  dp[i][j] = 0;
// }
// var partition = function(s) {//暴力(12.47%)
//     let len = s.length;
   
//     let ans = [];
//     function subStr(index,str,arr){
//         if(index>=len){
//             //console.log(arr,str);
//             ans.push(arr.slice());
//             return;
//         }
//         //是否添加隔板
//         if(index+1<len) subStr(index+1,str+s[index+1],arr);//不添加隔板
//         if(!isPalindrome(str)) return;//回文子串不能加隔板
//         arr.push(str);
//         subStr(index+1,s[index+1],arr);
//         arr.pop();
//     }
//     subStr(0,s[0],[]);
//     return ans;
// }
console.log(partition("aab"));
// console.log(isPalindrome("efe"));
console.log(partition("efe"));