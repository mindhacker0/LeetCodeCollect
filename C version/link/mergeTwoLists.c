#include <stdio.h>
#include <stdlib.h>
#include "tools.h"
struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2){
    struct ListNode*head = NULL;
    struct ListNode*cur = NULL;
    while(list1!=NULL || list2!=NULL){
        if(list1==NULL || (list2!=NULL && list1->val>list2->val)){//取list2的值
            if(head==NULL){
                head = list2;
                cur = head; 
            }else{
                cur->next = list2;
                cur = cur->next;
            }
            list2 = list2->next;
        }else if(list2==NULL || (list1!=NULL && list1->val<=list2->val)){//取list1的值
            if(head==NULL){
                head = list1;
                cur = head; 
            }else{
                cur->next = list1;
                cur = cur->next;
            }
            list1 = list1->next;
        }
    }
    return head;  
}
void main(){
    int arr[3] = {1,2,4};
    int arr1[3] = {1,3,4};
    struct ListNode*l1 = makeLinkFromList(arr,3);
    struct ListNode*l2 = makeLinkFromList(arr1,3);
    mergeTwoLists(l1,l2);
}