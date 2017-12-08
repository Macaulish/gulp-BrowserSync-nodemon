const bs = require('browser-sync').create();

bs.init({
	server:"./"
});

// 监视*.html change事件 然后reload
bs.watch('*.html').on('change',bs.reload)
