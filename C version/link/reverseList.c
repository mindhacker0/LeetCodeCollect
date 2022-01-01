#include<stdio.h>
#include<stdlib.h>
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* reverseList(struct ListNode* head){
    struct ListNode* prev = NULL;
    struct ListNode* next = head;
    while(head!=NULL)
    {
        head = head->next;
        next->next = prev;
        prev = next;
        next = head;
    }
    printf("%d\n",prev->val);
    return prev;
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
            printf("%d\n",node->val);
            cur = node->next;
        }else{
            cur->val = a[i];
            cur->next = i==4?NULL:(struct ListNode*)malloc(sizeof(struct ListNode));
            printf("%d\n",cur->val);
            cur = cur->next;
        }
    }
    reverseList(head);
    // printf("%d\n",head->val);
    // printf("%d\n",head->next->val);
    // printf("%d\n",head->next->next->val);
    // printf("%d\n",head->next->next->next->val);
    // printf("%d\n",head->next->next->next->next->val);
    // printf("%d\n",head->next->next->next->next->next);
    getchar();
}