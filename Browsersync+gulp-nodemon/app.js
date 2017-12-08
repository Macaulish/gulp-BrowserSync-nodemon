const express = require('express');
const browserSync = require('browser-sync').create('myServer');

const app = express();


// // .init 启动服务器
// browserSync.init({
// 	server:'./',
// 	files:['*.html','css/*.css','js/*.js'],
// 	// browser:['chrome'],
// 	// port:3009
// });

// browserSync.reload

 
app.get('/',function(req,res){
	// res.send('this is the jjkj files');
	res.sendFile(__dirname+'/views/index.html')
});

app.get('/name',function(req,res){
	res.send('hello my ndfsdfame')
})


const server = app.listen(5009,'localhost',function(){
	console.log('http://%s:%s',server.address().address,server.address().port);
});









