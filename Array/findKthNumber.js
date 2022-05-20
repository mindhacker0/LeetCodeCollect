//668. 乘法表中第k小的数
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var findKthNumber = function(m, n, k){//矩阵二分
    let left = 0,right = m*n;
    while(left<right){
        let middle = (left+right)>>1;
        let granum = 0;
        let x = m,y=1;//左下角开始计算
        while(x>=1&& y<=n){
            if(x*y<=middle){y++;granum+=x;}
            else x--;
        }
        //console.log("middle",middle,granum);
        if(granum<k){
            left = middle+1;
        }else{
            right = middle;
        }
    }
    //console.log(left,right);
    return left;
};
console.log(findKthNumber(3,3,5));//3
console.log(findKthNumber(2,3,6));//6
console.log(findKthNumber(9,2,3));//2
console.log(findKthNumber(21,36,623));//375