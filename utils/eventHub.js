//发布订阅
class EventHub{
    constructor(){
        this.eventCollect = new Map;
    }
    on(eventName,handler){
        let queue = this.eventCollect.get(eventName);
        if(!queue){
            this.eventCollect.set(eventName,new Set);
            this.on(eventName,handler);
            return;
        }
        queue.add(handler);
    }
    emit(eventName,...params){
        let queue = this.eventCollect.get(eventName);
        if(!queue) return;
        queue.forEach((event)=>event(...params));
    }
    off(eventName,handler){
        let queue = this.eventCollect.get(eventName);
        if(!queue) return;
        queue.delete(handler);
    }
}
let eventhub = new EventHub();
let evHandle = function(s,l){console.log(s+l);};
eventhub.on("aav",evHandle);
eventhub.emit("aav",8,9);
//eventhub.off("aav",evHandle);
eventhub.emit("aav",1,2);