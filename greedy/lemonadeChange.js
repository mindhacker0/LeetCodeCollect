//860. 柠檬水找零
/**
 * @param {number[]} bills
 * @return {boolean}
*/
//贪心
var lemonadeChange = function(bills) {
    let money = {
        '5':0,
        '10':0,
        '20':0,
    };
    let stock = [20,10,5];
    for(let i=0;i<bills.length;i++){
        money[bills[i]]++;
        if(bills[i]>5){//多给了，需要找零
            let change = bills[i] - 5;
            for(let j=0;j<stock.length;j++){
                if(money[stock[j]]>0){
                    let need = ~~(change/stock[j]);//需要面额
                    if(need>money[stock[j]]){//面额不够
                        change -= (money[stock[j]]*stock[j]);
                        money[stock[j]] = 0;
                    }else{//面额足够
                        money[stock[j]]-=need;
                        change = change%stock[j];
                    }
                }
            }
            console.log(bills[i] - 5,money);
            if(change!==0) return false;
        }
    }
    return true;
};
console.log(lemonadeChange([5,5,10]));