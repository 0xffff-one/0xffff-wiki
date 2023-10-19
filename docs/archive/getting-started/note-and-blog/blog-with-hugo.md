---
sidebar_position: 1
---

# Hugo+Github Page搭建博客

作者：@elitedj

本文介绍通过Hugo+GitHub Page搭建个人博客，并且通过Github Action实现自动化渲染部署，全程免费。本文面向有一定解决能力的同学。

[Hugo](https://gohugo.io/)是一个静态网站生成器，我们用Markdown完成博客后Hugo会按照主题定义好的模板去自动生成HTML等需要的文件。诸如此类的生成器还有很多，例如[Hexo](https://hexo.io/zh-cn/)、[Jekyll](https://jekyllrb.com/)等，并没有特别大的差异。

[Github Page](https://pages.github.com/)能够免费的将生成好的静态文件部署到Github的服务器上，使得所有人能够在互联网上访问到你的博客，节省了服务器的费用和管理服务器等事情。

## Hugo

### 环境准备

安装Hugo请参考官方的[Install Page](https://gohugo.io/getting-started/installing/)，根据自己系统选择合适的安装方式。Hugo有普通版和`extended`版本，某些主题需要`extended`版本才可以渲染，可以提前在[主题市场](https://themes.gohugo.io/)选择自己喜欢的主题，并且查看主题的安装文档选择合适的Hugo版本进行下载安装。

安装完成后可以在终端通过以下命令验证

```bash
hugo version
hugo v0.101.0-466fa43c16709b4483689930a4f9ac8add5c9f66 linux/amd64 BuildDate=2022-06-16T07:09:16Z VendorInfo=gohugoio
```

### 创建博客工程

```bash
# your_blog是文件夹的名字
hugo new site your_blog
```

创建完目录后可以去选择一个喜欢的[主题](https://themes.gohugo.io/)，主题文档一般都有详细的安装教程和配置文档。每个人喜欢的主题和配置都不一样，这里就不详细展开了。

通过以下命令可以创建一个初始化的博客文档，路径是`your_blog/content/post/hello-world.md`

```bash
hugo new post/hello-world.md

# 部分主题文章放在posts路径下,则命令为
hugo new posts/hello-world.md
```

选好主题，写完博文，可以通过创建一个临时服务器预览效果，地址是`http://localhost:1313/`

```bash
hugo server
```

每次完成博文的书写之后，可以通过命令进行渲染，生成的目录在`your_blog/public`

```bash
hugo

Start building sites … 
hugo v0.101.0-466fa43c16709b4483689930a4f9ac8add5c9f66 linux/amd64 BuildDate=2022-06-16T07:09:16Z VendorInfo=gohugoio

                   | ZH   
-------------------+------
  Pages            | 124  
  Paginator pages  |   5  
  Non-page files   | 175  
  Static files     |   0  
  Processed images |   2  
  Aliases          |  38  
  Sitemaps         |   1  
  Cleaned          |   0  

Total in 1283 ms
```

## Github Page

首先需要安装[Git](https://git-scm.com/)工具并且在[Github](https://github.com/)上创建一个账号。

创建Github Page仓库，仓库名为`username.github.io`，其中`username`是你的用户名。

现在只需要将Hugo渲染好的静态文件上传到仓库即可，即将`yuor_blog/public`路径下的所有文件都push上去，新创建的空白仓库有本地文件夹和远程仓库关联的教程，按照命令操作就可以了。

稍等一会就可以通过`https://username.github.io`这个网址访问到刚刚部署好的博客了。

## Github Action

如果需要将博客工程也备份在Github上的话，那么每次写完博客都需要push博客工程和Github Page，这样略微有点麻烦，可以借助Github Action来实现自动化渲染博客并且部署到Github Page仓库完成发布。

首先在`your_blog/.github`路径下创建`workflows/deploy.yml`，并且写入以下内容，并把`EXTERNAL_REPOSITORY`改为自己的路径。

```yaml
name: deploy

on:
    push:
    workflow_dispatch:

jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v2
              with:
                submodules: true  # Fetch Hugo themes (true OR recursive)
                fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

            - name: Setup Hugo
              uses: peaceiris/actions-hugo@v2
              with:
                  hugo-version: "latest"

            - name: Build Web
              run: hugo --minify

            - name: Deploy Web
              uses: peaceiris/actions-gh-pages@v3
              with:
                  PERSONAL_TOKEN: ${{ secrets.PERSONAL_TOKEN }}
                  EXTERNAL_REPOSITORY: username/username.github.io
                  PUBLISH_BRANCH: master
                  PUBLISH_DIR: ./public
                  commit_message: ${{ github.event.head_commit.message }}
```

为了实现将博客工程仓库的内容推送到外部的Github Page仓库，我们需要在Github的`Setting - Developer setting - Personal access tokens`下面创建一个Token，需要勾选`workflows`和`admin:repo_hook`权限。生成后将Token复制下来。

在博客工程仓库的`Settings - Secrets - Actions`配置一个名字叫`PERSONAL_TOKEN`的环境变量，并且值为刚刚生成的Token。

完成这一套操作之后我们可以在博客工程仓库手动触发一下刚刚配置的Action，看看能否自动推送到Github Page仓库。

完成Action的配置后，我们只需要写完博客后将最新的博客工程推送到Github就能完成备份、渲染、部署的全部工作。

## End

到此，希望读者已经完成了博客搭建。读者可以进一步的为博客配置域名地址，修改主题文件diy主题样式等。
