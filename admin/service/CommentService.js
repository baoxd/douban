const commentDao = require("../dao/CommentDao");

class CommentService {

	// 根据电影id查询评论列表
	findByMovieId(movieid) {
		return commentDao.findByMovieId(movieid);
	}

}

module.exports = new CommentService();