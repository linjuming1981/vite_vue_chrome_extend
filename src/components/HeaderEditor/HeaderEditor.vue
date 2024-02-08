<template>
  <div class="HeaderEditor">
    <el-button @click="getCurPageHeaders()">获取当前页面headers</el-button>
  </div>
</template>
<script>
import chromeStoreApi from '@/apis/chromeStoreApi';

export default {
  components: {},
  props: {},
  data () {
    return {
      headers: [
        {
          apiPath: '',
          headerKeys: []
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    getCurWinUrl(){
      return new Promise((resolve) => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var url = tabs[0].url;
          console.log('curUrl', url);
          resolve(url)
        });
      })
    },
    async getCurPageHeaders(){
      let url = await this.getCurWinUrl()
      // chrome.runtime.sendMessage({
      //   action: 'getCurPageHeaders',
      // }, res => {
      //   console.log('curPageHeaders', res);
      // })

      let headers = await chromeStoreApi.getPageHeaders()
      console.log('1111 getCurPageHeaders', headers);
      this.headers = headers

    }
  },
};
</script>
<style lang="less" scoped>
</style>