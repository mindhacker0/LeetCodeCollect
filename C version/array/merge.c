#include <stdio.h>
void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n){
    int idx1 = m-1;
    int idx2 = n-1;
    int i=nums1Size-1;
    for(;i>=0;i--){
        if(idx2<0 || (idx1>=0 && nums1[idx1] > nums2[idx2])){
            nums1[i] = nums1[idx1];
            idx1--;
        }else{
           nums1[i] = nums2[idx2];
           idx2--;
        }
    }
    for(i=0;i<nums1Size;i++){
        printf("%d\n",nums1[i]);
    }
}
int main(){
    int arr1[6] = {1,2,3,0,0,0};
    int arr2[3] = {2,5,6};
    merge(arr1,sizeof(arr1)/4,3,arr2,sizeof(arr2)/4,3);
    getchar();
}