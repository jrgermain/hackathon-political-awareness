<template>
  <div id="app">

    <div>
      <b-dropdown id="ddown1" text="I am a" class="m-md-2">
        <b-dropdown-item>drug addict</b-dropdown-item>
        <b-dropdown-item>family member</b-dropdown-item>
      </b-dropdown>
    </div>

    <div>
      <b-dropdown id="ddown1" text="seeking" class="m-md-2">
        <b-dropdown-item>emergency treatment</b-dropdown-item>
        <b-dropdown-item>helpful information</b-dropdown-item>
      </b-dropdown>
    </div>

    <span>for opiate abuse</span>

    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>

    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  data () {
    return {
      msg: 'msg test'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dedede;
  margin-top: 60px;
  background-color: #0c0c0c;
}

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
