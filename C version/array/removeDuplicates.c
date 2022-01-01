#include <stdio.h>
int removeDuplicates(int* nums, int numsSize){
    int i = 0;
    int n = 0;
    for(;i<numsSize;i++){
        if(i==0 || nums[i]!=nums[i-1]){
            nums[n] = nums[i];
            n++;
        }
    }
    printf("%d %d",numsSize,n);
    return n;
}
void main(){
    int a[10]={0,0,1,1,1,2,2,3,3,4};
    removeDuplicates(a,sizeof(a)/4);
}