//1768. 交替合并字符串
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
*/
var mergeAlternately = function(word1, word2) {//双指针
    let ans = "";
    let left = 0,right = 0;
    while(left<word1.length || right<word2.length){
        if((left<=right&&left<word1.length)||right>=word2.length){
            ans+=word1[left];
            left++;
        }else{
            ans+=word2[right];
            right++;
        }
    }
    return ans;
};
// console.log(mergeAlternately("ab","pqrs"));
console.log(mergeAlternately("pqrs","ab"));