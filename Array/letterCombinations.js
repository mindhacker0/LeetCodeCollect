//17. 电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
*/
var letterCombinations = function(digits) {
    let wordMap = new Map([
        ['2','abc'],
        ['3','def'],
        ['4','ghi'],
        ['5','jkl'],
        ['6','mno'],
        ['7','pqrs'],
        ['8','tuv'],
        ['9','wxyz'],
    ]);
    let result = [];
    function dfs(str,index,ans){//index表示当前到底几层
        if(index>(digits.length-1)){
            //console.log(ans);
            ans.length && result.push(ans.join(""));
            return;
        }
        let words = wordMap.get(str[index]);
        //console.log(index,words);
        for(let i in words){
            ans.push(words[i]);
            dfs(str,index+1,ans);
            ans.pop();
        }
    }
    dfs(digits,0,[]);
    return result;
};
console.log(letterCombinations('23'));
console.log(letterCombinations(''));