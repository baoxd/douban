const pool = require('../utils/db').pool;

class CommentDao {

	// 根据电影id查询评论列表
	findByMovieId(movieid) {
		return new Promise(function(resolve, reject){
			let sql = "select * from comments where movieid = ?" ;

			pool.query(sql, [movieid], function(err, results, fields){
				if(err){
					reject(err);
					return;
				}
				resolve(results);
			})
		});
	}

	

}