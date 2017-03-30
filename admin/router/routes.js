const  Router = function(app){

	app.use("/admin/", function(req, res){
		res.send('hello touban');
	});
}

module.exports = Router;