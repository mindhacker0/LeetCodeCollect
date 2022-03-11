//49. 字母异位词分组
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = {};
    let ans = [];
    for(var i = 0;i<strs.length;i++){
        let key = makekey(strs[i]);
        if(!hashMap[key]){
            hashMap[key] = [];
        }
        hashMap[key].push(strs[i]);
    }
   
    for(let i in hashMap){
        ans.push(hashMap[i]);
    }
    console.log(ans);
    function makekey(str){//处理字符串转为识别的键
        let map = {};
        let arr = [];
        for(let i of str){
            if(!map[i]){
                map[i] = 0;
            }
            map[i]++;
        }
        for(let i in map){
            arr.push({
                key:i,
                times:map[i]
            });
        }
        arr = arr.sort((a,b)=>a.key.charCodeAt(0) -b.key.charCodeAt(0));
        let result = "";
        for(let i=0;i<arr.length;i++){
            result+=`${arr[i].key}${arr[i].times}`;
        }
        return result;
    }
    return ans;
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);