let count = 0
function callInfinity(){
    process.nextTick(()=>{
        console.log(count);
        count++;
        count=count%1024;
        callInfinity();
    })
}
callInfinity();