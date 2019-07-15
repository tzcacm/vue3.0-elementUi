<template>
  <div class="Rich">
    <editor id="tinymce" v-model="tinymceHtml" :init="init"></editor>
    <el-button class="sendHtml" @click="send" type="primary" :loading="isLoading">提交</el-button>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/mobile/theme';
import 'tinymce/themes/silver/theme'; //	这个引用是编辑器不显示才需要引用的
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/textcolor';
@Component({
  components: {
    Editor
  }
})
export default class Rich extends Vue {
  isLoading: boolean = false;
  tinymceHtml: string = '';
  init = {
    selector: '#tinymce', //DOM选择器
    language_url: '/static/tinymce/zh_CN.js', //导入语言文件
    language: 'zh_CN', //语言设置
    skin_url: '/static/tinymce/skins/ui/oxide', //主题样式
    height: 600, //高度
    menubar: true, //显示最上方menu菜单
    browser_spellcheck: true, //拼写检查
    branding: true, //去水印
    statusbar: true, //显示编辑器底部的状态栏
    elementpath: false, //禁用下角的当前标签路径
    paste_data_images: true, //允许粘贴图像
    plugins:
      'link lists image media code table colorpicker textcolor wordcount contextmenu',
    toolbar:
      'insertfile undo redo | styleselect | fontsizeselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
    images_upload_handler: (blobInfo, success, failure) => {
      let formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      console.log('上传图片', formData);
      setTimeout(() => {
        let url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563172846832&di=f339916700a98272857c1bf2568bf161&imgtype=0&src=http%3A%2F%2Fwww.ah.chinanews.com.cn%2F2018%2F0308%2FU441P946DT20180308172742.png';
        success(url);
        // failure('上传失败')
      });
    }
  };
  mounted() {
    tinymce.init({});
  }
  send() {
    if (this.tinymceHtml == '') {
      this.$message('请输入内容后再提交');
    } else {
      this.isLoading = true;
      setTimeout(() => {
        this.$message({
          message: '提交成功',
          type: 'success'
        });
        this.tinymceHtml = '';
        this.isLoading = false;
      }, 1000);
    }
  }
}
</script>
<style lang="scss">
.sendHtml {
  margin-top: 20px;
}
</style>

