# 复习

## Git常用命令
   * git init              初始化
   * 对工作区的修改        
      * 新增文件
      * 编辑文件
      * 删除文件
      * 重命名文件
   * git add -A            修改加入到暂存区
   * git commit -m ''      提交, 创建新的提交点
   * git status            查看当前仓库的状态
   * git branch            查看分支 git branch name 创建分支
   * git checkout -b       创建并切换分支
   * git branch -d         删除分支
   * git merge             合并分支
   * git pull              拉取更新
   * git push              推送提交
   * git clone             克隆仓库
  
## 重要场景
1. 第一次使用 Git
   * 获取仓库的 url 还有用户名和密码
   * 克隆仓库  git clone 
   * 切换分支 git checkout -b 
   * 代码完毕或者阶段性保存, git add -A   git commit 
   * 合并分支 git checkout dev
2. 第一次提交(推一下 哪个分支推)
   * git checkout dev 
   * git merge feature
   * git pull 
   * git push
3. 冲突解决
   * 出现的情况, 分支合并, 代码更新
   * 定位冲突文件. 『git status』  both
   * 修改文件. 原则 『将文件内容修改为它正确的样子』
   * 测试一下代码, 是否正常.
   * git add   git commit 
   * git pull  git push
