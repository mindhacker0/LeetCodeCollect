//136. 邻值查找
#include <stdio.h>
#include <stdlib.h>
struct ListNode {//双链表
    int val;
    int index;
    struct ListNode *prev;
    struct ListNode *next;
};
int main(int argc,char* argv[]){
    int len;
    scanf("%d",&len);
    getchar();
    int i=0,num;
    struct ListNode* head = NULL;
    struct ListNode* cur = NULL;
    for(i=0;i<len;i++){
        scanf("%d",&num);
        struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
        node->val = num;
        node->index = i;
        node->prev = NULL;
        node->next = NULL;
        if(head == NULL){
            head = node;
        }else{
            cur = head;
            while(cur->next!=NULL && num>cur->val){
                cur = cur->next;
            }
            if(cur->prev==NULL){//插入的地方是头部
              if(num<cur->val){//插入头部前面
                node->next = cur;
                cur->prev = node;
                head = node;
              }else{//插入头部后面
                if(cur->next==NULL){//插入的地方是尾部
                    cur->next = node;
                    node->prev = cur;
                }else{//插入中间部分
                    struct ListNode* next = cur->next;
                    cur->next = node;
                    node->prev = cur;
                    node->next = next;
                    next->prev = node;
                }
              }
            }else if(cur->next==NULL && cur->val<num){//插入的比尾部还大
                cur->next = node;
                node->prev = cur;
            }else{//插入中间部分
                struct ListNode* prev = cur->prev;
                prev->next = node;
                node->prev = prev;
                node->next = cur;
                cur->prev = node;
            }
            int min=1000000000,minValue,minIndex;
            if(node->prev!=NULL){
                min = abs(node->prev->val - node->val);
                minValue = node->prev->val;
                minIndex = node->prev->index;
            }
            if(node->next!=NULL){
                int val = abs(node->next->val - node->val);
                if(val<min ||((min == val) && (node->next->val < minValue))){
                    min = val;
                    minValue = node->next->val;
                    minIndex = node->next->index;
                }
                //printf("prev:%d,next:%d",node->prev->val,node->next->val);
            }
            // cur = head;
            // while(cur!=NULL){
            //     printf("%d ",cur->val);
            //     cur = cur->next;
            // }
            // printf("\n");
            printf("%d %d\n",min,minIndex+1);
        }
    }
    return 0;
}
// 10
// 4 5 6 1 2 3 7 8 9 10 