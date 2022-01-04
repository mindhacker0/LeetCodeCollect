struct ListNode {
    int val;
    struct ListNode *next;
};
struct ListNode *makeLinkFromList(int *list,int size){
    struct ListNode* head = NULL;
    struct ListNode* cur = NULL;
    int i = 0;
    for(;i<size;i++){
        if(i==0){
            struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
            node->val = list[i];
            node->next = (struct ListNode*)malloc(sizeof(struct ListNode));
            head = node;
            printf("%d\n",node->val);
            cur = node->next;
        }else{
            cur->val = list[i];
            cur->next = i==4?NULL:(struct ListNode*)malloc(sizeof(struct ListNode));
            printf("%d\n",cur->val);
            cur = cur->next;
        }
    }
    return head;
}
