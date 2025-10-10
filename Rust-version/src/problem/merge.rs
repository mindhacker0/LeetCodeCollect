use super::Solution;

impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut sm = m as usize;
        let mut sn = n as usize;
        while sm>=0 || sn>=0 {
            if sm>0 && nums1[sm-1] >= nums2[sn-1] {
                nums1[sm+sn-1] = nums1[sm-1];
                sm-=1;
            } else {
                nums1[sm+sn-1] = nums2[sn-1];
                sn-=1;
            }
        }
    }
}