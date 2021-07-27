/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let arr =[],str=s+t;
    for(let i=0;i<str.length;i++){
       arr.push(str.charCodeAt(i));
    }
    let result=1;
    for(let i of arr){
      result^=i;
    }
    return String.fromCharCode(result^1);
};
console.log(findTheDifference("abcd","abcde"))