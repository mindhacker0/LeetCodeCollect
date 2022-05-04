//2024. 考试的最大困扰度
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
*/
var maxConsecutiveAnswers = function(answerKey, k) {
    let preMax = [];
    let len = answerKey.length;
    preMax[0] = answerKey[0]==="T"?1:0;
    for(let i=1;i<len;i++){
        preMax[i] = preMax[i-1] + (answerKey[i]==="T"?1:0);
    }
    let left = 0;right = 1;
    let maxLen = 0;
    while(left<right && left<len&&right<len){
        let mar = preMax[right] - preMax[left];
        console.log(mar+k,right-left);
        if(mar+k >= right-left){
            maxLen = Math.max(maxLen,right-left+1);
            right++;
        }else{
            left++;
            right = left+1;
        }
    }
    console.log(preMax)
    return maxLen;
};
// console.log(maxConsecutiveAnswers("TTFF",2));//4
console.log(maxConsecutiveAnswers( "TTFTTFTT",1));//5
// console.log(maxConsecutiveAnswers( "TTFTTFTT",2));//8
// console.log(maxConsecutiveAnswers( "TTFFTFFT",1));//5