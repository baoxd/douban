const pool = require('../utils/db').pool;

class CommentDao {

	// 根据电影id查询评论列表
	findByMovieId(movieid) {
		return new Promise(function(resolve, reject){
			let sql = `select * from comments where movieid = ?` ;

			pool.query(sql, [movieid], function(err, results, fields){
				if(err){
					reject(err);
					return;
				}
				resolve(results);
			})
		});
	}

	// 添加评论
	add({id, content, userid, movieid, createtime}) {
		return new Promise(function(resolve, reject){
			let sql = `insert into comments(id, content, userid, movieid, createtime) values(?, ?, ?, ?, ?)` ;

			pool.query(sql, [id, content, userid, movieid, createtime], function(err, results, fields){
				if(err){
					reject(err);
					return;
				}
				resolve(results);
			});
		});
	}

}

module.exports = new CommentDao();