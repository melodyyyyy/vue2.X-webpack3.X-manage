## 前言
公司准备新换一个前端框架，通过调研之后选择了使用vue,一来vue轻巧优雅，二来vue的热度也越来越高。这是学习vue之后搭的第一个项目，做了一个简单的后台管理系统，里面包括常用的表格的增删改查、表单验证、图表、地图。萌新练手，轻拍^_^
## 技术栈
Vue.js 2.x + Element UI + webpack 3.x + vue-router + axios + ES6 + fontawesome
## 项目运行
	git clone git@github.com:melodyyyyy/vue2.X-webpack3.X-manage.git

	cd vue2.X-webpack3.X-manage

	# install dependencies
	npm install

	#serve with hot reload at localhost:8080
	npm run dev

	# build for production with minification
	npm run build

## 开发环境
centos7+chrome 60+nodejs 8.4.0
## 遇到的问题
用的过程中热加载失效了，手动刷型也不行，只能重新启动才能看到修改的效果，解决方法如下：
	echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
	sudo sysctl -p
## License
MIT Copyright (c) 2018 melody

