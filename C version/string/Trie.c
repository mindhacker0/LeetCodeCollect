//208. 实现 Trie (前缀树)
//将使用数组实现，仅支持0-26字母
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Trie{
    int count;
    struct Trie **next;
};
typedef struct Trie Trie;

Trie* trieCreate() {//初始化根节点
    Trie* root = (Trie*)malloc(sizeof(Trie));
    root->count = 0;
    root->next = (Trie**)malloc(sizeof(Trie*)*26);//存放26个指针的数组
    int i=0;
    for (; i < 26; i++){
      root->next[i] = NULL;
    }
    return root;
}

void trieInsert(Trie* obj, char * word) {//添加词库
    Trie* now = obj;
    while(*word!='\0'){
        if(now->next[*word-'a']==NULL){
            now->next[*word-'a'] = trieCreate();
        }
        now = now->next[*word-'a'];
        word++;
    }
    now->count++;
}

bool trieSearch(Trie* obj, char * word) {//能否检索到该词
    bool hasWord = true;
    Trie* now = obj;
    while(*word!='\0'){
        if(now->next[*word-'a']==NULL){
            hasWord = false;
            break;
        }
        now = now->next[*word-'a'];
        word++;
    }
    if(now->count == 0) hasWord = false;
    return hasWord;
}

bool trieStartsWith(Trie* obj, char * prefix) {
    bool hasWord = true;
    Trie* now = obj;
    while(*prefix!='\0'){
        if(now->next[*prefix-'a']==NULL){
            hasWord = false;
            break;
        }
        now = now->next[*prefix-'a'];
        prefix++;
    }
    return hasWord;
}

void trieFree(Trie* obj) {
    free(obj->next);
}

int main(){
    Trie* obj = NULL;
    obj = trieCreate();
    char *word = "abc";
    char *prefix = "ab";
    trieInsert(obj,word);
    printf("%d\n",trieSearch(obj,word));
    trieStartsWith(obj,prefix);
    trieInsert(obj,"ab");
    printf("%d\n",trieSearch(obj,"ab"));
    trieFree(obj);
}

