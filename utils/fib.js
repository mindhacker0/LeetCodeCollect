/**
* @param {number} n
* @return {number}
*/
// var fib = function(n) {
//    if(n<2) return n;
//    return fib(n-1) + fib(n-2)
// };
//优化，通过哈希保存已计算的结果来对递归剪枝
// var fib = function(n) {
//     let map = new Map;
//     function fibCaller(n){
//         if(n<2) return n;
//         //console.log(n,map.get(n))
//         if(map.get(n)) return map.get(n);
//         let add1 = fibCaller(n-1);
//         map.set(n-1,add1);
//         let add2 = fibCaller(n-2);
//         map.set(n-2,add2);
//         map.set(n,(add1 + add2)%1000000007);
//         return (add1 + add2)%1000000007
//     }
//     let arr = [];
//     for(var i=0;i<100;i++){
//         arr.push(fibCaller(i));
//     }
//     console.log(arr);
//     return fibCaller(n);
// };
//优化，使用动态规划
// var fib =function(n){
//     if(n<2) return n;
//     let a = 0,b = 1;
//     let result = 0;
//     for(var i=2;i<=n;i++){
//         result = (a+b)%1000000007;
//         a = b;
//         b = result;
//     }
//     return result;
// }
//终极优化，直接查表
var fib =function(n){
    let list = [
            0,         1,         1,         2,         3,         5,
            8,        13,        21,        34,        55,        89,
        144,       233,       377,       610,       987,      1597,
        2584,      4181,      6765,     10946,     17711,     28657,
        46368,     75025,    121393,    196418,    317811,    514229,
        832040,   1346269,   2178309,   3524578,   5702887,   9227465,
        14930352,  24157817,  39088169,  63245986, 102334155, 165580141,
        267914296, 433494437, 701408733, 134903163, 836311896, 971215059,
        807526948, 778742000, 586268941, 365010934, 951279875, 316290802,
        267570670, 583861472, 851432142, 435293607, 286725742, 722019349,
        8745084, 730764433, 739509517, 470273943, 209783453, 680057396,
        889840849, 569898238, 459739080,  29637311, 489376391, 519013702,
        8390086, 527403788, 535793874,  63197655, 598991529, 662189184,
        261180706, 923369890, 184550589, 107920472, 292471061, 400391533,
        692862594,  93254120, 786116714, 879370834, 665487541, 544858368,
        210345902, 755204270, 965550172, 720754435, 686304600, 407059028,
        93363621, 500422649, 593786270,  94208912, 687995182
    ];
    return list[n];
}
console.log(fib(100))