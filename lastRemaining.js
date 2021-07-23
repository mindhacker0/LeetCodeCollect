/**
 * @param {number} n
 * @param {number} m
 * @return {number}
*/
var lastRemaining = function(n, m) {
    if(n===0) return 0;
    let s = 0;
    for(var i = 2;i<=n;i++){
        s=(s+m)%i;
    }
    return s;
};
console.log(lastRemaining(5,3));