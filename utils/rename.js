const fs = require("fs");
let parent = __dirname.split("\\");
parent.pop();
parent = parent.join("\\");
let count = 0;
function tranverseFile(ftext){
    fs.stat(ftext, function (err, stats) {//获取路径是否为文件夹还是文件
        if(stats.isDirectory()){//是文件夹，继续遍历
            fs.readdir(ftext,function(err, files){
                if (err) {
                    return console.error(err);
                }
                files.forEach(function(file){
                    tranverseFile(ftext+"\\"+file);
                });
            });
        }else{
            if(stats.isFile()){
                //console.log("文件",ftext)
                if(/.*js$/.test(ftext)) count++;
                console.log("js文件统计",count);
            }
        }
    })
    //fs.readFile(file, 'utf8', function (err, data) {
    // if (err) throw err;
    // let content = data.replace(/yunyan/g, 'fengkong');
    //     fs.writeFile(file, content, 'utf8', (err) => {
    //         if (err) throw err;
    //     });
    // });
}
tranverseFile(parent);
