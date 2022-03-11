//rabin-karp字符串匹配算法
function RKmatch(haystack,needle){
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
}
console.log(RKmatch("rwrewaffasfa",'re'));