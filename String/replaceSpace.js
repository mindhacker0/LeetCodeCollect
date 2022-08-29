//替换空格
/**
 * @param {string} s
 * @return {string}
*/
var replaceSpace = function(s) {
    let index = 0,len = s.length;
    let str = [],replace = "%20";
    for(let i=0;i<len;i++){
        if(s[i]!==" "){
            str.push(s[i]);
            index++;
        }else{
           for(let j=0;j<3;j++){
                str.push(replace[j]);
                index++;
           }
        }
    }
    return str.join("");
};
console.log(replaceSpace("We are happy."));