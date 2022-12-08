//816. 模糊坐标
/**
 * @param {string} s
 * @return {string[]}
*/
var ambiguousCoordinates = function(s) {
    let len = s.length;
    function transnum(num){
        if(Number(num)===0&&num.length>1) return [];
        let set = new Set;
        function trace(index,str,hasdot,preZero){
            if(index===num.length){
                if(hasdot&&num[index-1]==='0') return;
                let number = Number(str);
                if(!isNaN(number)) set.add(number);
                return;
            }
            if(index===1 && num[0]==='0'){}else trace(index+1,str+num[index],hasdot,preZero);
            if((index===1&&preZero)||(index>0&&!hasdot)){
                hasdot = true;
                trace(index+1,str+"."+num[index],hasdot,preZero);
                hasdot = false;
            }
        }
        trace(0,"",false,true);
        return Array.from(set);
    }
    let ans = new Set;
    for(let i=1;i<len-2;i++){
        let arr1 = transnum(s.slice(1,i+1));
        let arr2 = transnum(s.slice(i+1,len-1));
        console.log(arr1,arr2);
        for(let n=0;n<arr1.length;n++){
            for(let m=0;m<arr2.length;m++){
                ans.add(`(${arr1[n]}, ${arr2[m]})`);
            }
        }
    }
    return Array.from(ans);
};
// console.log(ambiguousCoordinates("(00011)"));
// console.log(ambiguousCoordinates("(01234)"));
console.log(ambiguousCoordinates("(100)"));