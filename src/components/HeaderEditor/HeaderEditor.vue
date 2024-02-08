<template>
  <div class="HeaderEditor">
    <el-button @click="getCurPageHeaders()">aa获取当前页面headers</el-button>
  </div>
</template>
<script>
import chromeStoreApi from '@/apis/chromeStoreApi';
import {getCurPageInfo} from '@/utils/util.js';

export default {
  components: {},
  props: {},
  data () {
    return {
      headers: [],
    };
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async getCurPageHeaders(){
      let host = await getCurPageInfo('host')
      let headers = await chromeStoreApi.getPageHeaders({host})
      console.log('1111 getCurPageHeaders', headers);
      this.headers = headers

    }
  },
};
</script>
<style lang="less" scoped>
</style>