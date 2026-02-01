const fs = require("fs");
const searchPath = "D:\\projects\\xspiral-www\\public";//搜索的路径
const writePath = searchPath+"\\sample.txt";//写入结果路径
let filecount = 0;
const chineseExp = /(?<=[^\/\/\u4e00-\u9fa5])[\u4e00-\u9fa5]+/g;
const atRuleExp = /(@[a-zA-Z_0-9]+)/g;
const searchMatch = (pathStr,level)=>{
    fs.stat(pathStr, function (err, stats) {
        if(stats.isDirectory()){
            console.log(pathStr,"dir");
            fs.readdir(pathStr,function(err, files){
                if (err) {
                    return console.error(err);
                }
                files.forEach(function(file){
                    searchMatch(pathStr+"\\"+file,level+1);
                });
            });
        }else{
            filecount++;
            if(/.(png|svg|gif|ico)$/.test(pathStr)) return;//图片啥的不匹配
            fs.readFile(pathStr, 'utf8', function (err, data) {
                if (err) throw err;
                const matchs = data.match(atRuleExp);
                if(matchs){
                    console.log(matchs);
                    const result = [];
                    result.push(pathStr+"\n");
                    result.push(`{\n${matchs.map(s=>`"xxxx":"${s}"`).join(",\n")}\n}\n`);
                    fs.appendFile(writePath,result.join("")+"\n",{encoding:"utf8"},(err,data => {//追加写入文件
                        
                    }));
                }
                //console.log(matchs)
            });
        }
    });
}
searchMatch(searchPath,0);
console.log("scan files:"+filecount);