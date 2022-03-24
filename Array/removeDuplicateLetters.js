//316. 去除重复字母
/**
 * @param {string} s
 * @return {string}
*/
var removeDuplicateLetters = function(s) {
    let map = new Array(26).fill(0);
    let stackMap = {};
    let stack = [];
    for(let i in s){
       map[s.charCodeAt(i) - 97]++;
    }
    for(let i in s){
        if(!stackMap[s[i]]){
            while(stack.length && map[s.charCodeAt(stack[stack.length-1]) - 97]>1 && (s.charCodeAt(i) - 97) < (s.charCodeAt(stack[stack.length-1]) - 97)){
                let i = stack.pop();
                stackMap[s[i]] = false;
                map[s.charCodeAt(i) - 97]--;
            }
            stack.push(i);
            stackMap[s[i]] = true;
        }else{
            map[s.charCodeAt(i) - 97]--;
        }
        console.log(stack.map(i=>s[i]));
    }
    return stack.map(i=>s[i]).join("");
};
console.log(removeDuplicateLetters("bcabc"));//abc
console.log(removeDuplicateLetters("cbacdcbc"));//acdb
console.log(removeDuplicateLetters("bbcaac"));//bac   
console.log(removeDuplicateLetters("abacb"));//abc