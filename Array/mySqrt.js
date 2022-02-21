//69. Sqrt(x)
/**
 * @param {number} x
 * @return {number}
*/
var mySqrt = function(x) {
    let left = 0,right = x;
    while(left<=right){
        let middle = (left+right)>>1;
        let muti = middle*middle;
        if(muti===x){
            left = middle;
            right = middle;
            break;
        }else if(muti<x){
            left = middle+1;
        }else{
            right = middle-1;
        }
    }
    
    return right;
};
console.log(mySqrt(1));