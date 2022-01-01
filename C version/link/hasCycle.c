#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct ListNode {
    int val;
    struct ListNode *next;
};
bool hasCycle(struct ListNode *head){//快慢指针判断循环链表
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    bool  hasCircle = false;
    for(;;){   
        if(slow!=NULL){
            slow = slow->next;
        }
        if(fast!=NULL){
            fast = fast->next;
            if(fast!=NULL){
                fast = fast->next;
            }
        }
        if(slow==NULL && fast==NULL){
            break;
        }
        if(slow == fast || (fast!=NULL && fast->next == slow)){
            hasCircle = true;
            break;
        }
    }
    return hasCircle;
}
void main(){
    int a[5] = {1,2,3,4,5};
    struct ListNode* head = NULL;
    struct ListNode* cur = NULL;
    int i = 0;
    for(;i<5;i++){
        if(i==0){
            struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
            node->val = a[i];
            node->next = (struct ListNode*)malloc(sizeof(struct ListNode));
            head = node;
            //printf("%d\n",node->val);
            cur = node->next;
        }else{
            cur->val = a[i];
            cur->next = i==4?NULL:(struct ListNode*)malloc(sizeof(struct ListNode));
            //printf("%d\n",cur->val);
            cur = cur->next;
        }
    }
    hasCycle(head);
}