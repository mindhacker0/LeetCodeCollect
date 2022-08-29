// 最短Hamilton路径
#include <stdio.h>
#include <stdlib.h>
void main(){
    int size;
    scanf("%d",&size);
    int** graph;
    graph = (int **)malloc(sizeof(int*)*size);
    int i,j;
    for(i=0;i<size;i++){
        graph[i] = (int*)malloc(sizeof(int)*size);
        for(j=0;j<size;j++){
            scanf("%d",graph[i]+j);
        }
    }
    // int **map;
    // map = (int **)malloc(sizeof(int*)*size);
    // for(i=0;i<size;i++){
    //     map[i] = (int*)malloc(sizeof(int)*size);
    //     for(j=0;j<size;j++){
    //         if(i===j) map[i][j] = 0;
    //         else 
    //     }
    // }
    long int min = 10e8;
    void search(int index,int* map,int path,int *route){
        if(index==size-1){
            printf("min:%d",min);
            for(i=0;i<size;i++) printf("%d",route[i]);
            printf("\n");
            if(path<min) min = path;
            return;
        }
        int i;
        for(i=1;i<size;i++){
            if(map[i] == 1||index == i) continue;
            map[i] = 1;
            path+= graph[index][i];
            route[index] = i;
            search(index+1,map,path,route);
            path-= graph[index][i];
            map[i] = 0;
        }
    }
    int* map = (int*)malloc(sizeof(int)*size);
    for(i=0;i<size;i++) map[i] = 0;
    map[0] = 1;
    search(0,map,0,(int*)malloc(sizeof(int)*size));
    printf("min:%d",min);
    // for(i=0;i<size;i++){
    //     for(j=0;j<size;j++){
    //         printf("%d ",graph[i][j]);
    //     }
    //     printf("\n");
    // }
    int k=0;
    for(;k<size;k++) free(graph[k]);
    free(graph);
    graph = (void*)0;
}