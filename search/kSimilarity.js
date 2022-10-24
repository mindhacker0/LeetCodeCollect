//854. 相似度为 K 的字符串
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
*/
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var kSimilarity = function(s1, s2) {
    let len = s1.length;
    let diff = [];
    let minoder = Infinity;
    let set =new Set;
    for(let i=0;i<len;i++){
        if(s1[i]!==s2[i]){
           diff.push(i);
        }
    }
    let dfLen = diff.length;
    function search(index,order,path,arr){
        console.log(index,arr.join(""))
        if(set.has(arr.join(""))) return;
        set.add(arr.join(""));
        if(arr.join("")===s1){minoder=Math.min(minoder,order);return;}
        if(index==dfLen){
            return
        }
        if(arr[diff[index]] === s1[diff[index]]) return search(index+1,order,path,arr);
        for(let i=index;i<dfLen;i++){
            if(index===i) continue;
            if(s1[diff[index]]!==arr[diff[i]]) continue;
            path.push(diff[i]);
            swap(arr,diff[index],diff[i]);order++;
            search(index+1,order,path,arr);
            swap(arr,diff[index],diff[i]);order--;
            path.pop();
        }
    }
    search(0,0,[],s2.split(""));
    return minoder;
};
// console.log(kSimilarity("acab","baca"));
// console.log(kSimilarity("abcdfdsfasfdsatytres","abcdfdsafsfdsatytres"));
console.log(kSimilarity("abac","baca"));
// console.log(kSimilarity("abc","cba"));
// console.log(kSimilarity("abccaacceecdeea","bcaacceeccdeaae"));
console.log(kSimilarity("bccbbcbbcbcbabaaacca","aabbcacaccbabccbbbbc"));