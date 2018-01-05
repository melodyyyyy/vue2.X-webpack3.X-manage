<template>
   <div>
      <el-breadcrumb seperator="/">
          <el-breadcrumb-item><i class="fa fa-table"></i> 表单</el-breadcrumb-item>
          <el-breadcrumb-item>文件上传</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="uploaddiv">
     		<h3>点击上传</h3>
      	<el-upload
		  class="upload-demo"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :on-preview="handlePreview"
		  :on-remove="handleRemove"
		  :before-remove="beforeRemove"
		  multiple
		  :limit="3"
		  :on-exceed="handleExceed"
		  :file-list="fileList">
		  <el-button  type="primary">点击上传</el-button>
		  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
		<h3>拖拽上传</h3>
		<el-upload
		  class="upload-demo"
		  drag
		  action="https://jsonplaceholder.typicode.com/posts/"
		  multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
		<h3>vue图片剪裁上传组件:<a href="https://github.com/dai-siki/vue-image-crop-upload">vue-image-crop-upload</a></h3>
		 <el-button type="primary" @click="toggleShow">设置头像</el-button>
		
		<my-upload field="img"
	        @crop-success="cropSuccess"
	        @crop-upload-success="cropUploadSuccess"
	        @crop-upload-fail="cropUploadFail"
	        v-model="show"
			:width="300"
			:height="300"
			url="/upload"
			:params="params"
			:headers="headers"
			img-format="png"></my-upload>
		<img :src="imgDataUrl" class="imgDataUrl">
      </div>
     
   </div>
</template>
<script>
import MyUpload  from 'vue-image-crop-upload';
    export default {
        data: function(){
            return {
            	show: false,
			params: {
				token: '123456798',
				name: 'avatar'
			},
			headers: {
				smail: '*_~'
			},
			imgDataUrl: '' ,// the datebase64 url of created image
            	imageUrl: '',
            	fileList: [
            			{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
            			{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
            			]
            	
            }
        },
       components: {
              MyUpload
        },
        methods: {
            handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePreview(file) {
	        console.log(file);
	      },
	      handleExceed(files, fileList) {
	        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
	      },
	      beforeRemove(file, fileList) {
	        return this.$confirm(`确定移除 ${ file.name }？`);
	      },
	       
		 toggleShow() {
			this.show = !this.show;
		},
            /**
			 * crop success
			 *
			 * [param] imgDataUrl
			 * [param] field
			 */
		cropSuccess(imgDataUrl, field){
			console.log('-------- crop success --------');
			this.imgDataUrl = imgDataUrl;
		},
			/**
			 * upload success
			 *
			 * [param] jsonData   服务器返回数据，已进行json转码
			 * [param] field
			 */
		cropUploadSuccess(jsonData, field){
			console.log('-------- upload success --------');
			console.log(jsonData);
			console.log('field: ' + field);
		},
			/**
			 * upload fail
			 *
			 * [param] status    server api return error status, like 500
			 * [param] field
			 */
		cropUploadFail(status, field){
			console.log('-------- upload fail --------');
			console.log(status);
			console.log('field: ' + field);
		}
        }
        
    }
</script>

<style scoped>
.uploaddiv{
	margin-top: 10px;
	width: 40%
}
.imgDataUrl{
	display: block;
	margin-top: 10px
}

</style>