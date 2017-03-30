// 数据连接
const mysql = require('mysql');
const HOST = "localhost";
const USER = "root" ;
const PASSWORD = "1234";
const DATABASE = "douban";
const LIMIT = 10 ;

exports.pool = mysql.createPool({
	host: HOST,
	user: USER,
	password: PASSWORD,
	database: DATABASE,
	connectionLimit: LIMIT
});
