#include <stdio.h>
#include <stdlib.h>
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* plusOne(int* digits, int digitsSize, int* returnSize){
    int exp = 1;
    int *result = (int*)malloc(sizeof(int)*digitsSize);
    int i = digitsSize-1;
    for(;i>=0;i--){
        int sum = digits[i]+exp;
        result[i] = sum%10;
        exp = ~~(sum/10);
    }
    if(exp==1){//需要额外加上进位
        int *expand = (int*)malloc(sizeof(int)*(digitsSize+1));
        expand[0] = 1;
        int j=0;
        for(;j<digitsSize;j++){
            expand[j+1] = result[j];
        }
        free(result);
        returnSize[0] = digitsSize+1;
        return expand;
    }
    returnSize[0] = digitsSize;
    return result;
}
void main(){
    int arr[4] = {4,3,2,1};
    int *result;
    plusOne(arr,sizeof(arr),result);
    getchar();
}