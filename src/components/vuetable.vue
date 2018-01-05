<template>
   <div class="table">
      <el-breadcrumb seperator="/">
          <el-breadcrumb-item><i class="fa fa-table"></i> 表格</el-breadcrumb-item>
          <el-breadcrumb-item>vue表格</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="plugins-tips">
            vue-easytable ：基于 vue2.x 的 table 组件支持单元格合并、单元格编辑、多表头固定、多列固定、列拖动、排序、自定义列、分页、单元格编辑、多选等功能。
            访问地址：<a href="https://github.com/huangshuwei/vue-easytable" target="_blank">vue-easytable</a>
      </div>
      <v-table 
              is-horizontal-resize
              style="width:100%"         
              :columns="columns"
             :table-data="tableDataVue"
              row-hover-color="#eee"
              row-click-color="#edf7ff"  
              :paging-index="(pageIndex-1)*pageSize"
        ></v-table>
      <v-pagination  style="margin-top:20px;float:right"  
              :total="23" 
              @page-change="pageChange"
              @page-size-change="pageSizeChange"
              :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"
      ></v-pagination>
       </div>
   </div>
</template>
<script>
import {VTable,VPagination} from 'vue-easytable'
import 'vue-easytable/libs/themes-base/index.css'
    export default {
        data: function(){
            return {
               pageIndex:1,
               pageSize:10,
               tableDataVue:[],
                url: '../../static/table.json',
                columns: [
                    {field: 'custome', title:'排序', width: 100, titleAlign: 'center',columnAlign:'center',isFrozen: true,
                    formatter: function (rowData, index,pagingIndex) {
                                var currentIndex = index+pagingIndex;
                                return currentIndex+1
                            }
                     },
                      {field: 'name', title: '姓名', width: 260, titleAlign: 'center',columnAlign:'center',isFrozen: true},
                    {field: 'tel', title: '手机号码', width: 260, titleAlign: 'center',columnAlign:'center',isFrozen: true},
                    {field: 'hobby', title: '爱好', width: 330, titleAlign: 'center',columnAlign:'center',isFrozen: false,isResize:true},
                    {field: 'address', title: '地址', width: 330,titleAlign: 'center',columnAlign:'left',isResize:true}
                ]
            }
        },
        created(){
            this.getData();
        },
        components: {
            VTable,
            VPagination,
        },

        methods:{
           getData(){
                let self = this;
                self.$axios.get(self.url, {                  
                }).then((response) => {
                    self.tableDataVue = response.data.tableDataVue.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize);                 
                })
            },
            pageChange(pageIndex){
                 this.pageIndex = pageIndex;
                 this.getData();
            },
             pageSizeChange(pageSize){

                this.pageIndex = 1;
                this.pageSize = pageSize;
                 this.getData();
           },
        }
      

    }
</script>

<style scoped>
.plugins-tips{
      background: #eef1f6;
      padding: 20px 10px;
    margin-bottom: 20px;
    margin-top: 10px;
}
</style>