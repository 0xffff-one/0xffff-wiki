---
sidebar_position: 2
---

# 程序设计竞赛

作者：[@elitedj](https://0xffff.one/u/Elite)


## 简介

程序设计竞赛(Competitive Programming Contest)是指参赛选手在一定的计算机资源限制下通过编写计算机程序解决一些逻辑与数学问题。主要考察的是参赛者的数据结构与算法知识、编码能力、团队协作能力等，涉及到的知识点可以参考[知识树](https://zhuanlan.zhihu.com/p/454647571)。

通常，题目将会给出问题描述、程序输入输出格式、数据范围、时间限制、内存限制以及样例，通过在线测评系统(Online Judge, OJ)来自动判断选手提交的程序是否正确。

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

OI是信息学奥林匹克竞赛(Olympiad in Informatics)的简称，是在中学生中广泛开展的学科竞赛，是五大竞赛之一。OI竞赛包含NOIP、NOI等，这里不做展开，感兴趣可以前往[OI赛事简介](https://oi-wiki.org/contest/oi/)查看。

OI赛制指的就是在OI类竞赛中采用的赛制。选手只能有一次**正式提交**机会，每次提交会覆盖之前的提交，比赛期间没有OJ反馈，在赛后举办方统一对选手的提交进行测评。每个题目含有多个测试点，每个测试点含有不同分值，选手该题得分为通过的测试点分值之和。

### ACM赛制

ACM赛制中，选手有多次提交机会，每一次都会得到OJ的反馈，每个题目只有通过所有的测试点才能得分。比赛根据过题数进行排名，过题数相同时，总罚时越少的排名越靠前。总罚时是所有题目的罚时之和，每道题目的罚时是**第一次AC**的时间加上该题目**第一次AC之前**错误的次数\*20min，只有该题被AC了，它的罚时才会被累计到总罚时内。

## 相关竞赛

这里主要介绍的是国内大学中常见的、有一定含金量的程序设计竞赛。

### ICPC

[国际大学生程序设计竞赛](https://icpc.global/)(International Collegiate Programming Contest, ICPC)是历史悠久、规模庞大的世界级程序设计竞赛。在以前，ICPC是由[ACM](https://zh.wikipedia.org/zh-cn/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%8D%8F%E4%BC%9A)赞助的，所以也叫ACM-ICPC，或者简称ACM，即使现在ACM已经不再赞助ICPC了，但国内仍然习惯ACM的叫法。大多数参赛学校是985、211、计算机强校等，竞争激烈，含金量高。

在ICPC竞赛中，每个队伍最多由3名同学组成，在5个小时内使用一台计算机解决11~13个问题，题目多为英文，选手可以带任意的纸质资料。每AC一道题目，主办方就会给队伍派发一个对应颜色的气球。国内比赛主要支持C、C++、Java、Python语言进行编程。

在国内，ICPC分为不同级别的比赛，但近几年受到疫情影响，部分比赛被取消或者通过其他形式举行。

**邀请赛**  
邀请赛的举办时间是在上半年，邀请赛是预选赛的形式之一，会决出一部分区域赛的参赛名额，难度略低于区域赛。

**网络赛**  
网络预选赛的举办时间是在9月份左右，每一场区域赛都有一场网络预选赛，将决出大部分区域赛的参赛名额。

**区域赛**  
区域赛是正式的比赛，举办时间为10月~12月。参赛选手由邀请赛和网络赛决出。同一场区域赛中，每个学校最多派出3支正式队伍，每一支参赛队伍在一个赛季最多参加两场区域赛。

**ECL—Final**  
ECL—Final是指东亚大陆决赛，参赛选手多为各场区域赛中取得较好名次的队伍，且不受最多参加两场区域赛的限制。

**World Final**  
世界总决赛，简称为WF。每一场区域赛（包括ECL—Final）的前3~4名获得WF的参赛名额，每一所学校最多派出一支队伍参加次年举办的WF。

**奖项设置**
- 非WF：前10%为金、除金外的前20%为银、除金、银外的前30%为铜  
- WF：4金、4银、4铜


### CCPC

[中国大学生程序设计竞赛](https://ccpc.io/)(China Collegiate Programming Contest, CCPC)是由教育部高等学校计算机类专业教学指导委员会主办的面向全国高校大学生的年度学科竞赛，模式与ICPC一致，比赛时间与ICPC相近，与ICPC统称为XCPC。在国内，题目难度和选手质量都与ICPC一致，含金量和认可度可以对标ICPC。


### 蓝桥杯

[蓝桥杯](https://dasai.lanqiao.cn/pages/dasai/index.html)是由工信部举办的大赛，包含程序设计类、电子类等竞赛，根绝学历、院校类别及编程语言分为不同的参赛组并分别排名。这里主要介绍的是程序设计竞赛部分。蓝桥杯共分为省赛和国赛两个部分，只有省赛一等奖才能继续参加国赛，支持C/C++、Java、Python语言，分为研究生组和大学生ABC组。其中，研究生只能参加研究生组，985、211大学可参加A组及以上组别，其余本科院校可以参加B组及以上组别，专科类院校可以参加C组及以上组别。


### 天梯赛

[团体程序设计天梯赛](https://gplt.patest.cn/regulation)是由浙江大学[陈越](https://baike.baidu.com/item/%E9%99%88%E8%B6%8A/12189569)老师推广的一个比赛。天梯赛分为珠峰争鼎、华山论剑、沧海竞舟组，其中前两个是本科生组。每个队伍由10名同学组成，单人解题，累计总分进行队伍排名。题目一共分为三个档次，分别是L1、L2、L3，L1和L2满分100，L3满分90，只有当队伍的L1总分大于等于800分时，L2的分值才会被计算进队伍总分，只有当队伍L2总分大于等于400分时，L3的分值才会被计入队伍总分。天梯赛采用IOI赛制，IOI赛制与OI赛制的区别在于IOI赛制能够得到OJ的实时反馈。


## 资源推荐


训练平台
- [POJ](http://poj.org/)
    - 北京大学的OJ，里面含有大量经典的题目，但编译器的版本较旧
- [ZOJ](https://zoj.pintia.cn/)
    - 浙江大学的OJ，里面含有大量经典的题目
- [HDOJ](http://acm.hdu.edu.cn/)
    - 杭电OJ，含有大量经典题目
    - 近几年假期会在该平台举办多校练习赛，题目质量高，适合团队训练
- [洛谷](https://www.luogu.com.cn/)
- [牛客](https://ac.nowcoder.com/acm/home)
- [计蒜客](https://nanti.jisuanke.com/oi)
- [Codeforces](https://codeforces.com/)
    - 世界上最著名的OJ之一，经常举办比赛，但由于时差原因，中国大陆的时间多在22:35~00:35之间
    - gym内有大量区域赛套题，非常适合团队训练
    - [游玩攻略](https://zhuanlan.zhihu.com/p/42106537)
- [AtCoder](https://atcoder.jp/home)
    - 每周都会举办比赛，时间比Codeforces友好
- [Virtual Judge](https://vjudge.net/)
    - 用一个账号提交多个平台的题目，可以自由组合题目创建比赛

书籍
- [《挑战程序设计竞赛》](http://product.dangdang.com/23272528.html)
- [《算法竞赛入门经典》](http://product.dangdang.com/23489864.html)
- [《算法竞赛入门经典训练指南》](http://product.dangdang.com/22891889.html#ddclick_reco_reco_relate)

模板
- [kuangbin](https://github.com/kuangbin/ACM-ICPC)
- [f-zyj](https://blog.csdn.net/f_zyj/article/details/51594851)
- [長門有希](https://blog.yuki-nagato.com/zh-cn/articles/ACM%E6%A8%A1%E6%9D%BF%E6%95%B4%E7%90%86/)


课件
- [ShareOI](https://github.com/hzwer/shareOI)

视频
- [闫学灿](https://space.bilibili.com/7836741/)
- [杜瑜皓、施韩原](https://space.bilibili.com/93709965/)
- [不分解的AgOH](https://space.bilibili.com/120174936/)
- [开开心心233](https://space.bilibili.com/133821921/)
- [AutSky·JadeK](https://space.bilibili.com/7711573/)
- [qscqesze](https://space.bilibili.com/611212/)

其他
- [oi-wiki](https://oi-wiki.org/)
    - 大量算法教学
- [OEIS](http://oeis.org/)
    - 数列网站，大表找规律用
- [OIer DB](https://bytew.net/OIer/)
    - 查询OIer经历
- [过往比赛榜单](https://acm.sdut.edu.cn/acmss/)
    - 由山东理工大学收集整理，但缺乏更新
- [XCPC Board](https://board.xcpcio.com/)
    - 包含较新的比赛榜单

