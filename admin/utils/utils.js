const fs = require("fs");
const path = require("path");

module.exports = {
	uuid: function(len) {
		len = len ? len : 8;
		var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		var res = "";
		for (var i = 0; i < len; i++) {
			var id = Math.ceil(Math.random() * 35);
			res += chars[id];
		}
		return res;
	},
	upload: function(files){
		var	file = files["uploadPoster"],
			tmpPath = file.path,
			originalFilename = file.originalFilename,
			type = file.type,
			size = file.size ;

		if (originalFilename) {
			var timestamp = Date.now(),
				type = type.split("/")[1],
				newName = timestamp + "." + type,
				newPath = path.join(__dirname, "../../", "public/upload", newName),
				input = fs.createReadStream(tmpPath),
				output = fs.createWriteStream(newPath);

			input.on('data', function(d) {
				output.write(d);
			});
			input.on('error', function(err) {
				throw err;
			});
			input.on('end', function() {
				output.end();
				// 删除临时文件
				fs.unlink(tmpPath, function(err){
					if(err){
						console.log(err);
					}
				});
			});
		}
		// if(originalFilename){
		// 	fs.readFile(tmpPath, function(err, data){
		// 		var timestamp  = Date.now();
		// 		type = type.split('/')[1] ;
		// 		var newName = timestamp + '.' + type ;
		// 		var newPath = path.join(__dirname, "../../", "public/upload", newName);

		// 		fs.writeFile(newPath , data, function(err){
		// 			if(err){
		// 				console.log(err);
		// 				console.log('文件上传失败...');
		// 				return ;
		// 			}
		// 			console.log('文件上传成功...');
		// 			// 上传成功后，删除临时文件
		// 			fs.unlink(tmpPath, function(err){
		// 				if(err){
		// 					console.log('临时文件删除失败...');
		// 				}
		// 			});
		// 		})
		// 	});
		// }
	}
}