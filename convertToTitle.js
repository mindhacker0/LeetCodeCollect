/**
 * @param {number} columnNumber
 * @return {string}
*/
var convertToTitle = function(columnNumber) {
    let arr = [];
    while(columnNumber!=0){
        arr.unshift(columnNumber%26);
        columnNumber = ~~(columnNumber/26);
    }
    console.log(arr);
    let dec = false;
    for(var i = arr.length;i>=0;i--){
        if(dec === true && arr[i]!==0){
            arr[i]--;
            dec = false;
        }
        if(arr[i] === 0 && i!==0){
            arr[i] = 26;
            dec = true;
        }
    }
    let prefix = true;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === 0 && prefix){
            arr.splice(i,1);
            i--;
        }else{
            prefix = false;
        }
    }
    return arr.map(v=>String.fromCharCode(v+64)).join("");
};
console.log(convertToTitle(701));//ZY