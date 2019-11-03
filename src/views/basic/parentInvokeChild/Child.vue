<template>
  <div class="c">
    <h2>我是子组件</h2>
  </div>
</template>
<script>
export default {
  props: {},
  data () {
    return {
      v: 0
    }
  },
  methods: {
    someMethod (x) {
      alert(x)
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
h2 {
  margin: 0px;
  padding: 0px;
}
.c {
  border: 5px solid #eee;
  padding: 24px;
}
</style>
