#include <stdio.h>
#include <stdlib.h>
struct ListNode {
    int val;
    struct ListNode *next;
};
struct ListNode *detectCycle(struct ListNode *head) {
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
    return NULL;
}
void main(){

}