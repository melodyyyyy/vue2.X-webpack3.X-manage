<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
	                <el-breadcrumb-item><i class="fa fa-bell"></i> 介绍</el-breadcrumb-item>
	            </el-breadcrumb>
		</div>
		<el-card class="box-card">
		  <div slot="header" class="card-header">
		    <span>项目介绍</span>		    
		  </div>
		  <div class="article-content">
		    <h2>后台管理系统</h2>
		    <p>基于Vue.js 2.x系列 + Element UI +webpack 3.x系列 + vue-router的后台管理系统解决方案</p>
		    <h3>前言</h3>
		    <p>本项目集合了表格、表单、图表等后台管理系统常见的功能。</p>
		    <h3>功能</h3>
		    <el-checkbox disabled checked>Element UI</el-checkbox>
		    <br>
		    <el-checkbox disabled checked>font awesome</el-checkbox>
                <br>
                <el-checkbox disabled checked>登录/注销</el-checkbox>
                <br>
                <el-checkbox disabled checked>表格</el-checkbox>
                <br>
                <el-checkbox disabled checked>表单</el-checkbox>
                <br>
                <el-checkbox disabled checked>图表</el-checkbox>
                <br>
                <el-checkbox disabled checked>地图</el-checkbox>
		  </div>
		</el-card>
	</div>
 

</template>

<script>
export default {
  
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .text {
    font-size: 14px;
  }
.article-content h2{
	border-bottom: 1px solid #ddd;
	padding-bottom: 10px
}
.article-content h3{
	border-bottom: 1px solid #ebeef5;
	padding-bottom: 10px
}
.box-card {
    width: 980px;
    margin-top: 10px;
}

</style>
