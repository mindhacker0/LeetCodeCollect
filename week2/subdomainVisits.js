/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    let map={},result = [];
    for(let i =0;i<cpdomains.length;i++){
        let item = cpdomains[i];
        let [times,str] =  item.split(" ");//分解次数和地址
        let domain = str.split(".");
        let key="";
        while(domain.length){
            key = domain.pop() + (key===""?"":".") + key;
            if(map[key]){
                map[key]+=Number(times);
            }else{
                map[key]=Number(times);
            }
        }
    }
    for(let i in map){//对象转为数组
       result.push(`${map[i]} ${i}`);
    }
    return result;
};
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));