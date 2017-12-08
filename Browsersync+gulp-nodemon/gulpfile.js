const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');

gulp.task('nodemon',function () {
	nodemon({
		script:'app.js'
	}).on('start',function(){
		console.log('nodemon started')
	}).on('crash',function(){
		console.log('script ceashed for some reason')
	});
});



gulp.task('browserSync',['nodemon'],function(){
	// browserSync.init({
	// 	proxy: 'http://localhost:3000',
	// 	files: ['public/**/*.*', 'views/**/*.*', 'submodule/**/*.*'],
	// 	browser: 'chrome',
	// 	notify: false,
	// 	// port: 5000
	// });
	console.log('<<<<<<<<<')
	// browserSync.init({
	// 	server:{
	// 		baseDir:'/',
	// 		index:'index.html'
	// 	}
	// });
	browserSync.init({
		// server:"./",
		// 这个是他要监听的端口号，就是app.js里面的那个端口号（）
		proxy:'http://localhost:5009',
		// 这个是他要展现出来的端口号
		port:4999
	});
	// browserSync.watch('/views/*.html').on('change',browserSync.reload)
	browserSync.watch('./views/*.html').on('change',browserSync.reload)
	// browserSync.reload
})



gulp.task('server',function(){
	gulpNodemon({
		script:'app.js',
		ext:'js html',
		// 忽略部分对程序运行无影响的文件改动,nodemon只监视js文件,可用ext项来扩展别的文件类型
		ignore:["gulpfile.js","node_modules/","public/**/*.*"],
		env:{
			'NODE_ENV':'development'
		}
	}).on('start',function(){
		console.log('gulpNodemon is starting')
		browserSync.init({
			proxy:'http://localhost:5009',
			// file:['public/**/*.*','views/**','routes/**'],
			file:['*.js'],
			port:5009
		},function(){
			console.log('browser refreshed')
		})
	});
})






