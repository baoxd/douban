/**
	电影dao，操作数据库
*/
const pool = require('../utils/db').pool;

class MovieDao {
	constructor() {

	}

	// 查询所有电影
	findAll() {
		return new Promise(function(resolve, reject){
			let sql = "select * from movie" ;
			pool.query(sql, function(err, results, fields){
				if(err){
					reject(err);
					return;
				}
				resolve(results);
			});
		});
	}

	// 根据类型查询
	findByType(type = null) {

	}

	// 根据ID查询
	findById(id) {
		return new Promise(function(resolve, reject){
			let sql = "select * from movie where id = ?" ;

			pool.query(sql, [id], function(err, results, fields){
				if(err){
					reject(err);
					return;
				}
				resolve(results);
			});
		});
	}

	// 添加电影
	add({id, title, doctor, language, country, summary, flashpath, poster, year, type, createtime}) {
		return new Promise(function(resolve, reject){
			let sql = `insert into movie(id, title, doctor, language, country, summary, flashpath, poster, year, type, createtime)
						values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

			pool.query(sql, [id, title, doctor, language, country, summary, flashpath, poster, year, type, createtime], function(err, results){
				if(err){
					reject(err);
					return;
				}
				resolve(results);
			});
		});
	}

	// 更新电影
	update(movie) {

	}

	// async函数，node暂时不支持，V7版本支持，Node运行参数里加上--harmony或者--harmony-async-await
	// async execMethod(method, ...args) {
	// 	let result = await this[method](...args) ;
	// 	return result;
	// }
}

module.exports = new MovieDao();
