//1163. 按字典序排在最后的子串
/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {//双指针
    let i =0,j=1,k=1;
    let n =s.length;
    while(j<n){
        k = 0;
        while(j+k<n && s[i+k] === s[j+k]) k++;
        if(j+k<n && s[i+k]<s[j+k]){
            let t = i;
            i =j;
            j = Math.max(j+1,t+k+1);
        }else{
            j=j+k+1;
        }
    }
    return s.substring(i);
};
console.log(lastSubstring("abab"));
console.log(lastSubstring("leetcode"));
console.log(lastSubstring("cacacb"));//cb