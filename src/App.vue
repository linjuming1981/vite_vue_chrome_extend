<template>
  <div class="app">
    <Header @setAction="setAction" />
    <HeaderEditor v-if="action==='header'" />
  </div>
</template>
<script>
import Header from '@/components/Header/Header.vue';
import HeaderEditor from '@/components/HeaderEditor/HeaderEditor.vue';
export default {
  components: {Header, HeaderEditor},
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
      console.log('22222', action);
      this.action = action
    }
  },
};
</script>
<style lang="less" scoped>
</style>