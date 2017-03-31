const pool = require("../utils/db").pool;


class UserDao {

	// 添加用户
	add({id, name, password, role = 2, createtime}) {
		return new Promise(function(resolve, reject){
			let sql = `insert into user(id, name, password, role, createtime) values(?, ?, ?, ?, ?)`;

			pool.query(sql, [id, name, password, role, createtime], function(err, results){
				if(err){
					reject(err);
					return;
				}
				resolve(results);
			});
		});
	}

	// 根据用户名、密码查询
	findByNP({name, password}) {
		return new Promise(function(resolve, reject){
			let sql = `select * from user where name=? and password=?` ;

			pool.query(sql, [name, password], function(err, results){
				if(err){
					reject(err);
					return;
				}
				resolve(results[0]);
			});
		});
	}

	// 查询所有用户
	findAll() {
		return new Promise(function(resolve, reject){
			let sql = `select * from user`;

			pool.query(sql, function(err, results){
				if(err){
					reject(err);
					return;
				}
				resolve(results);
			});
		});
	}
}

module.exports = new UserDao();