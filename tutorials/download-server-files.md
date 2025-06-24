---
title: 如何下载服务器文件
description: 如何在一个服务器关服的时候下载服务器中的文件，以便各位在本地备份
date: 2025-06-24
---
# 如何下载服务器文件
考虑到服务器也许会停服，所以这里提供一个方法，在服务器停服时，可以将服务器文件下载到本地，以便各位玩家在本地协助服主备份。


## 关于SFTP
`‌SFTP`（Secure File Transfer Protocol）是一种安全的文件传输协议，基于SSH（Secure Shell）协议，用于在计算机网络中安全地传输文件‌。‌

## 下载教程

### 下载SFTP工具(WinSCP)
我们这里选用的工具是`WinSCP`免费、开源

*官网是免费的，MS Store里好像是71￥你要是钱就去赞助一下吧💵~*

#### 官网
🔗WinSCP官网：[前往→](https://winscp.net/eng/docs/lang:chs)

🔗Windows下载链接：[前往→](https://winscp.net/download/WinSCP-6.3.7-Setup.exe/download)

注：这个网站国内访问速度很快，下载速度也快，无需加速器等

### 安装
下载完成后会得到一个安装包`WinSCP.exe`，双击打开，选择“为所有用户安装”（这样路径会更整齐一些），接受协议，如果不在意安装位置，选择典型安装（推荐）（也可能为别的内容，认准上面那个），如果在意安装位置，就选择下面的自定义安装可以自定义路径、组件和功能（但是建议不要缺少功能），接下来的界面`commander`和`explorer`主题可以按照喜好选择，我是commander，后面就确认安装即可。安装后，可以勾选启动来直接启动。

### 使用

#### 连接

![页面布局](https://img.leipishu.top/new.png)

点击上方红框里的新标签页，随后弹出这个界面

![链接](https://img.leipishu.top/connect.png)

按照如图所示填写

具体内容：

::: info 提示
当前无需要备份的服务器
:::

填写完成后，点击下方登录

![登录](https://img.leipishu.top/login.png)

连接成功后显示

![成功](https://img.leipishu.top/look.png)

#### 导入本地
选中服务器文件界面，按键盘`ctrl + A`全选后拖动到另一侧的本地目录

::: warning 注意
服务器文件总大小约~~3.40GB~~，请确保目标盘符有足够空间
:::

至于本地目录怎么选就不多说了，和你的文件资源管理器操作差不多

等待传输完成即可