const fs = require("fs");
const path = require("path");
const url = require("url");
const mime = require("mime-types");

// 前端跳转
class IndexAction {
	index(req, res) {
		let urlObject = url.parse(req.url == "/" ? "/index.html" : req.url),
			filepath = path.join(urlObject.pathname.slice(1));

		fs.exists(filepath, function(exists) {
			if (exists) {
				res.writeHead(200, {
					'Content-type': mime.lookup(path.extname(filepath)) + ';charset=UTF-8'
						// 'Content-Length':length
				});

				fs.createReadStream(filepath).pipe(res);
			}else{
				res.render("error", {msg:"请求路径不存在"});
			}
		});
	}
}

module.exports = new IndexAction();