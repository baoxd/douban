const userService = require('../service/UserService');

class UserAction {

	// 进入登录页面
	showLoginAdmin(req, res) {
		res.render("login", {"title": "用户登录"});
	}

	// 进入注册页面
	showRegisterAdmin(req, res) {
		res.render("register", {"title": "用户注册"});
	}

	// 用户注册
	registerAdmin(req, res) {
		let user = req.body.user;
		userService.register(user).then(function(data){
			res.redirect("/admin/index");
		}).catch(function(err){
			console.log(err);
			res.render("error");
		});
	}

	// 用户登录
	loginAdmin(req, res) {
		let user = req.body.user;
		if(!user || !user.name || !user.password){
			res.redirect("/admin/goToRegister");
			return;
		}
		userService.login(user).then(function(data){
			// console.log(data)
			if(data){
				req.session.user = data ;
				res.redirect("/admin/index");
			}else{
				res.redirect("/admin/goToRegister");
			}
		}).catch(function(err){
			console.log(err);
			res.render("error");
		});
	}

	// 后台登录验证
	

	// 后台访问权限验证
	adminAuthCheck(req, res, next) {
		let user = req.session.user ;
		// 非管理员角色
		if(user.role !=1){
			return req.redirect("/admin/index");
		}	
		next();
	}
}

module.exports = new UserAction();