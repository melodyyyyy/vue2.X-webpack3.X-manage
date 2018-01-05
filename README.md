## 前言
公司准备新换一个前端框架，通过调研之后选择了使用vue,一来vue轻巧优雅，二来vue的热度也越来越高。这是学习vue之后搭的第一个项目，做了一个简单的后台管理系统，里面包括常用的表格的增删改查、表单验证、图表、地图。萌新练手，轻拍^_^
## 技术栈
Vue.js 2.x + Element UI + webpack 3.x + vue-router + axios + ES6 + font-awesome
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
## 项目结构
	.
	├── build
	│   ├── build.js
	│   ├── check-versions.js
	│   ├── logo.png
	│   ├── utils.js
	│   ├── vue-loader.conf.js
	│   ├── webpack.base.conf.js
	│   ├── webpack.dev.conf.js
	│   └── webpack.prod.conf.js
	├── config
	│   ├── dev.env.js
	│   ├── index.js
	│   ├── prod.env.js
	│   └── test.env.js
	├── index.html
	├── LICENSE
	├── package.json
	├── package-lock.json
	├── README.md
	├── src
	│   ├── App.vue
	│   ├── assets
	│   │   └── logo.png
	│   ├── components
	│   │   ├── baseform.vue
	│   │   ├── basetable.vue
	│   │   ├── common
	│   │   │   ├── mfooter.vue
	│   │   │   ├── mhead.vue
	│   │   │   └── sideBar.vue
	│   │   ├── echarts.vue
	│   │   ├── home.vue
	│   │   ├── login.vue
	│   │   ├── map.vue
	│   │   ├── readme.vue
	│   │   ├── upload.vue
	│   │   ├── vueeditor.vue
	│   │   └── vuetable.vue
	│   ├── main.js
	│   └── router
	│       └── index.js
	├── static
	│   ├── css
	│   │   ├── font-awesome-4.7.0
	│   │   │   ├── css
	│   │   │   │   ├── font-awesome.css
	│   │   │   │   └── font-awesome.min.css
	│   │   │   ├── fonts
	│   │   │   │   ├── FontAwesome.otf
	│   │   │   │   ├── fontawesome-webfont.eot
	│   │   │   │   ├── fontawesome-webfont.svg
	│   │   │   │   ├── fontawesome-webfont.ttf
	│   │   │   │   ├── fontawesome-webfont.woff
	│   │   │   │   └── fontawesome-webfont.woff2
	│   │   │   ├── HELP-US-OUT.txt
	│   │   │   ├── less
	│   │   │   │   ├── animated.less
	│   │   │   │   ├── bordered-pulled.less
	│   │   │   │   ├── core.less
	│   │   │   │   ├── fixed-width.less
	│   │   │   │   ├── font-awesome.less
	│   │   │   │   ├── icons.less
	│   │   │   │   ├── larger.less
	│   │   │   │   ├── list.less
	│   │   │   │   ├── mixins.less
	│   │   │   │   ├── path.less
	│   │   │   │   ├── rotated-flipped.less
	│   │   │   │   ├── screen-reader.less
	│   │   │   │   ├── stacked.less
	│   │   │   │   └── variables.less
	│   │   │   └── scss
	│   │   │       ├── _animated.scss
	│   │   │       ├── _bordered-pulled.scss
	│   │   │       ├── _core.scss
	│   │   │       ├── _fixed-width.scss
	│   │   │       ├── font-awesome.scss
	│   │   │       ├── _icons.scss
	│   │   │       ├── _larger.scss
	│   │   │       ├── _list.scss
	│   │   │       ├── _mixins.scss
	│   │   │       ├── _path.scss
	│   │   │       ├── _rotated-flipped.scss
	│   │   │       ├── _screen-reader.scss
	│   │   │       ├── _stacked.scss
	│   │   │       └── _variables.scss
	│   │   └── main.css
	│   ├── image
	│   │   ├── background.jpg
	│   │   └── elephant.jpg
	│   ├── js
	│   └── table.json
	└── test
	    ├── e2e
	    │   ├── custom-assertions
	    │   │   └── elementCount.js
	    │   ├── nightwatch.conf.js
	    │   ├── runner.js
	    │   └── specs
	    │       └── test.js
	    └── unit
		├── jest.conf.js
		├── setup.js
		└── specs
		    └── HelloWorld.spec.js

	22 directories, 82 files

## 遇到的问题
开发过程中热加载失效了，手动刷新也不行，只能重新启动才能看到修改的效果，解决方法如下：

	echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

	sudo sysctl -p
## License
MIT Copyright (c) 2018 melody

