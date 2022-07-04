---
sidebar_position: 1
---

# 程序设计竞赛

作者：@elitedj
状态：施工中...


## 简介

程序设计竞赛(Competitive Programming Contest)是指参赛选手在一定的计算机资源限制下通过编写计算机程序解决一些逻辑与数学问题。主要考察的是参赛者的数据结构与算法知识、编码能力、团队协作能力
等，涉及到的知识点可以参考[知识树](https://zhuanlan.zhihu.com/p/454647571)。

通常，题目将会给出问题描述、程序输入输出格式、数据范围、时间限制、内存限制以及样例，通过在线测评系统(Online Judge)来自动判断选手提交的程序是否正确。

| 英文全称          | 英文简称 | 中文全称 | 解释                         |
| --------------------- | -------- | ---------- | ------------------------------ |
| Accepted              | AC       | 通过测评 | 程序正确                   |
| Wrong Answer          | WA       | 答案错误 | 有部分测试用例输出与答案不符 |
| Compile Error         | CE       | 编译错误 | 程序编译出错             |
| Presentation Error    | PE       | 格式错误 | 输出格式与要求不符    |
| Time Limit Exceeded   | TLE      | 超时     | 未在规定时间内执行完成 |
| Memory Limit Exceeded | MLE      | 内存超限 | 使用的内存超过了题目限制 |
| Runtime Error         | RE       | 运行时错误 | 程序运行过程中发生错误导致崩溃 |


## Hello World

为了让读者更快的了解程序设计竞赛需要做些什么，下面将通过一个简单的题目快速讲解。

[A + B Problem](https://zoj.pintia.cn/problem-sets/91827364500/problems/91827364500)是程序设计竞赛的`Hello World`。题目描述给出程序将输入一系列的整数`a`和`b`，并且输出他们的和，如果读者已经掌握了基本的C++语法(只要是OJ支持的语言都行)，那么类似于下面的代码就可以获得`Accepted`反馈。

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    while (cin >> a >> b) {
        cout << a + b << endl;
    }
    return 0;
}
```


## 赛制

在不同的比赛，可能采用不同的赛制，这会影响到选手在赛场上的决策。程序设计竞赛主要的赛制有**OI赛制**和**ACM赛制**两种，下面将分别介绍。

### OI赛制

### ACM赛制

## 相关竞赛

### ICPC

### CCPC

### 蓝桥杯

### 天梯赛

## 资源推荐

训练平台
- [POJ](http://poj.org/)
- [ZOJ](https://zoj.pintia.cn/)
- [HDOJ](http://acm.hdu.edu.cn/)
- [Codeforces](https://codeforces.com/)
- [AtCoder](https://atcoder.jp/home)

书籍

模板

课件

