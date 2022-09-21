//剑指 Offer II 086. 分割回文子字符串
/**
 * @param {string} s
 * @return {string[][]}
*/
var partition = function(s) {//回溯暴力(30.48%)
    let len = s.length;
    let ans = [];
    function isPalindrome(str){
        let left = 0,right = str.length-1;
        while(left<right && str[left]===str[right]){left++;right--;}
        return left>=right;
    }
    function trace(index,str,arr){
        if(index === len){
            if(isPalindrome(str)) ans.push([...arr,str]);
            return
        }
        let prev= str;
        str+=s[index];
        trace(index+1,str,arr)
        str=prev;
        if(str!==""&&isPalindrome(str)){
            arr.push(str);
            trace(index+1,s[index],arr);
            arr.pop();
        }
    }
    trace(0,"",[]);
    return ans;
};
console.log(partition("google"));