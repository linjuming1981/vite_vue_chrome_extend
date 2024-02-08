<template>
  <div>
    <div>
      <a :href="plugPopupUrl">扩展网址</a>
    </div>
    <el-radio-group v-model="action">
      <el-radio-button label="header">添加header</el-radio-button>
      <el-radio-button label="other">其他</el-radio-button>
    </el-radio-group>
  </div>
</template>
<script>

export default {
  emits: ['setAction'],
  components: {},
  props: {},
  data () {
    return {
      plugPopupUrl: chrome?.runtime?.getURL?.('index.html'),
      action: 'header'
    };
  },
  computed: {},
  watch: {
    action(val){
      this.$emit('setAction', val)
    }
  },
  created () {},
  mounted () {},
  methods: {
  
  },
};
</script>
<style lang="less" scoped>
</style>