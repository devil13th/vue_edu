<template>
  <div>
    我是父组件
    <input type="button" value="调用子组件中的方法" @click="invokeChildMethod" />
    <c ref="mychild"></c>
  </div>
</template>
<script>
import C from './Child'

export default {
  components: { C },
  props: {},
  data () {
    return {
      v: 0
    }
  },
  methods: {
    invokeChildMethod () {
      this.$refs.mychild.someMethod('hello 2')
    }
  },
  computed: {
    getV () {
      return ` value :${this.v}`
    }
  }
}
</script>
<style scoped>
</style>
