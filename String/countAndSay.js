//38. 外观数列
/**
 * @param {number} n
 * @return {string}
*/
var countAndSay = function(n) {
    function split(str){
        let arr = [[str[0],1]];
       
        let s = "";
        for(let i =1;i<str.length;i++){
            if(str[i] === str[i-1]){
                arr[arr.length-1][1]++;
            }else{
                s+= `${arr[arr.length-1][1]}${arr[arr.length-1][0]}`;
                arr.push([str[i],1]);
            }
        }
        s+= `${arr[arr.length-1][1]}${arr[arr.length-1][0]}`;
        //console.log(str,arr)
        return s;
    }
    let ans = '1';
    for(let i=1;i<n;i++){
        console.log(ans);
        ans = split(ans);
    }
     return ans;
};
console.log(countAndSay(5))