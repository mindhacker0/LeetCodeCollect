#include<stdio.h>
void moveZeroes(int* nums, int numsSize){
    int i = 0;
    int n = 0;
    for(;i<numsSize;i++){
        if(nums[i]!=0){
            nums[n] = nums[i];
            n++;
        }
    }
    for(;n<numsSize;n++){
        nums[n] = 0;
    }
    for(i=0;i<numsSize;i++){
        printf("%d ",nums[i]);
    }
}
void main(){
    int a[5]={0,1,0,3,12};
    moveZeroes(a,5);
    getchar();
}