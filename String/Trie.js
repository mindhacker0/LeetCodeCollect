function Trie(){//字典树
    this.Head = Object.create(null);
    let endSign = Symbol.for("$end");
    this.endSymbol = endSign;
    this.addStr = function(str){//添加字符到字典树
        let node = this.Head;
        for(let i in str){
            if(str.hasOwnProperty(i)){
                if(!node[str[i]]){
                    node[str[i]] = {};
                }
                node=node[str[i]];
            }
        }
        node[endSign]?node[endSign]++:(node[endSign]=1);
    }
    this.match = function(str){//匹配字符串中的字符
        let node = this.Head;
        let frag = '';//已匹配片段
        let result = [];
        let i=0;
        let start = 0;
        while(i<str.length){
            if(node[str[i]]){
                if(frag===''){
                    start = i;
                }
                frag+=str[i];
                node = node[str[i]];
            }else{
                if(frag!==''){
                    if(node[endSign]){//已找到匹配目标
                        result.push({
                            start,
                            end:i,
                            content:frag,
                            mask:str.slice(start,i)
                        });
                    }else{
                        //匹配失败
                    }
                    i=start;
                    node = this.Head;
                    frag='';
                }
            }
            i++;
        }
        if(frag!==''){
            if(node[endSign]){
                result.push({
                    start,
                    end:i,
                    content:frag
                });
            }else{  
                
            }
            node = this.Head;
            frag='';
        }
        return result;
    }
}
let trie = new Trie();
trie.addStr("abc");
trie.addStr("bcd");
trie.addStr("wr");
console.log(hightLightkeyWords(trie,"asdsfabcewrwabcdwr"));
function hightLightkeyWords(trie,str){
    let matchs = trie.match(str);
    let point=0;
    let hlight = [];
    for(let i=0;i<matchs.length;i++){//敏感词高亮
        const {start,end,content} = matchs[i];
        if(point>start&&i>0){//敏感词交叉
            hlight.pop();
            hlight.push(`<span style="color: #ff711a;">${str.slice(matchs[i-1].start,matchs[i-1].start+point-start-1)}</span>`);
            hlight.push(`<span style="color: #ff711a;">${str.slice(matchs[i-1].start+point-start-1,point)}</span>`);//交叉词
            hlight.push(`<span style="color: #ff711a;">${str.slice(point,end)}</span>`);
        }else{
            hlight.push(str.slice(point,start));
            hlight.push(`<span style="color:#ff711a;">${content}</span>`);
        }
        point = end;
    }
    hlight.push(str.slice(point));
    return hlight;
}
module.exports = Trie;

