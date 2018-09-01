<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      <a href="/views/index.html">跳转到index页</a>
      <a href="/views/about.html">跳转到about页</a>
      <a href="/views/product.html">跳转到product页</a>
      <a href="/views/news.html">跳转到news页</a>
      <a href="/views/relation.html">跳转到relation页</a>
      <a href="/views/success.html">跳转到success页</a>
    </h2>
    <router-link :to="{ name: 'testRouter' }">product中的子路由</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'product'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
