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

	// 退出
	logoutAdmin(req, res) {
		delete req.session.user;
		res.redirect("/admin/index");
	}

	// 用户列表
	userListAdmin(req, res) {
		userService.findAll().then(function(data){
			res.render("userlist", {list:data, title:'用户列表'});
		}).catch(function(err){
			console.log(err);
			res.redirect("error");
		});
	}

	// 后台登录验证
	loginCheck(req, res, next) {
		let user = req.session.user ;
		if(!user){
			return res.redirect("/admin/goToLogin");
		}
		next();
	}

	// 后台访问权限验证
	adminAuthCheck(req, res, next) {
		let user = req.session.user ;
		if(!user){
			return res.redirect("/admin/goToLogin");
		}
		// 非管理员角色
		if(user.role != 1){
			return res.render("error", {msg: "您没有权限进行此操作!"});
		}	
		next();
	}
}

module.exports = new UserAction();