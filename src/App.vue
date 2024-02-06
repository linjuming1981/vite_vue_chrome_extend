<template>
  <div class="app">
    <Header @setAction="setAction" />
  </div>
</template>
<script>
import Header from '@/components/Header/Header.vue';
export default {
  components: {Header},
  props: {},
  data () {
    return {
      action: 'header',
    };
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    setAction(action){
      this.action = action
    }
  },
};
</script>
<style lang="less" scoped>
</style>