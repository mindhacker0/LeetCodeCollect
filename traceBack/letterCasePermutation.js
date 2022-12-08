//784. 字母大小写全排列
/**
 * @param {string} s
 * @return {string[]}
*/
var letterCasePermutation = function(s) {//回溯
    let arr = [];
    let ans = [];
    function trace(index){
        if(index === s.length){
            ans.push(arr.join(""));
            return;
        }
        let code = s.charCodeAt(index);
        if(65<=code&&code<=90){
            arr.push(String.fromCharCode(code+32));
            trace(index+1);
            arr.pop();
        }else if(97<=code&&code<=122){
            arr.push(String.fromCharCode(code-32));
            trace(index+1);
            arr.pop();
        }
        arr.push(s[index]);
        trace(index+1);
        arr.pop();
    }
    trace(0);
    return ans;
};
var letterCasePermutation = function(s) {//二进制状态压缩
    let len = s.length;
    let n = 0,index = 0;
    let sArr = [];
    for(let i in s){
        let code =  s.charCodeAt(i);
        if((65<=code&&code<=90)||(97<=code&&code<=122)) n++;
        sArr.push(code);
    }
    let ans = [];
    while(index<(1<<n)){
        let bit = 0;
        let str = "";
        for(let i=0;i<len;i++){
            let code = sArr[i];
            if((65<=code&&code<=90) && !(index&(1<<bit))) str+=String.fromCharCode(code+32);
            else if((97<=code&&code<=122) && (index&(1<<bit))) str+=String.fromCharCode(code-32);
            else str+=s[i];
            if((65<=code&&code<=90)||(97<=code&&code<=122)) bit++;
        }
        ans.push(str);
        index++;
    }
    return ans;
}
console.log(letterCasePermutation("a1b2"));