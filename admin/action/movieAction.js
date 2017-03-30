/**
	电影控制器
	提供后台模板输出和前端接口操作
*/
const movieService = require('../service/MovieService');

class MovieAction {

	// 后台首页
	indexAdmin(req, res) {
		movieService.findAll().then(function(data){
			res.render('index', {list: data});
		}).catch(function(err){
			res.render('error');
		});
	}
}

module.exports = new MovieAction();