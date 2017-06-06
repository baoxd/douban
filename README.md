# 说明
模仿豆瓣的一个小网站

## 项目简介
项目分为前台、后台
后台主要负责各种数据的录入，现在暂时只有电影、评论、用户数据。
后端除了后台管理，还为前端提供了API接口。
前端使用react做页面应用，react-router支持路由，redux管理前端数据。其中react-router为4.0版，较上版改动很大，请慎用。
打包简单使用了webpack。开发阶段使用react-transform-hmr提供热更新能力。css文件使用豆瓣移动端web的css, 这样导致不同路由下css冲突，使用css-loader?mocules解决css冲突问题。

## 使用
`git clone https://github.com/baoxd/douban.git`
`cd douban`

`npm run dev`
`在浏览器输入`
`http://localhost:8080/`

`npm run build`
`npm run server`
`在浏览器输入`
`http://localhost:8001/`

##  项目需要mysql服务器支持
`const HOST = "XXX";`
`const USER = "XXX" ;`
`const PASSWORD = "XXX";`
`const DATABASE = "XXX";`

在db.js文件根据自己mysql 修改上面配置。
后台详细路径请看/admin/router/routes.js文件

项目暂时暂停，后续会持续完善功能，特别是在前端交互方面。


