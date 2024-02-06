<template>
  <div>
    <el-checkbox-group v-model="action" @change="actionChange">
      <el-checkbox-button label="header">添加header</el-checkbox-button>
      <el-checkbox-button label="other">其他</el-checkbox-button>
    </el-checkbox-group>
    <el-button @click="actionChange(1)">fff</el-button>
  </div>
</template>
<script>

export default {
  emits: ['setAction'],
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
      console.log('11111', val);
      this.$emit('setAction', val)
    }
  },
  created () {},
  mounted () {},
  methods: {
    actionChange(val){
      console.log('222', val);
    }
  },
};
</script>
<style lang="less" scoped>
</style>