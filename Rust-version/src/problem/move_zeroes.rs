use super::Solution;

impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut cur_index = 0;
        for i in 0..nums.len() {
            if nums[i]!=0 {
                nums[cur_index]=nums[i];
                cur_index+=1;
            }
        }
        while cur_index < nums.len() {
            nums[cur_index] = 0;
            cur_index+=1;
        }
        print!("{:?}",nums);
    }
}