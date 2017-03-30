const cluster = require("cluster");
const os = require("os");
const log = console.log;

// 监听进程中断信号
process.on('SIGINT', function(){
	log('进程中断');
	process.exit(0);
});

process.on('SIGTERM', function(){
	log('进程请求中断');
	process.exit(0);
});

process.on('uncaughtException', function(){
	process.exit(1);
});

if(cluster.isMaster){
	cluster.on('fork', function(worker){
		log('进程创建成功 #%s [pid:%s]', worker.id, worker.process.pid);
	});

	cluster.on('exit', function(worker){
		log('进程退出 #%s [pid:%s]', worker.id, worker.process.pid);
		setTimeout(function(){
			cluster.fork();
		});
	});

	cluster.fork();
	return;
}

const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
const Router = require("./admin/router/routes");

Router(app);
app.listen(port);
log('服务启动: http://localhost:' + port);


