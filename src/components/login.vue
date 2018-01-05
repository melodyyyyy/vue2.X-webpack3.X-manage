<template>
  <div class="login-wrapper">
	  <div class="login">
	  	<div class="login-title">后台管理系统</div>
	  	<el-form class="login-content" :model="loginForm"  :rules="rules"  ref="loginForm">
	  		<el-form-item prop="username">
	  			<el-input placeholder="username"  v-model="loginForm.username" >
	  				<template slot="prepend"><i class="fa fa-user"></i></template>
	  			</el-input>
	  		</el-form-item>
	  		<el-form-item prop="password">
	  			<el-input placeholder="password" type="password" v-model="loginForm.password"  @keyup.enter.native="submitForm('loginForm')">
	  				<template slot="prepend"><i class="fa fa-lock"></i></template>
	  			</el-input>
	  		</el-form-item>
	  		<div class="login-btn">
	  			<el-button type="primary" v-on:click="submitForm('loginForm')">登录</el-button>
	  		</div> 		
	  	</el-form>
	  </div> 	
  </div>
</template>

<script>
export default { 
  data () {
    return {
        loginForm: {
                    username: '',
                    password: ''
                },
        rules:{
        		    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
        }
    }
  },
   methods: {
            submitForm(formName) {
                const self = this;

                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',self.loginForm.username);
                        self.$router.push('/readme');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-wrapper{
	width:100%;
	height: 950px;
	background: url(../../static/image/background.jpg);
	background-size: cover;
	position:absolute;
}
.login{
	position: relative;
	top:320px;
	width:20%;
	height: 300px;
	margin:0 auto;
	background: white;
	border-radius: 6px;
}
.login-title{
	font-size:30px;
	text-align: center;
	padding-top: 30px;
}

.login-content{
	width: 80%;
	margin:20px auto;
}
.login-btn{
	text-align: center
}
.login-btn button{
	width: 100%
}

</style>