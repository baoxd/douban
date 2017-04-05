const commentDao = require("../dao/CommentDao");
const utils = require("../utils/utils");

class CommentService {

	// 根据电影id查询评论列表
	findByMovieId(movieid) {
		return commentDao.findByMovieId(movieid);
	}

	// 添加评论
	add(comment) {
		comment.id = utils.uuid();
		comment.createtime = Date.now();
		return commentDao.add(comment);		
	}

}

module.exports = new CommentService();