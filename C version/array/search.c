#include <stdio.h>
int search(int* nums, int numsSize, int target){
    int left = 0,right = numsSize-1;
    int middle;
    while (left<=right){
        middle =left +  ~~((right-left)/2);
        if(nums[middle] == target){
            printf("find %d\n",middle);
            return middle;
        }else if(nums[middle] <= target){
            left = middle+1;
        }else{
            right = middle-1;
        }
    }
    return -1;
}
void main(){
   int nums[] = {-1,0,3,5,9,12};
   int target = 9;
   search(nums,sizeof(nums)/4,target);
   getchar();
}