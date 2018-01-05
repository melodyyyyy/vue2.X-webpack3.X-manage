<template>
   <div class="baseform">
      <el-breadcrumb seperator="/">
          <el-breadcrumb-item><i class="fa fa-table"></i> 表单</el-breadcrumb-item>
          <el-breadcrumb-item>基础表单</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="formdiv">
         <el-form ref="ruleForm" :model="ruleForm" label-width="100px" :rules="rules">
              <el-form-item label="input输入框" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="select选择器">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="switch开关" >
                  <el-switch v-model="ruleForm.switchstate"></el-switch>
                </el-form-item>
                <el-form-item label="slider 滑块" >
                  <el-slider v-model="ruleForm.slidevalue"></el-slider>
                </el-form-item>
                 <el-form-item label="活动性质">
                    <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                  <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                 <el-form-item label="备注">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
          </el-form>
           
      </div>
   </div>
</template>
<script>
    export default {
        data: function(){
            return {            
               ruleForm : {
                name:'',
                region:'',
                date1: '',
                date2: '',
                switchstate: true,
                slidevalue: 31,
                type: [],
                resource: '',
                desc: ''
               },
                rules:{
                      name: [
                              { required: true, message: '请输入用户名', trigger: 'blur' }
                          ],
                          
              }
            }
        },
        
       
        methods: {
           submitForm(formName){
             this.$refs[formName].validate((valid) => {
                if (valid) {
                  this.$message.success('提交成功！');
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
          
            
           }

        }

    }
</script>

<style scoped>
.formdiv{
  margin-top: 10px;
  width: 40%
}
.formdiv .line {
    text-align: center;
}
</style>