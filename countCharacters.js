/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    var map={},cpoyMap={};
    for(var i of chars){
      map[i]?map[i]++:map[i]=1;
    }
    var counter = 0;
    for(let j=0;j<words.length;j++){
        let isIn = true;
        cpoyMap=JSON.parse(JSON.stringify(map));
        for(let k of words[j]){
          if(cpoyMap[k]>0){
            cpoyMap[k]--;
          }else{
            isIn = false;
            break;
          }
        }
        isIn && (counter+=words[j].length);
    }
    return counter;
};
console.log(countCharacters(["cat","bt","hat","tree"],"atach"));