const commentService = require('../service/CommentService');

class CommentAction {

	// 发表评论
	commentAddAdmin(req, res) {
		let comment = req.body.comment ;

		if(!comment){
			res.render("error", {msg: "评论数据有问题"});
			return;
		}
		commentService.add(comment).then(function(data){
			res.redirect("/admin/movieDetail/" + comment.movieid);
		}).catch(function(err){
			console.log(err);
			res.render("error", {msg: "评论添加出错"});
		});
	}
}

module.exports = new CommentAction();