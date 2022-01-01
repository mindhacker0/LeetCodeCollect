#include <stdio.h>
#include <stdbool.h>
#define Opacity 100
struct stack {
    int top;
    int *base;
    int length;
};
void init(struct stack *s){
    s->base = (int *)malloc(Opacity * sizeof(int));    //申请存储空间
    s->top = 0;             //栈顶指针初始值为0
    s->stacksize = Opacity;       //容量为初始值
}
bool isValid(char * s){
    bool valid = false;
    struct stack closur;
    init(closur);
    for(;;){
        if(*s!='\0'){
            printf("%d\n",*s);
            *s++;
        }else{
            break;
        }
    }
    return valid;
}
void main(){
   char str[6] = {'[','(',']',')','}','\0'};
   char cpy[] = {'a','b'};
   char *cps = "urwr";
   isValid(str);
   getchar();
}