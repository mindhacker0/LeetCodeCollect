//剑指 Offer 16. 数值的整数次方
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
*/
var myPow = function(x, n) {
    let result=1;
    if(n<0){
        let muti = 1/x;
        n = -n;
        for(;n>0;n=Math.abs(n>>1)){
            if(n&1)  result=(result*muti)%10e-4;
            muti = (muti/muti)%10e-4;console.log(muti,result);
        }
    }else{
        for(;n>0;n=n>>1){
            if(n&1)  result=(result*x)%10e4;
            x = (x*x)%10e4;
        }
    }
    return result.toFixed(5);
};
console.log(myPow(2.000,-2))