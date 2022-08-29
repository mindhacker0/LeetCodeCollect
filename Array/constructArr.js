/**
 * @param {number[]} a
 * @return {number[]}
*/
var constructArr = function(a) {//前后缀乘积
    let len = a.length;
    let prefix = [],suffix = [];
    for(let i=0;i<len;i++){
        if(i===0) prefix[i] = a[i];
        else prefix[i]=prefix[i-1]*a[i];
    }
    for(let i=len-1;i>=0;i--){
        if(i===len-1) suffix[i] = a[i];
        else suffix[i]=suffix[i+1]*a[i];
    }
    console.log(prefix,suffix);
    let arr = [];
    for(let i=0;i<len;i++){
        if(i===0) arr[i] = suffix[i+1];
        else if(i===len-1) arr[i] = prefix[i-1];
        else arr[i] = prefix[i-1]*suffix[i+1];
    }
    return arr;
};
console.log(constructArr([1,2,3,4,5]));