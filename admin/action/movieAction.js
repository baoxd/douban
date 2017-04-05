/**
	电影控制器
	提供后台模板输出和前端接口操作
*/
const movieService = require('../service/MovieService');
const commentService = require('../service/CommentService');
const utils = require("../utils/utils");

class MovieAction {

	// 后台首页
	indexAdmin(req, res) {
		movieService.findAll().then(function(data){
			res.render('index', {list: data});
		}).catch(function(err){
			res.render('error');
		});
	}

	// 跳转电影添加页
	movieGoToAddAdmin(req, res) {
		res.render('movieAdd', {
			title: '电影添加',
			movie: {
				title: "",
				doctor: "",
				country: "",
				language: "",
				year: "",
				type:"",
				flashpath:"",
				poster: "",
				summary: ""
			}
		});
	}

	// 添加电影
	movieAddAdmin(req, res) {
		let movie = req.body.movie;
		// 文件保存
		if(req.files){
			utils.upload(req.files);
		}
		if(!movie){
			res.redirect("error", {msg: "电影参数有误"});
			return;
		}
		movieService.add(movie).then(function(data){
			res.redirect("/admin/index");
		}).catch(function(err){
			console.log(err);
			res.redirect("error");
		});
	}

	// 电影列表
	movieListAdmin(req, res) {
		movieService.findAll().then(function(data){
			res.render("movielist", {list: data});
		}).catch(function(err){
			console.log(err);
			res.redirect("error",{msg:"电影列表查询出错"});
		});
	}

	// 电影详情页
	movieDetailAdmin(req, res) {

	}
}

module.exports = new MovieAction();