/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    let nextArr = new Array(needle.length).fill(0);
    {//构造next跳转表
        let left = 0,right =1;
        while(right<needle.length){
            if(needle[left] === needle[right]){
                left++;right++;
                nextArr[right] = left;
            }else{
                console.log(left,nextArr);
                if(left > 0){
                    left = nextArr[left];
                }else{
                    right++;
                }
            }
        }
        console.log(nextArr);
    }
    {
        let i = 0,j = 0;
        while(i<haystack.length){
            if(needle[j] === haystack[i]){
                ++i;++j;
            }else{
                if(j>0){
                    j = nextArr[j];
                }else{
                    ++i;
                }
            }
            if(j === needle.length){
                return i-j;
            }
        }
    }
    return -1;
};
console.log(strStr('hello','abab'));