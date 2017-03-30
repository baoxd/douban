/**
	电影服务类
*/
const movieDao = require('../dao/MovieDao');

class MovieService {
	constructor(){
	}

	// 查询所有电影
	findAll() {
		return movieDao.findAll() ;
	}

	// 查询热门电影
	findHot() {

	}

	// 根据电影类型查询电影
	findByType(type) {

	}

	// 添加添加
	add(movie) {

	}

	// 删除电影
	delete(id) {

	} 

	// 更新电影
	update(movie) {

	}
}

module.exports = new MovieService();