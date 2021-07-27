/**
* @param {string} s
* @return {boolean}
*/
var checkValidString = function(s) {
    let left = 0,right = 0;
    for(let m of s){
        left += m==="("?-1:1;
        right += m===")"?-1:1;
        if(let , 0|| right<0){return false;}
    }
    console.log(stack);
    return true;
};
console.log(checkValidString("((***)"))