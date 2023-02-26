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
function primeList(){
    let max = 1000;
    let primeList = new Array(max).fill(1);//假设所有的都是素数
    primeList[0]= primeList[1] = 0;
    for(let i=2;i<=max;++i){
        if(primeList[i] === 0) continue;
        for(let j=i*i;j<=max;j+=i){
            primeList[j] = 0;
        }
    }
    console.log(primeList)
}
//线性筛法 欧拉筛法
