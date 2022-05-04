//355. 设计推特
class User{
    constructor(id){
        this.userId = id;
        this.tweetList = [];
        this.follower = new Map();//用户关注的id
    }
    postTweet(time,id){
        this.tweetList.push([time,id]);
    }
    follow(id){
        this.follower.set(id,true);
    }
    unfollow(id){
        this.follower.delete(id);
    }
}
class MaxHeap{//大根堆
    constructor(){
        this.cache = [null];
    }
    insert(elem){//插入
        this.cache.push(elem);
        let tail = (this.cache.length -1);
        while((tail>>1)>0 && this.cache[tail][0]>this.cache[(tail>>1)][0]){//从下往上调整
            let parent = tail>>1;
            let temp = this.cache[tail];
            this.cache[tail] = this.cache[parent];
            this.cache[parent] = temp;
            tail = parent;
        }
    }
    extract(){//取出根
        if(this.cache.length<2) return null;//取完了
        let start = 1,end = this.cache.length - 1;
        if(end > start){//交换后弹出
            let temp = this.cache[start];
            this.cache[start] = this.cache[end];
            this.cache[end] = temp;
        }
        let taken = this.cache.pop();
        while((start<<1)<this.cache.length){
            let left = start*2,right = start*2+1;
            let next;
            if(right < this.cache.length){
                next = this.cache[left][0]>this.cache[right][0]?left:right;
            }else{
                next = left;
            }
            if(this.cache[start][0]<this.cache[next][0]){
                let temp = this.cache[start];
                this.cache[start] = this.cache[next];
                this.cache[next] = temp;
                start = next;
            }else{
                break;
            }
        }
        return taken;
    }
}

var Twitter = function() {
    this.userMap = new Map;
    this.timeLine = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let user = this.userMap.get(userId);
    if(typeof user === "undefined"){
        user = new User(userId);
        this.userMap.set(userId,user);
    }
    user.postTweet(this.timeLine,tweetId);
    this.timeLine++;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {//获取用户和他关注的人近10条
    let user = this.userMap.get(userId);
    if(typeof user === "undefined"){
        user = new User(userId);
        this.userMap.set(userId,user);
    }
    let heap = new MaxHeap();
    for(let i=0;i<user.tweetList.length;i++){
        heap.insert(user.tweetList[i]);
    }
    const vm = this;
    user.follower.forEach((val,key)=>{
        //console.log("follower",userId,key);
        let followUser = vm.userMap.get(key);
        if(typeof followUser !== "undefined"){
            for(let i=0;i<followUser.tweetList.length;i++){
                heap.insert(followUser.tweetList[i]);
            }
        }
    });
    let news = [];
    for(let i=0;i<10 && heap.cache.length>1;i++){
        news.push(heap.extract()[1]);
    }
    return news;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    let user = this.userMap.get(followerId);
    if(typeof user === "undefined"){
        user = new User(followerId);
        this.userMap.set(followerId,user);
    }
    user.follow(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    let user = this.userMap.get(followerId);
    if(typeof user === "undefined"){
        console.log("用户未注册");
    }
    user.unfollow(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
*/
var twitter = new Twitter();
twitter.postTweet(1, 5); // 用户 1 发送了一条新推文 (用户 id = 1, 推文 id = 5)
twitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含一个 id 为 5 的推文
twitter.follow(1, 2);    // 用户 1 关注了用户 2
twitter.postTweet(2, 6); // 用户 2 发送了一个新推文 (推文 id = 6)
twitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含两个推文，id 分别为 -> [6, 5] 。推文 id 6 应当在推文 id 5 之前，因为它是在 5 之后发送的
twitter.unfollow(1, 2);  // 用户 1 取消关注了用户 2
twitter.getNewsFeed(1);  // 用户 1 获取推文应当返回一个列表，其中包含一个 id 为 5 的推文。因为用户 1 已经不再关注用户 2
 
