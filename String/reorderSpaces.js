//1592. 重新排列单词间的空格
/**
 * @param {string} text
 * @return {string}
*/
var reorderSpaces = function(text) {
    let space = 0;
    let words = [],str = "";
    for(let i=0;i<text.length;i++){
        if(text[i]===" "){
            if(str!=="") words.push(str);
            space++;
            str="";
        }else str+=text[i];
    }
    if(str!=="") words.push(str);
    let every =words.length===1?0:~~(space/(words.length -1));
    let end = space-every*(words.length -1);
    let spaceEven = "",suffix = "";
    for(let i=0;i<every;i++){
        spaceEven+=" ";
    }
    for(let i=0;i<end;i++){
        suffix+=" ";
    }
    let ans = words.join(spaceEven);
    ans+=suffix;
    console.log(words,space);
    return ans;
};
// console.log(reorderSpaces("  this   is  a sentence "));
console.log(reorderSpaces("  hello"))