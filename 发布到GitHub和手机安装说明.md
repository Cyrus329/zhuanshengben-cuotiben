# 发布到 GitHub 并安装到手机

这个文件夹已经改成可安装的手机网页应用。直接从 D 盘打开不能安装，必须先放到 GitHub Pages。

## 上传到 GitHub

1. 打开 GitHub，点右上角 `+`，选择 `New repository`。
2. 仓库名建议填：`wrong-question-organizer`。
3. 选择 `Public`，然后点 `Create repository`。
4. 点 `uploading an existing file`。
5. 把本文件夹里的所有文件和文件夹都拖进去，包括 `index.html`、`app.js`、`styles.css`、`manifest.webmanifest`、`sw.js`、`icons` 文件夹和 169 题 JSON。
6. 点 `Commit changes`。

## 开启云同步

1. 打开 Supabase 项目。
2. 左侧点 `SQL Editor`。
3. 新建一个查询，把 `supabase-setup.sql` 里面的内容全部复制进去。
4. 点 `Run`。
5. 不需要找 `service_role` 或 secret key，页面里已经使用你给的 publishable key。
6. 回到错题本页面，点“云同步”。
7. 填公开编号、编辑密码和 GitHub Pages 网页地址，点“保存并开启同步”。
8. 以后你新增、编辑、复习错题，会自动同步到云端。

公开编号建议用英文和数字，例如：`cyrus329`。
编辑密码只给你自己用，不要告诉别人，也不要用银行卡、微信、QQ 等重要密码。

别人查看时，用公开链接：

`https://你的用户名.github.io/wrong-question-organizer/?public=你的公开编号`

别人打开公开链接后只能查看你的错题数量、复习状态和记录内容，不能编辑你的数据。

别人需要一起改云端数据时，用协作链接：

`https://你的用户名.github.io/wrong-question-organizer/?edit=你的公开编号`

协作链接打开后还要输入编辑密码，密码正确才会加载并修改同一份云端数据。

注意：不要把从 D 盘直接打开时复制出来的 `file:///D:/...` 地址发给别人。云同步弹窗里的“网页地址”要填 GitHub Pages 给你的 `https://...` 地址。

## 打开 GitHub Pages

1. 进入仓库的 `Settings`。
2. 左侧点 `Pages`。
3. `Build and deployment` 里选择 `Deploy from a branch`。
4. Branch 选择 `main`，文件夹选择 `/root`，点 `Save`。
5. 等 1 到 3 分钟，页面会给你一个网址，格式类似：
   `https://你的用户名.github.io/wrong-question-organizer/`

## 安装到手机

安卓手机：

1. 用 Chrome 打开 GitHub Pages 网址。
2. 点页面里的“安装到手机”，或点浏览器右上角菜单。
3. 选择“安装应用”或“添加到主屏幕”。

iPhone：

1. 必须用 Safari 打开 GitHub Pages 网址。
2. 点底部分享按钮。
3. 选择“添加到主屏幕”。
4. 点“添加”。

安装后桌面会出现“错题本”图标，打开后像普通 App 一样使用。
