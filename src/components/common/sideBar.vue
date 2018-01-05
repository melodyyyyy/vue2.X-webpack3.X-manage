<template>
  <div class="sidebar">
      <el-menu class="el-menu-vertical-demo" :default-active="onRoutes" unique-opened router>
          <template v-for="item in items">
              <template v-if="item.subs">
                  <el-submenu :index="item.index">
                      <template slot="title">
                          <i v-bind:class="item.icon"></i>
                          {{item.title}}
                      </template>
                      <el-menu-item v-for="(subitem,i) in item.subs" :index="subitem.index" :key="i">
                          {{subitem.title}}
                      </el-menu-item>
                  </el-submenu>
              </template>
              <template v-else>
                  <el-menu-item :index="item.index">
                      <i v-bind:class="item.icon"></i>
                      {{item.title}}
                  </el-menu-item>
              </template>
          </template>
      </el-menu>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '介绍'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '表格',
                        subs: [
                            {
                                index: 'basetable',
                                title: '基础表格'
                            },
                            {
                                index: 'vuetable',
                                title: 'Vue表格组件'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '表单',
                        subs: [
                            {
                                index: 'baseform',
                                title: '基本表单'
                            },
                            {
                                index: 'vueeditor',
                                title: '富文本编辑器'
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'echarts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'map',
                        title: '地图'
                    },
                ]
            }
        },
         computed:{
           onRoutes(){
                 return this.$route.path.replace('/','');
             }
         }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
