/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const len1 = s.length,len2 = p.length;
    function match(index,point,repeat){
        const token = s[index];
        const pattern = p[point];
        repeat = pattern;
        if(pattern === "."){
            index++;
            point++;
            match(index,point,repeat);
            index--;
            point--;
        }else if(pattern === "*"){
            if(token === repeat || repeat === "."){//匹配
                index++;
                match(index,point,repeat);
                index--;
            }else{

            }
        }else if(token === pattern){
            index++;
            point++;
            match(index,point,repeat);
            index--;
            point--;
        }
    }
    match(0,0,"");
};
console.log(isMatch("ab","a*"));
// @lc code=end

