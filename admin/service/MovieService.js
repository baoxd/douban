/**
	电影服务类
*/
const movieDao = require('../dao/MovieDao');
const utils = require("../utils/utils");

class MovieService {
	constructor(){
	}

	// 查询所有电影
	findAll() {
		// return movieDao.execMethod('findAll') ;
		return movieDao.findAll();
	}

	// 查询热门电影
	findHot() {

	}

	// 根据电影类型查询电影
	findByType(type) {

	}

	// 根据id查询
	findById(id) {
		return movieDao.findById(id);
	}

	// 添加添加
	add(movie) {
		movie.id = utils.uuid();
		movie.createtime = Date.now();
		return movieDao.add(movie);
	}

	// 保存电影
	save(movie) {
		return movieDao.save(movie);
	}

	// 删除电影
	delete(id) {

	} 

}

module.exports = new MovieService();