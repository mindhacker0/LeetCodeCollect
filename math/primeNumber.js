//质数的判定
//试除法
//对于一个足够大的自然数n,小于n的质数的个数大概是n/lnn
function isPrime(n){
    if(n<2) return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}
//质数的筛选
//eratosthenes筛法

//线性筛法
