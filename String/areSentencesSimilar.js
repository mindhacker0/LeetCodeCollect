//1813. 句子相似性 III
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
*/
//一定是短的句子中插入
var areSentencesSimilar = function(sentence1, sentence2) {
    let st = "",ln = "";
    if(sentence1.length>sentence2.length){
        ln = sentence1.split(" ");st = sentence2.split(" ");
    }else{
        st = sentence1.split(" ");ln = sentence2.split(" ");
    }
    let ans = 0;
    //插入的地方是前面
    for(let i=0;i<st.length;i++){
        if(st[i]!==ln[i]){
            ans|=1;
            break;
        }
    }
    //插入的地方是后面
    for(let i=st.length-1;i>=0;i--){
        if(st[i]!==ln[i]){
            ans|=(1<<1);
            break;
        }
    }
    //插入中间
    let left = 0,right = ln.length-1,r = st.length-1;
    while(left<right && st[left] === ln[left]) left++;
    while(left<=r && st[r] === ln[right]){right--;r--;}
    if((left+(ln.length-1-right))!==st.length) ans|=(1<<2);
    console.log(left,right)
    return ans!==7;
};
// console.log(areSentencesSimilar("My name is Haley","My Haley"))
console.log(areSentencesSimilar("A B C D B B","A B B"))