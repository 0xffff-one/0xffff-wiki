---
title: 面向入门的开发环境打造
sidebar_position: 7
---

> 注：入门专题仍在施工中，可以在 [这里](https://0xffff.one/d/1545) 关注最新进展 😊


环境搭建一直是老生常谈的话题，网上各类教程五花八门，大多只是停留在“能用”的程度，知其然不知所以然。结果要么停留在上古时期，要么重度依赖某些集成套装所构筑的复杂体系，懵懵懂懂之下，不少刚入坑的新朋友在这其中也迷失道路。即便到了大三大四，连命令行都还不了解的都大有人在。

计算机世界就像一座大山，每个人都不可能一下子穷尽它的所有。若对此没有一个基本印象，很容易绕在山脚下的细枝末节中徘徊。你不是第一个来到这个山头的人，前人已挖好许多好走的山路，通过它你可以快速了解一下这座山的大体构造。熟悉以后，再更深入地去探险也成为可能，走出一条属于你自己的不寻常山路。

几年的编程学习之中，给我带来一点很深的体会是，**计算机入门的障碍，更多在于缺少一个统一、稳定、靠谱的编程学习环境。**一个好的环境，不仅仅是一个顺手的编程工具，更是你在计算机大山中披荆斩棘的瑞士军刀的存在。

### 核心思想及其权衡

在明确具体步骤之前，可以先明确一个核心的目标和预期，然后根据实际情况去接近这样的状态。目前来看，一个稳定、靠谱的编程学习环境，具体展开来看，大致需要满足这三点：

1. 友好的命令行界面（Command-Line Interface）
2. 好用的文本编辑器（Text Editor）
3. 适合计算机学习的 Linux 操作系统

接下来展开说说它们的重要性。

**命令行界面（Command-Line Interface）**

这块对于大多数人来说想必会比较陌生，目前我们接触的计算机都是冯·诺依曼体系结构，始终离不开如图的五大部分。其中，输入、输出设备是机器与外界的交互渠道。

![图源：**[冯·诺依曼体系结构 - 百度百科](https://baike.baidu.com/item/%E5%86%AF%C2%B7%E8%AF%BA%E4%BE%9D%E6%9B%BC%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/4690854)**](https://static.0xffff.one/assets/files/2019-10-07/091807mxx9i6mjkzvvmqqh.jpg)

图源：**[冯·诺依曼体系结构 - 百度百科](https://baike.baidu.com/item/%E5%86%AF%C2%B7%E8%AF%BA%E4%BE%9D%E6%9B%BC%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/4690854)**

计算机发展至今，输入、输出设备越来越复杂多样，例如键盘、触控板、屏幕、打印机、音频输入输出、网络等等等等。计算机实现用户想做的事，内部需要通过一些特定的程序，去处理用户通过输入设备传入的操作，通过输出设备给用户反馈结果。负责与外界交互的部分又称作**界面**（Interface，也叫“接口”）。

最为常见的界面，便是以显示器为主的输出设备、以鼠标和触屏为主的输入设备，对应的**图形用户界面**（**G**raphical **U**ser **I**nterface，简称GUI）。GUI 具有贴合直觉的优势，但因为考虑的输入输出设备等因素十分众多，实现也较复杂，设计语言随着时代发展一直在变，没有一个统一的标准。

在各种各样的输入输出设备之间，有一组输入输出贯穿了整个冯诺依曼结构计算机世界的始终，那就是 — 标准输入输出（**St**andar**d** **I**nput/**O**utput），与此对应的输入输出设备，叫做**终端**。关于终端，这里不详细展开介绍了，若有兴趣详细了解，可以阅读 [这篇介绍终端发展历史的博文](https://printempw.github.io/the-difference-between-cli-terminal-shell-tty/)。

基于标准输入输出实现的操作界面，也叫做**命令行界面**（**C**ommand-**L**ine **I**nterface，简称 CLI）。它的优点是简洁且富有表达力，不足的是，使用 CLI 的初期需要一些学习成本和记忆的负担。

GUI贴近直觉的特性，尤其适合简单直观一次性的任务。当任务变得庞大、固定或重复，GUI 表达力的局限性就开始体现出来。CLI 的简洁与表达力带来的好处，早已盖过了它本身的学习成本，但一般人们习惯 GUI 的舒适圈之后，很难体会到这一点，也就比较难走出来。

**文本编辑器（Text Editor）**

对于人类编写的代码而言，展示的方式都是文本的形式，文本编辑器也是写代码的一个重要工具。在介绍文本和代码编辑之前，首先需要明确计算机存储的 **数据** (Data)、**[文件系统](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F)** (File System)和**[文件](https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%85%A6%E6%AA%94%E6%A1%88)**(File)的概念差异。

**数据** (Data) 在计算机载体中，以二进制位(bit)的状态来表示。一般以**字节**(byte)为单位去组织存取的过程（1 byte = 8 bits）。一段数据也是由若干个 byte 的二进制位组合而成，针对文本类型数据计算机会按照文本的编码规则（如 ascii，utf-8 等）将其编码成对应的二进制状态，以供使用。

底层的存储器一般按照包含固定数量的 byte 的逻辑块（**[Logical Block](https://en.wikipedia.org/wiki/Logical_block_addressing)**）组织数据，为了抹平底层的差异，在操作系统之上，设计了**文件系统**的概念。文件系统在用户视角提供了**文件**和**目录**的抽象概念。用户在使用时无需关心底层如何实现，只需要知道目录和文件名，就能访问到对应的文件数据。

文本编辑器便是专门处理文本类型数据的工具，为你提供文本处理，以及保存和读取文件的功能。代码在计算机的视角都是文本，不同语言的代码文件的差别，只是文件命名后缀的差异不同 (`.c`, `.cpp`, `.py`, `.java`, `.js`...)。写代码的活动，就是编辑这样的文本的过程。

理论上来说，任意一个文本编辑器都可以编写代码，差别在于体验与效率上。而人的力量是有限的，但因为不同的语言规则不同，提升阅读和编写体验便成了一个关键的因素。为了减轻大脑的负担，减少出错的概率，就产生了类似不同元素对应的代码着色，行号显示等等的辅助功能，如图：

![](https://static.0xffff.one/assets/files/2019-10-07/1570271534973.png)

除了行号与高亮这些基本要求外，一个好用的编辑器可能还有关键字提示、自动补全、语法检查等等功能，具体需要你慢慢探索和体会。

**Linux 操作系统**

关于 Linux 的重要性，此前**[@Bintou](https://0xffff.one/u/Bintou)** 老师开的帖子 **[学习Linux为什么重要](https://0xffff.one/d/367)** 已有详细讨论。

总的来说，Linux 的重要性主要是以下几点：

1. Linux 系统本身作为开源程序，是一个可以避免纸上谈兵，直接深入研究操作系统原理的系统；
2. Linux 由程序员为程序员打造，在 CLI 方面的生态相对是更完善的；
3. 通过 Linux 可以接触到许多优秀的开源软件，感受黑客文化与 Unix 社群文化的熏陶，以及开源社区的开发模式，即使未来投身于其它领域的开发，其中也会带来不少积极的影响；
4. 在商业视角，Linux 基本主导了服务器于云计算的市场，开源模式正逐渐主导整个软件业，即使庞大如微软，也在拥抱 Linux 为代表的开源社区体系。功利地说，即使仅面向未来的就业，Linux 也是无法拒绝的一项技能。

### 推荐的方案

基于以上三点出发，可供选择的方案其实有许多，对于刚入门的新手来说，一开始最重要的是快速对这个体系有一个大致印象。大致来说可以分两步，首先通过一个预先配置好的套装迅速地折腾起来，然后在落脚以后，再考虑折腾和研究更合适自己的方案。拿开头的比喻来说，就是：先走计算机大山中挖好的比较好走的山路，对这座山有了大致的了解之后，再去挑战那些不那么容易的路线。

综合这一点考虑，入门的话推荐以下方案：

1. 虚拟机软件：VirtualBox、VMWare (需付费) 等
2. 操作系统：Ubuntu 最新的稳定版（当前为 22.04 LTS）
3. 文本编辑器：[gedit](https://wiki.gnome.org/Apps/Gedit) + [Visual Studio Code](https://github.com/microsoft/vscode)

虚拟机可避免过早地掉进驱动折腾的坑，快速进入状态；Ubuntu 作为一个强调易用性，面向桌面应用的发行版，在预置的工具等各方面都有比较好的支持；gedit 是一个小巧好用的文本编辑器，Visual Studio Code 是一个功能丰富，扩展性极强的编辑器，在各领域的开发都能有统一的开发体验，且上手门槛不高，与 gedit 配合下，基本上可以满足入门时大多数的文本编辑需求。

若你不想用虚拟机的话，一个备选的方案是 Windows + WSL 来实现，可能会遇到一些操作系统兼容的坑；苹果玩家也可直接基于 macOS 去做开发，当然苹果生态的 CLI 可能不如 Linux 的支持丰富。

更具体的操作因人而异，且有些时效性的局限，这里就不再赘述。网络上已有不少的教程，带着上述的目标，找一个适合自己的就可以，可以和身边同学互相抱团，多分享和总结，少走一些弯路。

### 进一步的延伸

当你在 Linux 体系逐步落脚以后，在它的使用过程中，你可以作更多的折腾和研究，在身边的爱好者之间可以多一些交流。对于 CLI 的使用，还可以关注 MIT 的 [Missing Semester](https://0xffff.one/d/615) 课程，里面有关于 CLI 一整个工具体系的讲座，教你一些常用且好用的 CLI 工具。

更建议挑战一下，完全在 Linux 桌面下工作生活乃至游戏，虽然 Linux 在桌面领域还有些落后于 Windows 和 macOS，作为程序员的浪漫，在学生时代比较多专注时间的状态下，可以多多尝试和折腾，在尝试攻克一些自己不爽的难题的过程中，也会大大提升你的代码水平。这也是历史发展的一点趋势，许多软件也有适配 Linux 桌面，上手难度相比于过去要小很多。

### 参考链接

1. [冯·诺依曼体系结构 - 百度百科](https://baike.baidu.com/item/%E5%86%AF%C2%B7%E8%AF%BA%E4%BE%9D%E6%9B%BC%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/4690854)
2. [命令行界面 (CLI)、终端 (Terminal)、Shell、TTY，傻傻分不清楚？](https://printempw.github.io/the-difference-between-cli-terminal-shell-tty/)
3. [文件系统 - 维基百科](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F) 
4. [文件 - 维基百科](https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%85%A6%E6%AA%94%E6%A1%88)
5. [Logical Block - WikiPedia](https://en.wikipedia.org/wiki/Logical_block_addressing)
6. [gedit - GNOME](https://wiki.gnome.org/Apps/Gedit)
7. [VSCode 官网](https://code.visualstudio.com/)
8. [MIT 推出的“磨刀”课程 - The Missing Semester of Your CS Education - 0xFFFF](https://0xffff.one/d/615)
