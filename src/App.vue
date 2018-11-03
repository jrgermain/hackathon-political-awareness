<template>
  <div id="app">
    <b-container fluid>
      <row>
        <b-form inline>
          <label>&nbsp;I am a&nbsp;</label>
          <b-select v-model="selected.who" class="m-md-2 bg-dark text-light">
            <option value="user" class="bg-transparent">current user of opioids</option>
            <option value="family">friend or family member</option>
          </b-select>
          <label>&nbsp;seeking&nbsp;</label>
          <b-select v-model="selected.what" class="m-md-2 bg-dark text-light">
            <option value="treatment">emergency treatment</option>
            <option value="info">helpful information</option>
          </b-select>
          <label>&nbsp;for opiate abuse.&nbsp;</label>
        </b-form>
      </row>
      <row>
        <router-link v-bind:to="'/' + selected.who + '/' + selected.what">
          {{ "/" + selected.who + "/" + selected.what }}
        </router-link>
        <router-view>
        </router-view>
      </row>
    </b-container>
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
      selected: {who: null, what: null}
    }
  }
}
</script>

<style>
body {
  background-color: #0c0c0c;
}

#app {
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dedede;
  margin-top: 60px;
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
