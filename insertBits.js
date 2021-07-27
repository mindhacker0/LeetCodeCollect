/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function(N, M, i, j) {
    function toBin(n){
        let result =[];
        while(n>0){
            result.push(n%2);
            n=~~(n/2);
        }
        return result;
    }
   let arr1 = toBin(N);
   let arr2 = toBin(M);
    if(arr1.length<arr2.length){
       arr1=arr1.concat(new Array(arr2.length-arr1.length).fill(0));
    }
    if(arr1.length<j+1){
        arr1=arr1.concat(new Array(j+1-arr1.length).fill(0));
    }
    console.log(arr1,arr2);
    let k=0;
    for(let m=0;m<arr1.length;m++){
     if(m>=i && m<=j){
        arr1[m] = arr2[k] === undefined?0:arr2[k];
        k++;
     }
    }
   return parseInt(arr1.reverse().join(""),2);
};
console.log(insertBits(126194517,2982082,9,30))