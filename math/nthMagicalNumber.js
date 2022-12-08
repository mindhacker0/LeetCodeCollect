//878. 第 N 个神奇数字
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
*/
var nthMagicalNumber = function(n, a, b) {//动态规划
    let next = 0;
    let x = 0,y = 0,mod = 10e9+7;
    for(let i=0;i<n;i++){
        let nx = (x+a)%mod;
        let ny = (y+b)%mod;
        if(nx<ny){ 
            x = nx;
            next = nx;
        }else if(nx>ny){ 
            y = ny;
            next = ny;
        }else{
            x = nx;
            y = ny;
            next = nx;
        }
        console.log(next);
    }
    return next;
};
console.log(nthMagicalNumber(10,39999,40000));