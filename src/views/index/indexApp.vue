<template>
  <div id="app">
    <!-- <head/> -->
    <!-- <img src="../../assets/logo.png"> -->
    indexindexindexindex
    <br/>
    <IndexOn></IndexOn>
    <IndexTw></IndexTw>
    <IndexTh></IndexTh>
    <IndexFo></IndexFo>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import headd from './../../public/head'
import IndexOn from './components/IndexOn'
import IndexTw from './components/IndexTw'
import IndexTh from './components/IndexTh'
import IndexFo from './components/IndexFo'
// import IndexOn from './IndexOn'
export default {
  name: 'App',
  components: {IndexOn, IndexTw, IndexTh, IndexFo},
  methods: {}
}
</script>

<style>
*{
  margin: 0 auto;
}
.index {
  font-size: 100px;
}
</style>
