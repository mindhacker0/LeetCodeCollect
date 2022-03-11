//845. 八数码
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int main(int argc,char* argv[]){
    int arr[3][3];
    int i=0,j=0;
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            scanf("%d",&arr[i][j]);
        }
        getchar();
    }
    bool isArray(int arr[3][3]){
        int i=0,j=0;
        for(i=0;i<9;i++){
            printf("%d ",*(arr+i*4));
        }
        return true;
    }
    //isArray(arr);
}
// 10
// 4 5 6 1 2 3 7 8 9 10 