<template>
  <div id="app">
    <h1>Query 2</h1>
    <a href="home.html"> Home </a>

    <h3>Vaccines, Mandates, and New COVID Variants affect on Monthly Cases</h3>

    <label for="case">Choose a Case:</label>
    <select id="case" name="caseList" form="caseform">
      <option value="vaccines">Vaccines</option>
      <option value="mandates">Mandates</option>
      <option value="variants">Variants</option>
    </select>
    <br>
    <button type="button">Get Data</button>

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
  name: 'Query2'
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
