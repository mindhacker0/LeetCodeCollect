use super::Solution;

impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut cur_index = 0;
        for i in 1..nums.len() {
            if nums[i] != nums[cur_index] {
                cur_index += 1;
                nums[cur_index] = nums[i];
            }
        }
        cur_index as i32 + 1
    }
}