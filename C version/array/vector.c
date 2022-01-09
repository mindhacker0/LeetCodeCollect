#include <stdio.h>
#include <stdlib.h>
//resize array
#define initSize 2
typedef int Type;
struct vector {
    Type *base;
    int size;
    int opacity;
};
struct vector *init(){//初始化变长数组
    struct vector *v = (struct vector*)malloc(sizeof(struct vector));
    v->base = (Type*)malloc(sizeof(Type)*initSize);
    v->size = 0;
    v->opacity = initSize;
    return v;
}
Type get(struct vector *v,int index){//获取数组某一项
    if(index>v->size){
        printf("获取下标%d超出数组大小%d\n",index,v->size);
    }
    return v->base[index];
}
void set(struct vector *v,int index,Type item){//设置数组某一项
    if(index>v->size){
        printf("设置下标%d超出数组大小%d\n",index,v->size);
    }
    v->base[index] = item;
}
void push_back(struct vector *v,Type item){//数组尾部推入
    v->base[v->size] = item;
    v->size++;
    if(v->size >= v->opacity){//数组大小将超出，需要重新申请2倍空间
        int newSize = v->opacity<<1;
        Type *newBase = (Type*)malloc(sizeof(Type)*newSize);
        for(int i=0;i<v->size;i++){
            newBase[i] = v->base[i];
        }
        free(v->base);
        v->base = newBase;
        v->opacity = newSize;
    }
    printf("size:%d\n",v->size);
}
Type pop_back(struct vector *v){//数组尾部弹出
    if(v->size<=0){
        return (Type)0;
    }
    Type pop = v->base[v->size-1];
    v->size--;
    if(v->size < (v->opacity>>2) && v->size > initSize){//数组大小小于四分之一容量，缩小一半
        int newSize = v->opacity>>1;
        Type *newBase = (Type*)malloc(sizeof(Type)*newSize);
        for(int i=0;i<v->size;i++){
            newBase[i] = v->base[i];
        }
        free(v->base);
        v->base = newBase;
        v->opacity = newSize;
    }
    return pop;
}
int main(){
   struct vector *v1 = init();
   printf("%d\n",v1->opacity);
   push_back(v1,6);
   push_back(v1,7);
   printf("%d\n",v1->opacity);
   printf("%d\n",pop_back(v1));
   getchar();
}