<template>
  <div>
    <el-checkbox-group v-model="action">
      <el-checkbox-button label="header">添加header</el-checkbox-button>
      <el-checkbox-button label="other">其他</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>
<script>

export default {
  components: {},
  props: {},
  data () {
    return {
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
  methods: {},
};
</script>
<style lang="less" scoped>
</style>