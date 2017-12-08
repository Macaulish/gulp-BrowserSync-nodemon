const gulp = require('gulp');
// 调用.create() 意味着你得到一个唯一的实例并允许您创建多个服务器或者代理。
const browserSync = require('browser-sync').create();
// 定义一个服务，任务的名字，该任务所要执行的一些操作
gulp.task('watch',function(){
	// 启动Browsersync服务。这将启动一个服务器，代理服务器(proxy)or静态服务器(server)
	browserSync.init({
		//设置监听的文件,以gulpfile.js所在的根目录未起点,如果不在根目录要加上路径,单个文件就用字符串,多个文件就用数组
		files:['*.html','css/*.css','js/*.js'],
		// 启动静态服务器,默认监听3000端口,设置启动时打开的index.html的路径
		server:{
			baseDir:'./'
		},
		// 在不同浏览器上镜像点击,滚动和表单,即所有浏览器会同步
		ghostMode:{
			clicks:true,
			scroll:true
		},
		// 更改控制台前缀
		logPrefix:'learning browser-sync in gulp',
		// browser:['chrome','firefox','iexplore'],
		// 设置监听时打开的浏览器,下面的设置会同时打开chrome
		browser:['chrome'],
		// 设置服务监听的端口号
		port:8080
	})


})