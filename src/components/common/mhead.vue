<template>
 <div class="header">
 	<div class="logo">{{msg}}</div>
 	 <div class="user-info">
            <el-dropdown trigger="click" v-on:command="handleCommand">
                <span class="el-dropdown-link">    
                    <img class="user-logo" src="../../../static/image/elephant.jpg">          
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
 </div>
</template>

<script>
export default {
  
  data () {
    return {
     msg:'后台管理系统'
    }
  },
   computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
  },
    methods:{
         handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .header{
 	background:rgb(64, 158, 255);
 	color: white;
 	height: 70px;
 	line-height: 70px;
 	font-size: 22px;
 }
 .logo{
 	display: inline-block;
 	margin-left: 20px
 }
 .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
}
.user-info .el-dropdown-link{
	position: relative;
	display: inline-block;
	padding-left: 50px;
	color: #fff;
	cursor: pointer;
	vertical-align: middle;
}
.user-info .user-logo{
	position: absolute;
	left:0;
	top:15px;
	width:40px;
	height:40px;
	border-radius: 50%;
}

</style>
