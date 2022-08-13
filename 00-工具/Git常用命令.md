# Git 常用命令

1、 Git查看远程仓库名称

```
git remote -v
```

2、Git更换远程仓库URL

```
git remote set-url origin <new url>
```

3、添加远程关联

```
git remote add origin <url>
```

4、删除远程关联

```
git remote remove <url>
```

5、分支操作

```
# 查看本地分支
git branch

# 查看所有分支
git branch -a

# 创建分支
git branch <name>

#切换分支
git checkout <name>

# 创建并切换分支
git checkout -b <name>

# 合并分支到当前分支
git merge <name>

# 删除分支
git branch -d <name>

# 强制删除分支
git branch -D <name>
```

6、添加所有内容至暂存区

```
git add .
```

7、提交当前仓库的更改

```
git commit -m "备注" #提交暂存区文件
git commit -am "备注" #提交已跟踪的文件
```

8、拉取远程仓库的提交

```
git pull
git pull origin master
```

9、将本地内容提交到远程仓库

```
git push
git push origin master
```

10、查看Git日志记录

```
git log --name-status #每次修改的文件列表，显示状态
git log --name-only #每次修改的文件列表
git log --stat #没修改的文件列表及文件修改的统计
git whatchanged #每次修改的文件列表
git whatchanged --stat #每次修改的文件列表及修改的统计
git show #显示最后一次的文件改变的具体内容
git show -5 #显示最后5次的文件改变的具体内容
git show commitid #显示某个commitid改变的具体内容
```

11、回退操作

```
# 查看提交记录
git reflog

# 回退到指定版本
git reset --hard <版本号>
```

12、远程仓库分支覆盖本地分支

```
git reset --hard origin/branch
```

13、切换git origin源

```
git remote -v #查看当前远程库名称
git remote rm origin #删除远程origin
git remote add origin <url> #添加新地址
```

