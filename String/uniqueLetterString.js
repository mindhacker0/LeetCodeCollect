//828. 统计子串中的唯一字符
/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let len  = s.length;
    let count = 0;
    function trace(index,path){
        if(index === len){
            let str = path.join("");
            str=str.trim();
            if(/([A-Z]+)(\s+)([A-Z]+)/.test(str)) return;//去除中间包含空格的
            console.log(str);
            return;
        }
        path.push(s[index]);
        trace(index+1,path);
        path.pop();
        path.push(" ");
        trace(index+1,path);
        path.pop();
    }
    trace(0,[]);
    return count;
};
var uniqueLetterString = function(s){
    let indexMap = new Map;
    let len  = s.length;
    let ans = 0;
    for(let i=0;i<len;i++){
        if(!indexMap.has(s[i])){
            indexMap.set(s[i],[-1]);
        }
        indexMap.get(s[i]).push(i);
    }
    console.log(indexMap);
    indexMap.forEach((arr)=>{
        arr.push(len);
        for(let i=1;i<arr.length-1;i++){
           ans+=(arr[i]-arr[i-1])*(arr[i+1]-arr[i]);
        }
    });
    return ans;
}
// console.log(uniqueLetterString("ABC"));
console.log(uniqueLetterString("ABA"));
// console.log(uniqueLetterString("LEETCODE"));