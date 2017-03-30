const movieAction  = require('../action/movieAction');

const  Router = function(app){

	app.use(function(req, res, next){
		app.locals.user = req.session.user;
		next();
	});

	app.use("/admin/index", movieAction.indexAdmin);
}

module.exports = Router;