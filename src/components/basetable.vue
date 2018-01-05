<template>
   <div class="table">
      <el-breadcrumb seperator="/">
          <el-breadcrumb-item><i class="fa fa-table"></i> 表格</el-breadcrumb-item>
          <el-breadcrumb-item>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="opratebox">
          <el-button type="primary" icon="fa fa-trash" @click="deleteAll()"> 批量删除</el-button>
          <el-select v-model="value" placeholder="请选择" class="opselect">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">                  
              </el-option>
          </el-select>
         <el-input placeholder="请输入名称或角色" v-model="namerole" clearable class="opinput">        
         </el-input>
          <el-button type="primary" icon="fa fa-search"></el-button>
      </div>
      <el-table :data="data" border style="width:100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column prop="hostname" label="主机名" width="260"></el-table-column>
          <el-table-column prop="role" label="已配置角色" width="360"></el-table-column>
          <el-table-column prop="ip" label="IP地址" width="360"></el-table-column>
          <el-table-column prop="status" label="状态" width="360" >
               <template slot-scope="scope">
                    <span v-bind:class="{'text-green': (scope.row.status === '正在运行'),'text-red': (scope.row.status === '运行失败')}">{{ scope.row.status }}</span>
              </template>
          </el-table-column>
          <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button   size="mini"   @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button  size="mini"  type="danger"    @click.native.prevent="deleteRow(scope.$index, tableData,scope.row)">删除</el-button>
              </template>
           </el-table-column>
      </el-table>
      <div class="pagination">
           <el-pagination  background  layout="prev, pager, next"    :total="1000"></el-pagination>
      </div>
     
   </div>
</template>
<script>
    export default {
        data: function(){
            return {
                 options: [{
                  value: '正在运行',
                  label: '正在运行'
                }, {
                  value: '运行失败',
                  label: '运行失败'
                }],
                value: '',
                namerole:'',
                url:'./static/table.json',
                tableData: [],
                multipleSelection: [],
               
            }
        },
         created(){
            this.getData();
        },
         computed: {
            data(){              
                const self = this;
                return self.tableData.filter(function(d){        
                        if(d.status.indexOf(self.value) > -1 && 
                            (d.hostname.indexOf(self.namerole) > -1 ||
                            d.role.indexOf(self.namerole) > -1)
                        ){
                            return d;
                        }                 
                })
            }
        },
        methods: {
             getData(){
                let self = this;
                self.$axios.get(self.url, {                  
                }).then((response) => {
                    self.tableData = response.data.tableData;                 
                })
            },
           deleteRow(index, rows,row) {
                rows.splice(index, 1);
                this.$message('删除了'+(row.hostname));
            },
            handleEdit(index, row){
                this.$message('编辑第'+(index+1)+'行');
            },
             
             handleSelectionChange(val) {
               
                this.multipleSelection = val;
            },
            deleteAll(){
                const self = this,
                length = self.multipleSelection.length;
                let str = '';
                for (let i = 0; i < length; i++) {
                    str += self.multipleSelection[i].hostname + ' ';
                }
                if(length=='0'){
                    self.$message.error('请选择需要删除的数据');
                }else{
                    self.$message.error('删除了'+str);
                }
                
            }    

        }

    }
</script>

<style scoped>
.opratebox{
    margin-top: 10px;
    margin-bottom: 20px
}
.opselect{
    width:120px;
}
.opinput{
    width:300px;
    display: inline-block;
}
.text-green{
    color:green;
}
.text-red{
     color:red;
}
</style>