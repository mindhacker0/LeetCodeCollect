/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {//KMP算法
    if(needle === '') return 0;
    let nextArr = new Array(needle.length).fill(0);
    {//构造next跳转表
        let left = 0,right =1;
        while(right<needle.length){
            if(needle[left] === needle[right]){
                left++;right++;
                nextArr[right] = left;
            }else{
                if(left > 0){
                    left = nextArr[left];
                }else{
                    right++;
                }
            }
        }
        
        // let i=1;
        // nextArr[0] = 0;
        // for(;i<needle.length;i++){
        //     let j = 0,k=i;
        //     while(needle[j] === needle[k]){j++;k++;nextArr[k] = j;}
        // }
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
/*var strStr = function(haystack, needle) {//rabin-karp算法
    if(needle === '') return 0;
    let m = haystack.length;
    let n = needle.length;
    let b = 31,p = 10007;//b相当于进制，p是用来取模的质数
    let childhash = 0,muti = 1;
    for(let i=0;i<n;i++){//计算子串的数值
       childhash = (childhash*b+(needle.charCodeAt(i)-96))%p;
       muti = muti*b%p;//保证b**n幂计算的准确性
    }
    let faHash = 0;
    let h = [];//h需要保存父串第i-n个数值用于计算
    for(let i=0;i<m;i++){
        faHash = (faHash*b+(haystack.charCodeAt(i)-96))%p;
        h[i] = faHash;
        if(i===n-1 && faHash===childhash) return 0; 
        else if(((h[i] - h[i-n]*muti)%p+ p)%p === childhash){
            return i-n+1;
        }
    }
    return -1;
}*/
// console.log(strStr('a','a'));
// console.log(strStr('hello','ll'));
// console.log(strStr('gwewqerwrwq','rw'));
console.log(strStr("ababcaababcaabc","abcbcabd"));