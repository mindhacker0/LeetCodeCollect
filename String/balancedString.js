//1234. 替换子串得到平衡字符串
/**
 * @param {string} s
 * @return {number}
 */
// var balancedString = function(s) {//wang answer
//     let len = s.length;
//     let typeMap = Object.create(null);
//     for(let i=0;i<len;++i) typeMap[s[i]]=(typeMap[s[i]]||0)+1;
//     console.log(typeMap);
//     let ans = 0;
//     for(let k in typeMap){
//         if(typeMap[k]>(len/4)) ans+=typeMap[k] - (len/4);
//     }
//     return ans;
// };
var balancedString = function(s) {//双指针
    let len = s.length;
    let typeMap = Object.create(null);
    for(let i=0;i<len;++i) typeMap[s[i]]=(typeMap[s[i]]||0)+1;
    console.log(typeMap);
    function isValid(){
        for(let k in typeMap){
            if(typeMap[k]>(len/4)) return false;
        }
        return true;
    }
    if(isValid()) return 0;
    let left = -1,right = -1,ans = Infinity;
    while(left<=right && right<len){
        if(isValid()){
            ans = Math.min(ans,right-left);
            ++left;
            typeMap[s[left]]++;
        }else{
            ++right;
            typeMap[s[right]]--;
        }
    }
    return ans;
}
console.log(balancedString("WWEQERQWQWWRWWERQWEQ"));