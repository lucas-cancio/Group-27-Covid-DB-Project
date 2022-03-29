<template>
  <div id="app">
    <h1>Query 4</h1>
    <a href="home.html"> Home </a>

    <h3>Times Affect on Rate of Change of COVID Infections/Hospitalizations/ICU/Deaths</h3>

    <form>
      <label for="newData">Input New Data:</label><br>
      <input type="text" id="newData" name="newData"><br>
      <button type="button">Import Data</button>
    </form>

    <button type="button">Export Data</button>

  </div>
</template>

<script>

export default {
  name: 'Query4'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
