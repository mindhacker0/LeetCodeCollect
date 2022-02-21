#include <stdio.h>
#include <stdlib.h>
#include "tools.h"


struct ListNode* reverseKGroup(struct ListNode* head, int k){
    if(k==1) return head;
    struct ListNode* pro = head;
    struct ListNode* start = NULL;
    struct ListNode* end = NULL;
    struct ListNode* sHead = NULL;
    int count = 0;
    struct ListNode* zip = NULL;
    while(head!=NULL){
        if(count%k==0){
            printf("%d\n",head->val);
            if(end!=NULL){
                printf("[%d %d]\n",end->val,head->val);
                if(zip!=NULL){
                    zip->next = end;
                }
                zip = pro;
                if(sHead==NULL) sHead = end;
            } 
            pro = head;
            start = NULL;
            end = NULL;
        }
        start = head;
        head = head->next;
        start->next = end;
        end = start;
        count++;
    }
    struct ListNode* prev = NULL;
    struct ListNode* next = end;
    while(end!=NULL){
        end = end->next;
        next->next = prev;
        prev = next;
        next = end;
    }
    if(zip!=NULL) zip->next = prev;
    while(sHead!=NULL){
        printf("%d\n",sHead->val);
        sHead = sHead->next;
    }
    return sHead;
}
void main(){
    int arr[5] = {1,2};
    struct ListNode*l1 = makeLinkFromList(arr,2);
    reverseKGroup(l1,2);
}