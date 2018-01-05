<template>
   <div>
      <el-breadcrumb seperator="/">
          <el-breadcrumb-item><i class="fa fa-table"></i> 表单</el-breadcrumb-item>
          <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      </el-breadcrumb>
       <div class="plugins-tips">
            Vue-Quill-Editor ：基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。
            访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">Vue-Quill-Editor </a>
      </div>     
      <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" ></quill-editor>
      <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
   </div>
</template>
<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import { quillEditor } from 'vue-quill-editor'
    export default {
        data: function(){
            return {
                content: '<p>Vue-Quill-Editor</p>',
                editorOption: {

                    // something config
                }
               
            }
        },
        components: {
            quillEditor
        },
       
        methods: {
             onEditorChange({ editor, html, text }) {
                this.content = html;
            },
             submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
           
        },
         computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
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
 
.quill-editor{
  height: 400px;
  margin-bottom: 50px
}
</style>