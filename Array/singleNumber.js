/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//     let map = {};
//     for (let i = 0; i < nums.length; i++) {
//         map[nums[i]] = (map[nums[i]] || 0) + 1;
//     }
//     for (let i in map) {
//         if (map[i] !== 3) return i;
//     }
// };
// var singleNumber = function (nums) {//找出除余不为三的数的所有为1二进制位，进行组装
//     let res = 0;
//     for (let i = 0; i < 32; i++) {
//         let count = 0;
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[j] >> i & 1) {
//                 count++;
//             }
//         }
//         if (count % 3 != 0) {
//             console.log(count)
//             res = res | 1 << i;
//         }
//     }
//     return res;
// };
var singleNumber = function(nums) {
	let ones = 0, twos = 0;
	for (let num of nums) {
		ones = ones ^ num & ~twos;
		twos = twos ^ num & ~ones;
        console.log(ones,twos);
	}
	return ones;
};
console.log(singleNumber([9, 77, 7, 9, 7, 9, 7,10,10,10]));