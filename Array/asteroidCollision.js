//735. 行星碰撞
/**
 * @param {number[]} asteroids
 * @return {number[]}
*/
var asteroidCollision = function(asteroids) {//双指针(61.19%)
    let left = 0,right = 1;
    let len = asteroids.length;
    while(right<len){//
        console.log(left,right);
        if((asteroids[left]>0 && asteroids[right]<0)){//有碰撞
            let wLeft = Math.abs(asteroids[left]),wRight = Math.abs(asteroids[right])
            if(wRight<wLeft){
                asteroids[right] = null;
                right++;
            }else if(wRight>wLeft){
                asteroids[left] = null;
                while(asteroids[left]===null) left--;
            }else{
                asteroids[right] = null;
                asteroids[left] = null;
                right++;
                while(asteroids[left]===null) left--;
            }
        }else{
            while(left<right || asteroids[left]===null) left++;
            right++;
        }
        if(left<0){
            while(left<0 || asteroids[left]===null) left++;
            if(left === right) right++;
        } 
    }
    return asteroids.filter((val)=>val!==null);
};
var asteroidCollision = function(asteroids) {//栈(61.19%)
   let stack = [];
   let len = asteroids.length;
   for(let i=0;i<len;i++){
        if(stack.length === 0) stack.push(asteroids[i]);
        else{
            let flag = true;
            while(stack.length && stack[stack.length-1]>0 && asteroids[i]<0){
                let wLeft = Math.abs(stack[stack.length-1]),wRight = Math.abs(asteroids[i]);
                if(wLeft<wRight){
                    stack.pop();
                }else if(wLeft===wRight){
                    stack.pop();
                    flag = false;
                    break;
                }else{
                    flag = false;
                    break;
                }
            }
            if(flag) stack.push(asteroids[i]);
        }
   }
   return stack;
}
// console.log(asteroidCollision([5,10,-5]))
// console.log(asteroidCollision([8,-8]))
// console.log(asteroidCollision([10,2,-5]))
console.log(asteroidCollision([-2,-1,1,2]))
console.log(asteroidCollision([1,-2,1,-2]));
console.log(asteroidCollision([2,-1,1,-2]));//[]
