<template>
  <div id="app">
    <b-container fluid>
      <b-form inline>
        <label>&nbsp;I am a&nbsp;</label>
        <b-select v-model="selected" class="m-md-2 bg-dark text-light">
          <option value="user" class="bg-transparent">current user of opioids</option>
          <option value="family">friend or family member</option>
        </b-select>
        <label>&nbsp;seeking&nbsp;</label>
        <b-select v-model="selected" class="m-md-2 bg-dark text-light">
          <option value="treatment">emergency treatment</option>
          <option value="info">helpful information</option>
        </b-select>
        <label>&nbsp;for opiate abuse.&nbsp;</label>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'selector'
};
</script>

<style>
body {
  background-color: #dedede;
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
</style>
