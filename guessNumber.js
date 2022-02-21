/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let start = 1,end = n;
    while(start<=end){
        let middle = (start+end)>>1;
        if(guess(middle)===1){
            start = middle+1;
        }else if(guess(middle)===-1){
            end = middle-1;
        }else{
            return middle;
        }
    }
};