//927. 三等分
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sameVector(arr,s1,e1,s2,e2){
    while(arr[s1]===0&&s1<=e1) s1++;
    while(arr[s2]===0&&s2<=e2) s2++;
    if((e2-s2)!==(e1-s1)) return (e2-s2)<(e1-s1)?1:2;
    for(let p=0;p<=e1-s1;p++){
        if(arr[s1+p]!==arr[s2+p]) return arr[s1+p]===1?1:2;
    }
    return true;
}
var threeEqualParts = function(arr) {//双指针 
    let len = arr.length;
    let left = 0,right = len-1;
    while(left<right){
        let res = sameVector(arr,0,left,right,len-1);
        console.log(res);
        if(res===true){
            if(sameVector(arr,0,left,left+1,right-1)===true) return [left,right];
            right--;
        }else if(res===1){
            right--;
        }else{
            left++;
        }
    }
    return [-1,-1];
};
// console.log(threeEqualParts([1,0,1,0,1]));
console.log(threeEqualParts([0,0,0,0,0]));