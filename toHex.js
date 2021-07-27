/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num === 0) return "0";
    let tokens=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let result = [];
    if(num>=0){
        while(num!==0){
            result.unshift(tokens[num%16]);
            num=Math.floor(num/16);
        }
    }else{
        num=-num;
        while(num!==0){
            result.unshift(num%2);
            num=Math.floor(num/2);
        }
        console.log(result)
        if(result.length>32) throw "numsize exceeded";
        for(let i=result.length;i<32;i++){
            result.unshift(0);
        }
      
        result[0]=1;
        console.log(result)
        for(let i=1;i<32;i++){//反码
            result[i] =1-result[i];
        }
        console.log(result)
        if(result[31]===1){//反码加1
            let signs = 1;
            for(let i=31;i>=1;i--){
                let plus = result[i]+signs;
                result[i]= plus % 2;
                if(plus === 2) signs = 1;
                else signs = 0;  
            }
        }else{
            result[31]=1;
        }
        
        let temp = [],count=0,multi=1;
        for(let i=31;i>=0;i--){//转为16进制
            if(i%4 === 3 && i!==31){
                temp.unshift(tokens[count]);
                count=0;
                multi=1;
            }
            count+=result[i]*multi;
            multi*=2;   
        }
        temp.unshift(tokens[count]);
        count=0;
        multi=1;
        result =temp;
    }
    return result.join("");
};
console.log(toHex(-2147483648))