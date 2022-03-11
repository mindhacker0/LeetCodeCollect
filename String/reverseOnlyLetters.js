//917. 仅仅反转字母
/**
 * @param {string} s
 * @return {string}
*/
var reverseOnlyLetters = function(s) {
    let left = 0,right=s.length-1;
    let  arr = s.split("");
    while(left<right){
        let codeL = arr[left].charCodeAt(0);
        while((codeL<65 || codeL>122 || (90<codeL && codeL <97)) && left<right){
            left++;
            codeL = arr[left].charCodeAt(0);
        }
        let codeR = arr[right].charCodeAt(0);
        while((codeR<65 || codeR>122 || (90<codeR && codeR <97)) && left<right){
            right--;
            codeR = arr[right].charCodeAt(0);
        }
        let temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        left++;right--;
    }
    return arr.join("");
};
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));