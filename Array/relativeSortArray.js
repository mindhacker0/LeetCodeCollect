/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {//计数排序
    let countArr = new Array(1001).fill(0);
    for(let i=0;i<arr1.length;i++){
        countArr[arr1[i]]++;
    }
    let result = [];
    for(let i=0;i<arr2.length;i++){
        while(countArr[arr2[i]]>0){
            result.push(arr2[i]);
            countArr[arr2[i]]--;
        }
    }
    for(let i=0;i<1001;i++){
        while(countArr[i]>0){
            result.push(i);
            countArr[i]--;
        }
    }
    return result;
};
var relativeSortArray = function(arr1, arr2) {//普通排序
    let orderMap = new Map();
    for(let i=0;i<arr2.length;i++){
       orderMap.set(arr2[i],i);
    }
    arr1.sort((a,b)=>{
        let orderA = typeof orderMap.get(a) === "undefined"?arr2.length:orderMap.get(a);
        let orderB = typeof orderMap.get(b) === "undefined"?arr2.length:orderMap.get(b);
        console.log(orderA,orderB);
        return (orderA - orderB) || (orderA === orderB && a - b);
    });
    return arr1;
};
let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
console.log(relativeSortArray(arr1,arr2));