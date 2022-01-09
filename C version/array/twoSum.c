#include <stdio.h>
#include <stdlib.h>
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    returnSize = (int *)malloc(sizeof(int)*2);
    int *temp = (int *)malloc(sizeof(int)*numsSize);
}
void main(){
    int *nums = {2,7,11,15};
    int target = 9;
    int *return_t;
    twoSum(nums,4,target,return_t);
}