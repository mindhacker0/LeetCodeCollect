//2591. 将钱分给最多的儿童
/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
   if(money<children) return -1;
   let sup = money - children;//至少一块钱
   let pos = Math.floor(sup/7);//还可以分到7块的人数
   pos = Math.min(children,pos);
   if((sup%7 === 3 && children-pos==1)||(pos === children && money>pos*8)) pos--;
   return pos;
};
// console.log(distMoney(20,3))
// console.log(distMoney(5,2))
// console.log(distMoney(13,3))
//console.log(distMoney(17,2));
console.log(distMoney(23,2));