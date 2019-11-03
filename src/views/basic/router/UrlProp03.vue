<template>
  <div>
    <div>地址栏中地址格式：UrlProp3?q=hello&name=thd</div><br/>
    <div>params: {{ q }},{{ name }}</div>
  </div>
</template>
<script>
export default {
  props: ['q', 'name']
}
</script>
