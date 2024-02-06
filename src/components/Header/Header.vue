<template>
  <div>
    <el-radio-group v-model="action" @change="actionChange">
      <el-radio-button label="header">添加header</el-radio-button>
      <el-radio-button label="other">其他</el-radio-button>
    </el-radio-group>
    <el-button @click="actionChange(1)">fff1231</el-button>
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