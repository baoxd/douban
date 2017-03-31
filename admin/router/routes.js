const movieAction  = require('../action/movieAction');
const userAction = require('../action/userAction');

const  Router = function(app){

	// 保存session信息
	app.use(function(req, res, next){
		app.locals.user = req.session.user;
		next();
	});

	// 首页
	app.use("/admin/index", movieAction.indexAdmin);

	// 跳转注册页面
	app.use("/admin/goToRegister", userAction.showRegisterAdmin);
	// 跳转到登录页面
	app.use("/admin/goToLogin", userAction.showLoginAdmin);
	// 用户注册
	app.use("/admin/register", userAction.registerAdmin);
	// 用户注册
	app.use("/admin/login", userAction.loginAdmin);
}

module.exports = Router;