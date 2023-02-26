// from https://acm.hdu.edu.cn/showproblem.php?pid=1556
#include <stdio.h> 
int main(){
    int a;
    printf("%d",a);
    while(scanf("%d",&a) && a!=0){
        int m,n;
        int s = 0;
        for(;s<a;s++){
           scanf("%d %d",&m,&n);
           printf("%d,%d",m,n);
        }
    }
    getchar();
    return 0;
}//http://www.hebscztxyxx.gov.cn/notice/report/home