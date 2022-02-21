#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
typedef int valueType;
typedef int keyType;
struct Element{
    keyType key;
    valueType value;
};
typedef struct TableNode{
    struct Element* e;
    struct TableNode *next;
} TableNode;
typedef struct HashTable{
   int size;
   int capacity;
   TableNode** table;
} HashTable;
int clackey(keyType key){//计算对应位置
    int index = (int)(key%200);
    if(index<0) index+=200;
    return index;
}
HashTable* makeHashTable(int size){//初始化哈希表,size哈希空间大小
    HashTable* hashMap = (HashTable*)malloc(sizeof(HashTable));
    hashMap->size = 0;
    hashMap->capacity = size;
    hashMap->table = (TableNode**)malloc(sizeof(TableNode*)*size);
    int i=0;
    for(;i<size;i++){
        hashMap->table[i] = (TableNode*)malloc(sizeof(TableNode));
        hashMap->table[i]->e = NULL;
        hashMap->table[i]->next = NULL;
    }
    return hashMap;
}
void setValue(HashTable* hashmap,keyType key,valueType value){//设置值
    int index = clackey(key);
    //printf("set %d : %d\n",index,value);
    TableNode* table = hashmap->table[index];
    if(table->e == NULL){//没有冲突
        table->e = (struct Element*)malloc(sizeof(struct Element));
        table->e->key = key;
        table->e->value = value;
        hashmap->size++;
    }else{
        bool exist = false;
        TableNode* prev = NULL;
        while(table!=NULL){
            if(table->e->key == key){//链表存在该键
               table->e->value = value;
               exist = true;
            }
            prev = table;
            table = table->next;
        }
        if(!exist){//存在冲突，拓展链表
            printf("set %d : %d\n",key,value);
            prev->next = (struct TableNode*)malloc(sizeof(struct TableNode));
            prev = prev->next;
            prev->e = (struct Element*)malloc(sizeof(struct Element));
            prev->e->key = key;
            prev->e->value = value;
            prev->next = NULL;
        }
    }
   
}
valueType getValue(HashTable* hashmap,keyType key){//获取key对应的value
    int index = clackey(key);
    TableNode* table = hashmap->table[index];
    if(table->e!=NULL){ 
        while(table!=NULL){
            if(table->e->key == key){
               return table->e->value;
            }
            table = table->next;
        }
    }
    return (valueType)(-(10e9+1));
}
void printHashMap(HashTable* hashmap){//打印hashmap
    int i =0;
    for(i=0;i<hashmap->capacity;i++){
        TableNode* table = hashmap->table[i];
        if(table->e!=NULL){
            while(table!=NULL){
                printf("%d:%d=>",table->e->key,table->e->value);
                table = table->next;
            }
            printf("NULL\n");
        }
    }
}
/*void main(){
    HashTable* hashT = makeHashTable(200);
    srand((unsigned int)time(0));
    int i =0;
    for(;i<4000;i++){
        setValue(hashT,(char*)(rand()%200),i);
    }
    //printHashMap(hashT);
    //printf("get %d \n",getValue(hashT,"ab"));
    getchar();
}*/
