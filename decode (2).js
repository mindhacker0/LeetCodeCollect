/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
   function dispose(prev,now){
       return prev^now;
   }
   let result=[first],prev=first;
   for(let i=0;i<encoded.length;i++){
       prev=dispose(prev,encoded[i]);
       result.push(prev);
   }
   return result;
};
console.log(decode([1,2,3],1));