/**
 * @param {number} target
 * @return {number[][]}
*/
// 等差数列全求和
// var findContinuousSequence = function(target) {
//     let limit = (target/2);
//     let total = [];
//     for(var i =1;i<=limit;i++){
//         // n**2 + n*(2*i-1) - 2*target = 0;
//         let root = (2*i-1)**2 + 4*2*target;
//         if(Math.sqrt(root)%1 === 0){
//             let result = ((1-2*i)+Math.sqrt(root))/2;
//             let arr = [];
//             for(let j = i;j<i+result;j++){
//                arr.push(j);
//             }
//             total.push(arr);
//         }
//     }
//     return total;
// };
// 双指针方法
var findContinuousSequence = function(target) {
    let i = 1,j = 2;
    let limit = (target/2)+1;
    let total = [];
    while(i<=limit && j<=limit){
        let sum = (i+j)*(j-i+1)/2;
        if(sum === target){
            let arr = [];
            for(let s = i;s<=j;s++){
                arr.push(s);
            }
            i++;
            // console.log(arr);
            total.push(arr);
        }else if(sum > target){
            i++;
        }else{
            j++;
        }
    }
    return total;
}
console.log(findContinuousSequence(9));