<template>
  <div id="app">

    <h1>Query 1</h1>
    <a href="home.html"> Home </a>

    <h3>Monthly Cases by Age</h3>

    <form>
      <label for="age">Input Age Group:</label><br>
      <input type="text" id="age" name="age"><br>
      <button type="button">Get Data</button>
    </form>

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
  name: 'Query1'
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px 30px 60px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
</style>
