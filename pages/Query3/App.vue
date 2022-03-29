<template>
  <div id="app">
    <h1>Query 3</h1>
    <a href="home.html"> Home </a>

    <h3>Months (Seasons, Weather, Holidays) Affect on Monthly Cases</h3>

    <label for="year">Choose a Year:</label>
    <select id="year" name="yearList" form="yearform">
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>

    <br>

    <label for="month">Choose a Month:</label>
    <select id="month" name="monthList" form="monthform">
      <option value="january">January</option>
      <option value="february">February</option>
      <option value="march">March</option>
      <option value="april">April</option>
      <option value="may">May</option>
      <option value="june">June</option>
      <option value="july">July</option>
      <option value="august">August</option>
      <option value="september">September</option>
      <option value="october">October</option>
      <option value="november">November</option>
      <option value="december">December</option>
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
  name: 'Query3'
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
