#include <iostream>
#import "public/tools.cpp"
using namespace std;
// 各类型所占内存
int main()
{   
    short int a0 = 100;
    int a = 100;
    long int b = 100;
    long long int c = 100;
    char d;
    double e = 3.14;
    long double f;
    float g;
    std::cout<<"size short int "<<sizeof(a0)<<endl;
    std::cout<<"size int "<<sizeof(a)<<endl;
    std::cout<<"size long int "<<sizeof(b)<<endl;
    std::cout<<"size long long int "<<sizeof(c)<<endl;
    std::cout<<"size char "<<sizeof(d)<<endl;
    std::cout<<"size double "<<sizeof(e)<<endl;
    std::cout<<"size long double "<<sizeof(f)<<endl;
    std::cout<<"size float "<<sizeof(g)<<endl;
    std::cout<<sum(1,2)<<endl;
    getchar();
    return 0;
}
