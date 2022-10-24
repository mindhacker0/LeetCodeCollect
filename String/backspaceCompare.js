//844. 比较含退格的字符串
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {//栈
    function delStr(str){
        let arr = [];
        for(let i=0;i<str.length;i++){
            if(str[i]==="#"&&arr.length) arr.pop();
            else if(str[i]!=="#") arr.push(str[i]);
        }
        return arr.join("");
    }
    return delStr(s)===delStr(t);
};
var backspaceCompare = function(s, t) {
    let i = s.length-1,j=t.length-1;
    while(i>=0||j>=0){
        let back = 0;
        while(i>=0){
            if(s[i]==="#"){
                back++;i--;
            }else if(back>0){
                back--;i--;
            }else break;
        }
        back=0;
        while(j>=0){
            if(t[j]==="#"){
                back++;j--;
            }else if(back>0){
                back--;j--;
            }else break;
        }
        if(i>=0&&j>=0){
            if(s[i]!==t[j])
            return false;
        }else{
            if(i>=0||j>=0) return false;
        }
        i--;j--;
    }
    return true;
}