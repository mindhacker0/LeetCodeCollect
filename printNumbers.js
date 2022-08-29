/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    let arr = [];
    for(let i = 1;i < Math.pow(10,n);i++) arr.push(i);
    return arr;
};
var printNumbers = function(n){
    let arr = []
    function trace(index,num){
        if(index == n){
            if(num!==0) arr.push(num);
            return;
        }
        for(let i=0;i<10;i++){
           num=num*10+i;
           trace(index+1,num);
           num=(num-i)/10;
        }
    }
    trace(0,0);
    return arr;
}
console.log(printNumbers(3));