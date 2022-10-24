//面试题 01.02. 判定是否互为字符重排
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
*/
var CheckPermutation = function(s1, s2) {
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    for(let i in s1){
        arr1[s1.charCodeAt(i)-97]++;
    }
    for(let i in s2){
        let index = s2.charCodeAt(i)-97;
        arr2[index]++;
        if(arr2[index]>arr1[index]) return false;
    }
    for(let i=0;i<26;i++){
        if(arr1[i]!==arr2[i]) return false;
    }
    return true;
};