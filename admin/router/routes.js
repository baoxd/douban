const movieAction  = require('../action/movieAction');
const userAction = require('../action/userAction');
const commentAction = require("../action/commentAction");

const  Router = function(app){

	// 保存session信息
	app.use(function(req, res, next){
		app.locals.user = req.session.user;
		next();
	});

	// 首页
	app.use("/admin/index", userAction.adminAuthCheck , movieAction.indexAdmin);
	// 跳转到添加电影
	app.use("/admin/movieGoToAdd", userAction.adminAuthCheck, movieAction.movieGoToAddAdmin);
	// 添加电影
	// connect-multiparty 文件上传中间件 
	app.use("/admin/movieAdd", userAction.adminAuthCheck, require('connect-multiparty')(), movieAction.movieAddAdmin);
	// 电影列表
	app.use("/admin/movieList", userAction.adminAuthCheck, movieAction.movieListAdmin);
	// 电影列表
	app.use("/admin/movieDetail/:id", userAction.adminAuthCheck, movieAction.movieDetailAdmin);
	// 更新
	app.use("/admin/movieUpdate/:id", userAction.adminAuthCheck, movieAction.movieUpdateAdmin);

	// 发表评论
	app.post("/admin/comment", userAction.adminAuthCheck, commentAction.commentAddAdmin);


	// 跳转注册页面
	app.use("/admin/goToRegister", userAction.showRegisterAdmin);
	// 跳转到登录页面
	app.use("/admin/goToLogin", userAction.showLoginAdmin);
	// 用户注册
	app.use("/admin/register", userAction.registerAdmin);
	// 用户注册
	app.use("/admin/login", userAction.loginAdmin);
	// 用户列表
	app.use("/admin/userlist", userAction.adminAuthCheck , userAction.userListAdmin);
	// 退出登录
	app.use("/admin/logout", userAction.logoutAdmin);
}

module.exports = Router;