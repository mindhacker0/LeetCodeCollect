//788. 旋转数字
/**
 * @param {number} n
 * @return {number}
*/
//n->[1, 10000]
function getWidth(n){
    let count = 0;
    while(n){
        n = ~~(n/10);
        count++;
    }
    return count;
}
var rotatedDigits = function(n) {
    let radnum = [0,1,2,5,6,8,9];
    let width = getWidth(n);
    let set = new Set;
    let ans = 0;
    function search(index,num,valid){
        if(index === width){
            if(num<=n && valid){ console.log(num);ans++;}
            return;
        }
        for(let i=0;i<radnum.length;i++){
            num=num*10+radnum[i];
            search(index+1,num,(~[2,5,6,9].indexOf(radnum[i]))||valid);
            num=~~(num/10);
        }
    }
    search(0,0,false);
    return ans;
};
console.log(rotatedDigits(100));