const userDao = require("../dao/UserDao");
const utils = require("../utils/utils");

class UserService {

	// 用户登录
	register(user) {
		user.id = utils.uuid();
		user.createtime = Date.now();
		return userDao.add(user);
	}

	// 用户登录
	login(user) {
		return userDao.findByNP(user);
	}
}

module.exports = new UserService();