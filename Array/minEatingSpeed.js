//875. 爱吃香蕉的珂珂
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let maxSpeed = -10e7;
    for(let i=0;i<piles.length;i++){
        maxSpeed = Math.max(maxSpeed,piles[i]);
    }
    let left = 1,rigth = maxSpeed;
    while(left<rigth){
        let middle = (left+rigth)>>1;
        let need = 0;
        for(let k=0;k<piles.length;k++){//该速度需要的时间
            need+=Math.ceil(piles[k]/middle);
        }
        if(need>h){
            left = middle+1;
        }else{
            rigth = middle;
        }
    }
    console.log(left,rigth);
    return left;
};
console.log(minEatingSpeed([3,6,7,11],8));
console.log(minEatingSpeed([30,11,23,4,20],5));
console.log(minEatingSpeed([30,11,23,4,20],6));
console.log(minEatingSpeed([312884470],312884469));