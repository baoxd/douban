const indexAction  = require('../action/movie');

const  Router = function(app){

	app.use("/admin/index", function(req, res){
		res.send('hello touban');
	});
}

module.exports = Router;